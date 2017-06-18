/* 	yeu cau: tien trinh cha chuyen lenh ls -l qua duong ong sang cho tien trinh con chay
 *
 */



#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>
#include <unistd.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <string.h>

#define PIPE_READ  0
#define PIPE_WRITE 1
#define PIPE_READ_WRITE  2
#define STD_IN  0
#define STD_OUT 1
#define BUFFSIZE 80

/**
 * main process
 */
int main(void)
{
  char buff[100];
  printf("main           : start\n");

  pid_t pid = 0;                  // process ID
  int pipe_c2p[PIPE_READ_WRITE];  // child to parent
  char buf[BUFFSIZE] = {'\0'};
  int  readSize = 0;
  memset(pipe_c2p, 0, sizeof(pipe_c2p));

  // Create pipe
  if(pipe(pipe_c2p)==-1){
    perror("processGenerate pipe");
    exit(1);
  }

  // Create child process
  switch (pid=fork()){
    case -1:
      perror("processGenerate fork");
      // Close input/output file descriptor of pipe
      close(pipe_c2p[PIPE_READ]);
      close(pipe_c2p[PIPE_WRITE]);
      exit(1);

    case 0:
      sleep(1);
      printf("childProcess start\n");
      read(pipe_c2p[PIPE_READ], buff, sizeof(buff));
      char *p = strtok(buff, " ");
      char *p1 = strtok(NULL, " ");
      //close(STD_OUT); // lenh nay khien cho tat ca cac lenh phia sau khong duoc chay
      dup(pipe_c2p[PIPE_WRITE]);  // duplication

      // close file descriptor for input/output
      close(pipe_c2p[PIPE_READ]);
      close(pipe_c2p[PIPE_WRITE]);
      execlp(p, p, p1, NULL);   // thuc hien lenh tu parent gui sang: ls -l
      perror("execlp : ls -l"); // neu lenh execlp bi loi thi chay xuong day
      exit(1);

    default:
      printf("parentProcess start\n");
      //close(STD_IN);   // lenh nay khien cho tat ca cac lenh phia sau khong duoc chay
      dup(pipe_c2p[PIPE_READ]); // duplication
      write(pipe_c2p[PIPE_WRITE], "ls -l", 100);

      // close file descriptor for input/output
      close(pipe_c2p[PIPE_READ]);
      close(pipe_c2p[PIPE_WRITE]);
  }
  printf("main           : end\n");
  return 0;
}
