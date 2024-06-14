import java.util.*;
/*
 * I             1
   V             5
  X             10
  L             50
  C             100
  D             500
  M             1000
 */
public class Main {
    public static void main(String[] args) {
       int seat[] = {12,14,19,19,12};
       int student[] = {19,2,17,20,7};
       int dif = 0;
       for(int i = 0; i < seat.length; i ++){
        for(int j = 0; j < seat.length - 1; j ++){
            if(seat[i] < seat[j]){
                int temp = seat[j];
                seat[j] = seat[i];
                seat[i] = temp;
            }
        }
       }
       for(int i = 0; i < student.length; i ++){
        for(int j = 0; j < student.length - 1; j ++){
            if(student[i] < student[j]){
                int temp = student[j];
                student[j] = student[i];
                student[i] = temp;
            }
        }
       }
       for(int i = 0; i < seat.length; i ++){
        int value = student[i] - seat[i];
        dif += Math.abs(value);
       }
       System.out.println(dif);
    }
}
