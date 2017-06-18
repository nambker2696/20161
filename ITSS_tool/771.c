#include <stdio.h>
#include <sys/shm.h>
#include <sys/stat.h>

int main() {
  int* shm, shmid, k;
  shmid = shmget(IPC_PRIVATE,128,IPC_CREAT|0666); // Tạo shared memory
  shm= (int*) shmat(shmid,0,0); // Gắn shared memory vào address space của process
  if(fork()==0) {
    shm[0]=111;
    shm[1]=999;
    sleep(3);
    printf("Process %d reads: Sum = %d", getpid(),shm[2]);
    shmdt((void *)shm); // Gỡ shared memory khỏi không gian địa chỉ của process
    shmctl(shmid, IPC_RMID, (struct shmid_ds*)0); // Lấy hoặc thay đổi thuộc tính của shared memory
  } else {
    sleep(1);
    printf("Process %d writes to shared memory ...\n", getpid());
    shm[2]=shm[0]+shm[1];
    shmdt((void *)shm);
  }
  return(0);
}
