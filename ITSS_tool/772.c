#include <stdio.h>
#include <sys/shm.h>
#include <sys/stat.h>

int main() {
  int* shm, shmid, k;
  int i;
  shmid = shmget(IPC_PRIVATE,128,IPC_CREAT|0666);
  shm= (int*) shmat(shmid,0,0);
  for(i =0;i<3;i++) {
    if(fork()==0) {
      shm[0]=i;
      printf("Process %d reads: Sum = %d\n", getpid(),shm[0]);
      shmdt((void *)shm);
      shmctl(shmid, IPC_RMID, (struct shmid_ds*)0);
      sleep(1);
    }
  }
  return(0);
}
