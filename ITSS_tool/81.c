/*
Viet chuong trinh su dung share memmory
nvu1: In thong tin cua share memory ra console
nvu2: Viet thong tin vao vung share memory
*/

#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>
#include <sys/ipc.h>
#include <sys/shm.h>
#include <string.h>
#define SHIMSIZE 10
#define KEYFILE_PATH "keyfilepath"
#define PROJ_CHAR    "A"

int main() {
  int shmid, k;
  char *str;
  shmid = shmget(IPC_PRIVATE, 128, IPC_CREAT|0666);
  str = (char*) shmat(shmid, 0, 0);

  if(fork() == 0) { /*child*/
    sleep(2);
    printf("Process %d reads: %s", getpid(), str);
    shmdt((void *)str);
    shmctl(shmid, IPC_RMID, (struct shmid_ds *)0);
  } else { /*parent*/
    sleep(1);
    printf("Process %d writes to shared memory...\n", getpid());
    printf("Writing string: %s\n", "Hello world!");
    strcpy(str, "Hello world!");
    printf("Writed string: %s\n", "Hello world!");
    shmdt((void *)str);
  }
  return 0;
}
