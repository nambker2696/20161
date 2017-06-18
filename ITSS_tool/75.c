/*
cau lenh dich chuong trinh gcc -o bai7_5_1 bai7_5_1.c
su dung lenh ps aux de biet id cua tien trinh

lenh kill <pid> de kill tien trinh trong do pid la id cua tien trinh can kill
*/
#include <stdio.h>
#include <unistd.h>

#define SLEEP_SEC 1

int main(void)
{
  int i;
  char buf[512];

  // making to daemon
  daemon(1,1);

  // cwd display
  printf("cwd = %s\n", getcwd(buf, sizeof(buf)));

  // daemon executing display
  for(i=0; i<100; i++){
    printf("Daemon sample is executing %d\n", i);
    sleep(SLEEP_SEC);
  }
  printf("cwd = %s\n", getcwd(buf, sizeof(buf)));

  return 0;
}
