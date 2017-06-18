/*	yeu cau: viet chuong trinh voi tham so dong lenh
 * 	la file du lieu, doc file du lieu ghi vao duong ong my_fifo
 * 	o mot tien trinh khac, mo duong ong, doc du lieu tu duong ong, in ra console
 */


/*de chay: ./producer my_test.txt sau do chay tiep ./consumer*/


#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <fcntl.h>
#include <limits.h>
#include <sys/types.h>
#include <sys/stat.h>
#define FIFO_NAME "my_fifo" 	/*Tạo đường ống*/
#define BUFFER_SIZE PIPE_BUF	/*Vùng đệm dùng cho đường ống*/
#define TEN_MEG ( 1024 * 1024 * 10 )	/*Dữ liệu*/

int main(int argc, char *argv[]) {
	int pipe_fd;
	int res;
	int open_mode = O_WRONLY;
	int bytes_sent = 0;
	char buffer[BUFFER_SIZE + 1];
	FILE *p;
	char buff[80];

	if(argc != 2) {
    	printf("tham so thu 1 la ten file du lieu\n");
    	exit(1);
  	}

  	p = fopen(argv[1], "r");

	/*Tạo pipe nếu chưa có*/
	if ( access( FIFO_NAME, F_OK ) == -1 ) {
		res = mkfifo( FIFO_NAME, (S_IRUSR | S_IWUSR) );
		if ( res != 0 ) {
			fprintf( stderr, "FIFO object not created [%s]\n", FIFO_NAME);
			exit( EXIT_FAILURE );
		}
	}

	/*Mở đường ống để ghi*/
	printf( "Process %d starting to write on pipe\n", getpid() );
	pipe_fd = open( FIFO_NAME, open_mode);
	if ( pipe_fd != -1 ) {
		/*Liên tục đổ vào đường ống*/
		while ( feof(p) == 0 ) {
			fgets(buffer,BUFFER_SIZE,p);
			res = write( pipe_fd, buffer, BUFFER_SIZE );
			if ( res == -1 ) {
				fprintf( stderr, "Write error on pipe\n" );
				exit( EXIT_FAILURE );
			}
			bytes_sent += res;
		}

		/*Kết thúc quá trình ghi dữ liệu*/
		fclose(p);
		( void ) close( pipe_fd );
	}  else {
		exit( EXIT_FAILURE );
	}
	printf( "Process %d finished, %d bytes sent\n", getpid(), bytes_sent );
	exit( EXIT_SUCCESS );

	return 0;
}
