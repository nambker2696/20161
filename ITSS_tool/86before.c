// Yeu cau :
/*
Thực hiện hai chương trình và bao gồm các chức năng sau trong mỗi chương trình :
  Thực hiện theo thứ tự của chương trình 1 và 2.
  Sau khi nó được hiển thị cho một chuỗi ký tự tùy ý của chương trình 2, 
    xác nhận nhận dữ liệu từ chương trình 2 được hiển thị trong chương trình 1.
Chương trình 1: In dữ liệu nhận được ra console sau khi yêu cầu nhận tin nhắn.
Chương trình 2: Sau khi enter một chuỗi ký tự bất kỳ = console, 
  chuyển tin nhắn đến chương trình 1.
*/
// Day la chương trình 2
#include <sys/types.h>
#include <sys/ipc.h>
#include <sys/msg.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define MAXSIZE 128

void die(char *s)
{
  perror(s);
  exit(1);
}

struct msgbuf
{
  long mtype;
  char mtext[MAXSIZE];
};

main()
{
  int msqid;
  int msgflg = IPC_CREAT | 0666;
  key_t key;
  struct msgbuf sbuf;
  size_t buflen;

  key = 1234;

  if ((msqid = msgget(key, msgflg )) < 0)   //Get the message queue ID for the given key
    die("msgget");

  //Message Type
  sbuf.mtype = 1;

  printf("Enter a message to add to message queue : ");
  scanf("%[^\n]",sbuf.mtext);
  getchar();

  buflen = strlen(sbuf.mtext) + 1 ;

  if (msgsnd(msqid, &sbuf, buflen, IPC_NOWAIT) < 0)
  {
    printf ("%d, %ld, %s, %ld\n", msqid, sbuf.mtype, sbuf.mtext, buflen);
    die("msgsnd");
  }

  else
    printf("Message Sent\n");

  exit(0);
}