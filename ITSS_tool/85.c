// Dich gcc -o 8_5 8_5.c -pthread

// Yeu cau : 
/*
Thực hiện 2 chương trình. Thực hiện các chức năng sau.
Chương trình 1:
  Khóa Mutex.
  Nhập một xâu, và in xâu ra.
  Sau đó, mở khóa Mutex 
Chương trình 2:
  Xuất chuỗi ký tự ra console sau khi khóa mutex,
  Và mở khóa mutex.
<Xác nhận>
Chạy chương trình 1 và chờ nhập data (xâu).
Chạy chương trình 2: Chờ xác nhận mở khóa mutex từ chương trình 1.
Nhập data vào chương trình 1. Xác nhận chương trình 1 đã được mở khóa.
*/

#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

int run_thread_a = 1;
pthread_mutex_t run_lock_a = PTHREAD_MUTEX_INITIALIZER;
pthread_cond_t run_cond_a = PTHREAD_COND_INITIALIZER;

int run_thread_b = 0;
pthread_mutex_t run_lock_b = PTHREAD_MUTEX_INITIALIZER;
pthread_cond_t run_cond_b = PTHREAD_COND_INITIALIZER;

void *a(void *);
void *b(void *);

int main(){
  int status;
  pthread_t thread_a;
  pthread_t thread_b;

  pthread_create(&thread_a, NULL, a, (void *)0);
  pthread_create(&thread_b, NULL, b, (void *)0);

  pthread_join(thread_a, (void **)&status);
  pthread_join(thread_b, (void **)&status);

}

// thread A 
void *a(void *i) {
  char str1[30];
  while (1) {
    // Wait for Thread A to be runnable 
    pthread_mutex_lock(&run_lock_a);
    while (!run_thread_a){
      printf("Thread A is locking ...\n");
      pthread_cond_wait(&run_cond_a, &run_lock_a);
    }
    run_thread_a = 0;
    pthread_mutex_unlock(&run_lock_a);

    // Do some work 
    printf("Thread A is running ...\n");
    //sleep(1);
    printf("Enter a string : ");
    scanf("%s%*c",str1);
    printf("Thread A : %s\n", str1);

    // Now wake thread B 
    pthread_mutex_lock(&run_lock_b);
    run_thread_b = 1;
    pthread_cond_signal(&run_cond_b);
    pthread_mutex_unlock(&run_lock_b);
  }
}

// thread B 
void *b(void *i) {
  char str2[30];
  while (1) {
    // Wait for Thread B to be runnable 
    pthread_mutex_lock(&run_lock_b);
    while (!run_thread_b){
      printf("Thread B is locking ...\n");
      pthread_cond_wait(&run_cond_b, &run_lock_b);
    }
    run_thread_b = 0;
    pthread_mutex_unlock(&run_lock_b);

    // Do some work 
    printf("Thread B is running ...\n");
    //sleep(1);
    printf("Enter a string : ");
    scanf("%s%*c",str2);
    printf("Thread B : %s\n", str2);

    // Now wake thread A 
    pthread_mutex_lock(&run_lock_a);
    run_thread_a = 1;
    pthread_cond_signal(&run_cond_a);
    pthread_mutex_unlock(&run_lock_a);
  }
}
