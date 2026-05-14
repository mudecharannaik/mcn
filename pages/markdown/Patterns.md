```table-of-contents
```
## 1.0 Patterns
### 1.1 Print A
```python
m,n= int(input('Enter Number of rows:- ')),int(input('Number of Columns:- '))
print()
for row in range(m):
    for col in range(n):
        if (col == 0 or col == n-1) or ((row==0 or row==int(m/2)) and (col>0 or col< (n-1))):
            print('*',end="")
        else:
            print(' ',end="")
    print()
```

```output
Enter Number of rows:- 6
Number of Columns:- 8

********
*      *
*      *
********
*      *
*      *
```

```python
m,n= int(input('Enter Number of rows:- ')),int(input('Number of Columns:- '))
print()
for row in range(m):
    for col in range(n):
        if ((col == 0 or col == n-1) and row!=0) or ((row==0 or row==int(m/2)) and (col>0 and col< (n-1))):
            print('*',end="")
        else:
            print(' ',end="")
    print()
```

```output
Enter Number of rows:- 6
Number of Columns:- 7

 ***** 
*     *
*     *
*******
*     *
*     *
```

### 1.2 Print B
```python
m,n= int(input('Enter Number of rows:- ')),int(input('Number of Columns:- '))
print()
for row in range(m):
    for col in range(n):
        if (col == 0 or col == n-1) or ((row==0 or row==int(m/2) or row == (m-1)) and (col>0 or col< (n-1))):
            print('*',end="")
        else:
            print(end=" ")
    print()
```

```output
Enter Number of rows:- 7
Number of Columns:- 7

*******
*     *
*     *
*******
*     *
*     *
*******
```

```python
m,n= int(input('Enter Number of rows:- ')),int(input('Number of Columns:- '))
print()
for row in range(m):
    for col in range(n):
        if (col == 0 or ((col == n-1) and (row!=0 and row!=m-1))) or ((row==0 or row==int(m/2) or row == (m-1)) and (col>0 and col< (n-1))):
            print('*',end="")
        else:
            print(end=" ")
    print()
```

```output
Enter Number of rows:- 6
Number of Columns:- 7

****** 
*     *
*     *
*******
*     *
******
```
### 1.3 Print C
```python
m,n= int(input('Enter Number of rows:- ')),int(input('Number of Columns:- '))
print()
for row in range(m):
    for col in range(n):
        if (col == 0) or ((row==0 or row==(m-1)) and (col!=0)):
            print('*',end="")
        else:
            print(end=" ")
    print()
```

```output
Enter Number of rows:- 5
Number of Columns:- 6

******
*     
*     
*     
******
```

```python
m,n= int(input('Enter Number of rows:- ')),int(input('Number of Columns:- '))
print()
for row in range(m):
    for col in range(n):
        if (col == 0 and (row!=0 and row!=(m-1))) or ((row==0 or row==(m-1)) and (col!=0)):
            print('*',end="")
        else:
            print(end=" ")
    print()

```

```output
Enter Number of rows:- 6
Number of Columns:- 7

 ******
*      
*      
*      
*      
 ******
```
### 1.4 Print D
```python
m,n= int(input('Enter Number of rows:- ')),int(input('Number of Columns:- '))
print()
for row in range(m):
    for col in range(n):
        if (col==0) or ((col==n-1) and (row!=0 and row != m-1)) or ((row==0 or row ==m-1) and (col > 0 and col <n-1)):
            print('*',end="")
        else:
            print(end=" ")
    print()
```

```output
Enter Number of rows:- 6
Number of Columns:- 7

****** 
*     *
*     *
*     *
*     *
******
```

### 1.5 Print E
```python
m,n= int(input('Enter Number of rows:- ')),int(input('Number of Columns:- '))
print()
for row in range(m):
    for col in range(n):
        if (col == 0) or ((row==0 or row==m-1 or row ==int(m/2)) and (col !=0)):
            print('*',end="")
        else:
            print(end=" ")
    print()

```

```output
Enter Number of rows:- 9
Number of Columns:- 8

********
*       
*       
*       
********
*       
*       
*       
********
```

### 1.6 Print F
```python
m,n= int(input('Enter Number of rows:- ')),int(input('Number of Columns:- '))
print()
for row in range(m):
    for col in range(n):
        if (col == 0) or ((row==0 or row ==int(m/2)) and (col !=0)):
            print('*',end="")
        else:
            print(end=" ")
    print()

```

```output
Enter Number of rows:- 9
Number of Columns:- 6

******
*     
*     
*     
******
*     
*     
*     
*
```

### 1.7 Print G
```python
m,n= int(input('Enter Number of rows:- ')),int(input('Number of Columns:- '))
print()
for row in range(m):
    for col in range(n):
        if (col == 0) or ((row==0 or row==m-1) and (col > 0 and col < n-1)) or (row==int(m/2) and (col>=int(n/2)) ) or (col==n-2 and row >= int(m/2)):
            print('*',end="")
        else:
            print(end=" ")
    print()
```

```output
Enter Number of rows:- 9
Number of Columns:- 7

****** 
*      
*      
*      
*  ****
*    * 
*    * 
*    * 
******
```
### 1.8 Print H
```python
m,n= int(input('Enter Number of rows:- ')),int(input('Number of Columns:- '))
print()
for row in range(m):
    for col in range(n):
        if (col == 0 or col==n-1) or ((row==int(m/2)) and (col>0 and col < n-1)):
            print('*',end="")
        else:
            print(end=" ")
    print()

```

```output
nter Number of rows:- 7
Number of Columns:- 6

*    *
*    *
*    *
******
*    *
*    *
*    *
```
### 1.9 Print I
```python
m,n= int(input('Enter Number of rows:- ')),int(input('Number of Columns:- '))
print()
for row in range(m):
    for col in range(n):
        if (row==0 or row==m-1) or ((col==int(n/2)) and (row>0 and row<m-1)):
            print('*',end="")
        else:
            print(end=" ")
    print()
```

```output
Enter Number of rows:- 7
Number of Columns:- 9

*********
    *    
    *    
    *    
    *    
    *    
*********
```
### 1.10 Print J
```python
m,n= int(input('Enter Number of rows:- ')),int(input('Number of Columns:- '))
print()
for row in range(m):
    for col in range(n):
        if (row==0 or ((row==m-1) and col < (n/2))) or ((col==int(n/2)) and (row>0 and row<m-1)):
            print('*',end="")
        else:
            print(end=" ")
    print()

```

```output
Enter Number of rows:- 6
Number of Columns:- 7

*******
   *   
   *   
   *   
   *   
****
```
### 1.11 Print K
```python
# Simple K pattern using stars
m,n= int(input('Enter Number of rows:- ')),int(input('Number of Columns:- '))
for row in range(m):
    for col in range(n):
        if col == 0 or (row == col + 2) or (row + col == 4):
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()

```

```output
Enter Number of rows:- 6
Number of Columns:- 8
*       *       
*     *         
*   *           
* *             
*   *           
*     *  
```
### 1.12 Print L
```python
m,n= int(input('Enter Number of rows:- ')),int(input('Number of Columns:- '))
print()
for row in range(m):
    for col in range(n):
        if (col == 0) or (row==m-1 and col > 0):
            print('*',end="")
        else:
            print(end=" ")
    print()
```

```output
Enter Number of rows:- 6
Number of Columns:- 9

*        
*        
*        
*        
*        
*********
```
### 1.13 Print M
```python
m = int(input('Enter Number of rows:- '))
n = int(input('Number of Columns:- '))

print()
# Loop through each row
for row in range(m):
    # Loop through each column
    for col in range(n):
        # Logic for Letter M:
        # 1. Use 'n - 1' for the last column
        # 2. Use 'm // 2' to stop the 'V' at the middle row
        if (col == 0 or col == n - 1) or \
           (row <= m // 2 and (row == col or row + col == n - 1)):
            print("*", end=" ")
        else:
            print(" ", end=" ")
    # New line after each row
    print()


```

```output
Enter Number of rows:- 7
Number of Columns:- 7

*           * 
* *       * * 
*   *   *   * 
*     *     * 
*           * 
*           * 
*           * 
```
### 1.14 Print N
```python
m = int(input('Enter Number of rows:- '))
n = int(input('Number of Columns:- '))

print()
for row in range(m):
    for col in range(n):
        # Logic for Letter N:
        # 1. First column (col == 0)
        # 2. Last column (col == n - 1)
        # 3. Diagonal line where row and column index are the same (row == col)
        if col == 0 or col == n - 1 or row == col:
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()

```

```output
Enter Number of rows:- 7
Number of Columns:- 7

*           * 
* *         * 
*   *       * 
*     *     * 
*       *   * 
*         * * 
*           * 

```
### 1.15 Print O
```python
m,n= int(input('Enter Number of rows:- ')),int(input('Number of Columns:- '))
print()
for row in range(m):
    for col in range(n):
        if (col==0 and (row>0 and row <m-1)) or ((col==n-1) and (row!=0 and row != m-1)) or ((row==0 or row ==m-1) and (col > 0 and col <n-1)):
            print('*',end="")
        else:
            print(end=" ")
    print()

```

```output
Enter Number of rows:- 7
Number of Columns:- 9

 ******* 
*       *
*       *
*       *
*       *
*       *
 *******
```
### 1.16 Print P
```python
m,n= int(input('Enter Number of rows:- ')),int(input('Number of Columns:- '))
print()
for row in range(m):
    for col in range(n):
        if (col==0) or ((row==0 or row ==(int(m/2))) and (col>0 and col<n-1)) or (col==n-1 and (row>0 and row < int(m/2))):
            print('*',end="")
        else:
            print(end=" ")
    print()

```

```output
Enter Number of rows:- 8
Number of Columns:- 7

****** 
*     *
*     *
*     *
****** 
*      
*      
*
```
### 1.17 Print Q
```python
m = int(input('Enter Number of rows:- '))
n = int(input('Number of Columns:- '))

print()
for row in range(m):
    for col in range(n):
        # Logic for Letter Q:
        # 1. Create the circle/oval body
        is_oval = ((col == 0 or col == n-2) and (row > 0 and row < m-2)) or \
                  ((row == 0 or row == m-2) and (col > 0 and col < n-2))
        
        # 2. Create the diagonal tail
        is_tail = (row == col and row > m // 2)
        
        if is_oval or is_tail:
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()

```

```output
Enter Number of rows:- 7
Number of Columns:- 7

  * * * *     
*         *   
*         *   
*         *   
*       * *   
  * * * * *   
            * 

```
### 1.18 Print R
```python
m = int(input('Enter Number of rows:- '))
n = int(input('Number of Columns:- '))

print()
for row in range(m):
    for col in range(n):
        # Logic for Letter R:
        # 1. Vertical bar on the left
        # 2. Horizontal bars (top and middle)
        # 3. Vertical bar on the right (top half only)
        # 4. Diagonal leg (bottom half)
        if col == 0 or \
           (row == 0 or row == m // 2) and (col < n - 1) or \
           (col == n - 1 and row > 0 and row < m // 2) or \
           (row == col and row > m // 2):
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()


```

```output
Enter Number of rows:- 7
Number of Columns:- 7

* * * * * *   
*           * 
*           * 
* * * * * *   
*       *     
*         *   
*           * 

```
### 1.19 Print S
```python
m = int(input('Enter Number of rows:- '))
n = int(input('Number of Columns:- '))

print()
for row in range(m):
    for col in range(n):
        # Logic for Letter S:
        # 1. Three horizontal bars: Top, Middle, and Bottom
        # 2. Left vertical segment for the top half
        # 3. Right vertical segment for the bottom half
        if (row == 0 or row == m // 2 or row == m - 1) or \
           (col == 0 and row < m // 2) or \
           (col == n - 1 and row > m // 2):
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()


```

```output
Enter Number of rows:- 7
Number of Columns:- 7

* * * * * * * 
*             
*             
* * * * * * * 
            * 
            * 
* * * * * * *
```
### 1.20 Print T
```python
m,n= int(input('Enter Number of rows:- ')),int(input('Number of Columns:- '))
print()
for row in range(m):
    for col in range(n):
        if (row==0) or ((col==int(n/2)) and (row>0 and row<m-1)):
            print('*',end="")
        else:
            print(end=" ")
    print()

```

```output
Enter Number of rows:- 7
Number of Columns:- 9

*********
    *    
    *    
    *    
    *    
    *
```
### 1.21 Print U
```python
m,n= int(input('Enter Number of rows:- ')),int(input('Number of Columns:- '))
print()
for row in range(m):
    for col in range(n):
        if ((col==0 or col ==n-1) and (row!=m-1) ) or (row==m-1 and (col>0 and col <n-1)) :
            print('*',end="") 
        else:
            print(end=" ")
    print()
```

```output
Enter Number of rows:- 7
Number of Columns:- 8

*      *
*      *
*      *
*      *
*      *
*      *
 ******
```
### 1.22 Print V
```python
m = int(input('Enter Number of rows:- '))
n = int(input('Number of Columns:- '))

print()
for row in range(m):
    for col in range(n):
        # Logic for Letter V:
        # 1. Left diagonal: column moves right as row moves down
        # 2. Right diagonal: column moves left as row moves down
        # Using a scaling factor (n/m) helps it stay proportional
        if (col == (row * n // m)) or \
           (col == (n - 1 - (row * n // m))):
            print("*", end="")
        else:
            print(" ", end="")
    print()

```

```output
Enter Number of rows:- 7
Number of Columns:- 7

*     *
 *   * 
  * *  
   *   
  * *  
 *   * 
*     *
```
### 1.23 Print W
```python
m = int(input('Enter Number of rows:- '))
n = int(input('Number of Columns:- '))
for row in range(m):
    for col in range(n):
        if (col == 0 or col == n - 1) or \
           (row >= m // 2 and (row == col or row + col == n - 1)):
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()


```

```output
Enter Number of rows:- 7
Number of Columns:- 7
*           * 
*           * 
*           * 
*     *     * 
*   *   *   * 
* *       * * 
*           * 

```
### 1.24 Print X
```python
m = int(input('Enter Number of rows:- '))
n = int(input('Number of Columns:- '))
for row in range(m):
    for col in range(n):
        if (row == col or row + col == n - 1):
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()

```

```output
Enter Number of rows:- 7
Number of Columns:- 7
*           * 
  *       *   
    *   *     
      *       
    *   *     
  *       *   
*           * 

```
### 1.25 Print Y
```python
m = int(input('Enter Number of rows:- '))
n = int(input('Number of Columns:- '))
for row in range(m):
    for col in range(n):
        if (row <= m // 2 and (row == col or row + col == n - 1)) or \
           (row > m // 2 and col == n // 2):
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()

```

```output
Enter Number of rows:- 7
Number of Columns:- 7
*           * 
  *       *   
    *   *     
      *       
      *       
      *       
      *       
```
### 1.26 Print Z
```python
m = int(input('Enter Number of rows:- '))
n = int(input('Number of Columns:- '))
for row in range(m):
    for col in range(n):
        if (row == 0 or row == m - 1 or row + col == n - 1):
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()


```

```output
Enter Number of rows:- 7
Number of Columns:- 7
* * * * * * * 
          *   
        *     
      *       
    *         
  *           
* * * * * * * 
```

## 2.0 Some Interesting Pattern
### 2.1  Simple Number Triangle Pattern
```python
# Simple Number Triangle Pattern
n = int(input('Enter size:- '))
for i in range(n): 
    for j in range(i+1):
        print(i+1,end='')
    print()
```

```output
Enter size:- 9
1
22
333
4444
55555
666666
7777777
88888888
999999999
```

### 2.2 Inverted Pyramid of Numbers
```python
# Inverted Pyramid of Numbers
n = int(input('Enter size:- '))
for i in range(n):
    for j in range(n-i):
        print(i+1,end='')
    print()
```

```output
Enter size:- 5
11111
2222
333
44
5
```
### 2.3 Half Pyramid Pattern of Numbers
```python
# Half Pyramid Pattern of Numbers
n = int(input('Enter size:- '))
for i in range(1,n+1):
    for j in range(i):
        print(j+1,end='')
    print()
```

```output
Enter size:- 5
1
12
123
1234
12345
```
### 2.4 Inverted Pyramid of Descending Numbers
```python
# Inverted Pyramid of Descending Numbers
n = int(input('Enter size:- '))
for i in range(n):
    for j in range(n-i):
        print(n-i,end='')
    print()
```

```output
Enter size:- 5
55555
4444
333
22
1
```
### 2.5 Inverted Pyramid of the Same Digit
```python
# Inverted Pyramid of the Same Digit
n = int(input('Enter size:- '))
for i in range(n):
    for j in range(n-i):
        print(n,end='')
    print()
```

```output
Enter size:- 5
55555
5555
555
55
5
```
### 2.6 Reverse Pyramid of Numbers
```python
# Reverse Pyramid of Numbers
n = int(input('Enter size:- '))
for i in range(n):
    for j in range(i+1,0,-1):
        print(j,end='')
    print()
```

```output
Enter size:- 5
1
21
321
4321
54321
```
### 2.7 Inverted half Pyramid of Numbers
```python
# Inverted half Pyramid of Numbers
n = int(input('Enter size:- '))
for i in range(n):
    for j in range(n-i,0,-1):
        print(j,end='')
    print()
```

```output
Enter size:- 5
54321
4321
321
21
1
```
### 2.8 Inverted half Pyramid of Numbers
```python
# Inverted half Pyramid of Numbers
n = int(input('Enter size:- '))
for i in range(n):
    for j in range(n-i): 
        print(j,end='')
    print()
```

```output
Enter size:- 5
01234
0123
012
01
0
```
### 2.9 Inverted half Pyramid of Numbers
```python
# Inverted half Pyramid of Numbers
start = int(input('Enter starting Number:- '))
stop =  int(input('Enter step increment size:- '))
rows = int(input('How many rows :- '))
cnt=1
for i in range(rows):
    for j in range(1,stop):
        print(start,end='')
        start+=1
    stop+=2
    print()
```

```output
Enter starting Number:- 1
Enter step increment size:- 2
How many rows :- 3
1
234
56789
```
### 2.10 Unique Pyramid Pattern of Digits
```python
# Unique Pyramid Pattern of Digits
n = int(input('Enter size:- '))
for i in range(n):
    for j in range(i):
        print(j+1,end='')
    for j in range(i+1,0,-1):
        print(j,end='')
    print()
```

```output
Enter size:- 6
1
121
12321
1234321
123454321
12345654321
```
### 2.11 Indian Classical Music
```python
# Indian Classical Music
n = int(input('Enter size:- '))
music = ['sa' , 're' , 'ga', 'ma', 'pa' , 'dha' , 'ni', 'sa' ] 
if n > len(music):
    print('Invalid Input')
else:
    for i in range(n):
        for j in range(i+1):
            print(music[j]+' ',end='') 
        for j in range(i-1,-1,-1):
            print(music[j]+' ',end='')
        print()
```

```output
Enter size:- 8
sa 
sa re sa 
sa re ga re sa 
sa re ga ma ga re sa 
sa re ga ma pa ma ga re sa 
sa re ga ma pa dha pa ma ga re sa 
sa re ga ma pa dha ni dha pa ma ga re sa 
sa re ga ma pa dha ni sa ni dha pa ma ga re sa
```
### 2.12 Connected Inverted Pyramid Pattern of Numbers
```python
# Connected Inverted Pyramid Pattern of Numbers
n = int(input('Enter size:- '))
for i in range(n):
    for j in range(n,i,-1):
        print(j,end='')
    for j in range(i,n):
        print(j+1,end='')
    print()
```

```output
Enter size:- 5
5432112345
54322345
543345
5445
55
```
### 2.13 Half Pyramid Pattern of Numbers
```python
# Half Pyramid Pattern of Numbers
n = int(input('Enter size:- '))
for i in range(n):
    for j in range(n-i): 
        print(end=' ')    
    for j in range(i+1): 
        print(j+1,end='')
    print()
```

```output
Enter size:- 7
       1
      12
     123
    1234
   12345
  123456
 1234567
```
### 2.14 Pyramid of Numbers
```python
# Pyramid of Numbers
n = int(input('Enter size:- '))
for i in range(n):
    for j in range(n-i): 
        print(end=' ')    
    for j in range(i+1): 
        print(j+1,end='')
    for j in range(i+1):
        print(j+1,end='')
    print()
```

```output
Enter size:- 7
       11
      1212
     123123
    12341234
   1234512345
  123456123456
 12345671234567
```
### 2.15 Pyramid of Numbers
```python
# Pyramid of Numbers
n = int(input('Enter size:- '))
for i in range(n):
    for j in range(n-i): 
        print(end=' ')    
    for j in range(i+1): 
        print(j+1,end='')
    for j in range(i+1,0,-1):
        print(j,end='')
    print()
```

```output
Enter size:- 7
       11
      1221
     123321
    12344321
   1234554321
  123456654321
 12345677654321
```
### 2.16 Pyramid of Numbers
```python
# Pyramid of Numbers
n = int(input('Enter size:- '))
for i in range(n):
    for j in range(n-i): 
        print(end=' ')    
    for j in range(i): 
        print(j+1,end='')
    for j in range(i+1,0,-1):
        print(j,end='')
    print()
```

```output
Enter size:- 7
       1
      121
     12321
    1234321
   123454321
  12345654321
 1234567654321
```
### 2.17 Pyramid of Numbers
```python
# Pyramid of Numbers
n = int(input('Enter size:- '))
for i in range(n):
    for j in range(n-i): 
        print(end=' ')    
    for j in range(i): 
        print(j+1,end='')
    for j in range(i+1,0,-1):
        print(j,end='')
    print()
for i in range(n):
    for j in range(i+1): 
        print(end=' ')
    for j in range(1,n-i): 
        print(j,end='')    
    for j in range(n-i,0,-1):
        print(j,end='')
    print()
```

```output
Enter size:- 9
         1
        121
       12321
      1234321
     123454321
    12345654321
   1234567654321
  123456787654321
 12345678987654321
 12345678987654321
  123456787654321
   1234567654321
    12345654321
     123454321
      1234321
       12321
        121
         1
```
### 2.18  Triangle stars
```python
n = int(input("Number of rows :- "))
for i in range(n):
    print('* '*(i+1))
```

```output
Number of rows :- 5
* 
* * 
* * * 
* * * * 
* * * * *
```
### 2.19 Half Pyramid with *
```python
# Half Pyramid
n = int(input('Enter size:- '))
for i in range(n):
    for j in range(n-i): 
        print(end=' ')    
    for j in range(i): 
        print('*',end='')
    for j in range(i+1,0,-1):
        print('*',end='')
    print()
```

```output
Enter size:- 7
       *
      ***
     *****
    *******
   *********
  ***********
 *************
```
### 2.20 Half Pyramid with * and space
```python
# Half Pyramid
n = int(input("Number of rows:- "))
for i in range(n):
    for j in range(n-i):
        print(' ',end='')
    for j in range(i+1):
        print('* ',end='')
    print()
```

```output
Number of rows:- 7
       * 
      * * 
     * * * 
    * * * * 
   * * * * * 
  * * * * * * 
 * * * * * * *
```
### 2.21 Other way to Half Pyramid
```python
# Half Pyramid
n = int(input("Number of rows:- "))
for i in range(n):
    print(' '*(n-i-1)+'* '*(i+1))
```

```output
Number of rows:- 7
      * 
     * * 
    * * * 
   * * * * 
  * * * * * 
 * * * * * * 
* * * * * * *
```
### 2.22 Inverted Pyramid
```python
# Inverted Pyramid
n = int(input("Number of rows:- "))
for i in range(n):
    for j in range(i):
        print(' ',end='')
    for j in range(n-i): 
        print('* ',end='')
    print()
```

```output
Number of rows:- 7
* * * * * * * 
 * * * * * * 
  * * * * * 
   * * * * 
    * * * 
     * * 
      *
```
### 2.23 Inverted Pyramid other way
```python
# Inverted Pyramid
n = int(input("Number of rows :- "))
for i in range(n,0,-1):
    print(' '*(n-i)+'* '*(i))
```

```output
Number of rows :- 7
* * * * * * * 
 * * * * * * 
  * * * * * 
   * * * * 
    * * * 
     * * 
      *
```
### 2.24 Pyramid
```python
# Pyramid
n = int(input())
for i in range(1,n+1):
    for j in range(n-i):
        print(' ',end='')
    for j in range(i):
        print('* ',end='')       
    print()
for i in range(n):
    for j in range(i+1):
        print(' ',end='')
    for j in range(n-i-1): 
        print('* ',end='')
    print()
```

```output
10
         * 
        * * 
       * * * 
      * * * * 
     * * * * * 
    * * * * * * 
   * * * * * * * 
  * * * * * * * * 
 * * * * * * * * * 
* * * * * * * * * * 
 * * * * * * * * * 
  * * * * * * * * 
   * * * * * * * 
    * * * * * * 
     * * * * * 
      * * * * 
       * * * 
        * * 
         *
```
### 2.26 Pyramid other way
```python
# Pyramid
n = int(input("Number of rows :- "))
for i in range(n):
    print(' '*(n-i-1)+'* '*(i+1))
for j in range(n-1,0,-1):
    print(' '*(n-j)+'* '*(j))
```

```output
Number of rows :- 10
         * 
        * * 
       * * * 
      * * * * 
     * * * * * 
    * * * * * * 
   * * * * * * * 
  * * * * * * * * 
 * * * * * * * * * 
* * * * * * * * * * 
 * * * * * * * * * 
  * * * * * * * * 
   * * * * * * * 
    * * * * * * 
     * * * * * 
      * * * * 
       * * * 
        * * 
         *
```

### 2.27 Patterns
```python
# Patterns
n = int(input())
import string
from collections import defaultdict
letters = string.ascii_lowercase
index_dict = defaultdict(list)
index_dict1 = defaultdict(list)
mid = int((n*4-3)/2)
count=0
rows, cols = (n*2-1,n*4-3) 
dlist = [[-1 for i in range(cols)] for j in range(rows)]
for i in range(1,n+1):
    for j in range(mid,-mid-1,-2):
        index_dict[letters[n-i]].append(abs(j))
        
    for j in range(mid,mid*2+1,2):  
        index_dict1[letters[n-i]].append(j)
        if j == mid*2:
            for k in range(2,mid+2,2):
                index_dict1[letters[n-i]].append(j-k)    
    if i > 1:
        count = count+2 
        for m in range(1,count+1):
            index_dict[letters[n-i]][n-i+m]='-' 
            index_dict1[letters[n-i]][n-i+m]='-'
        for j in range(0,count):
            index_dict[letters[n-i]].remove('-')
            index_dict1[letters[n-i]].remove('-')
            
for i in range(0,n):
    for j in range(i,n*2-1-i):
        dlist[j][index_dict[letters[n-i-1]][j-i]]=letters[n-i-1]
        dlist[j][index_dict1[letters[n-i-1]][j-i]]=letters[n-i-1]
        
for j in range(n*2-1):
    print(''.join(list(str(i) if str(i).isalpha() else '-' for i in dlist[j])))
```

```output
7
------------g------------
----------g-f-g----------
--------g-f-e-f-g--------
------g-f-e-d-e-f-g------
----g-f-e-d-c-d-e-f-g----
--g-f-e-d-c-b-c-d-e-f-g--
g-f-e-d-c-b-a-b-c-d-e-f-g
--g-f-e-d-c-b-c-d-e-f-g--
----g-f-e-d-c-d-e-f-g----
------g-f-e-d-e-f-g------
--------g-f-e-f-g--------
----------g-f-g----------
------------g------------
```

### 2.28 Pyramid of alphabets
```python
# Pyramid of alphabets
n = int(input('Enter size:- '))
import string
letters = string.ascii_lowercase
letters=letters[n-1::-1]
for i in range(n):
    for j in range(n-i): 
        print(end=' ')    
    for j in range(i): 
        print(letters[j],end='') 
    for j in range(i+1,0,-1):
        print(letters[j-1],end='')
    print()
for i in range(n):
    for j in range(i+1): 
        print(end=' ')
    for j in range(1,n-i):  
        print(letters[j-1],end='')    
    for j in range(n-i,0,-1):
        print(letters[j-1],end='')
    print()
```

```output
Enter size:- 7
       g
      gfg
     gfefg
    gfedefg
   gfedcdefg
  gfedcbcdefg
 gfedcbabcdefg
 gfedcbabcdefg
  gfedcbcdefg
   gfedcdefg
    gfedefg
     gfefg
      gfg
       g
```
### 2.29 Pattern
```python
n=int(input())
ans=[[1]]
for i in range(2, n+1):
    t=[i]*((2*i)-3)
    ans.insert(0, t)
    ans.append(t.copy())
    for a in ans:
        a.insert(0,i)
        a.append(i)
ans_final=[]
for a in ans:
    ans_final.append(str(a).replace(' ','').replace(',','').replace(']','').replace('[',''))
for a in ans_final:
    print(a)
```

```output
6
66666666666
65555555556
65444444456
65433333456
65432223456
65432123456
65432223456
65433333456
65444444456
65555555556
66666666666
```

## 3.0 Most Asked Visual Patterns

### 3.1 Right Half Triangle 
```python

n=int(input())
# Right Half Triangle 
for i in range(1, n + 1): 
		print("*" * i)
```

```output
7
*
**
***
****
*****
******
*******
```

### 3.2 Inverted Right Half
```python
n=int(input())
# Inverted Right Half 
for i in range(n, 0, -1): 
		print("*" * i)
```

```output
7
*******
******
*****
****
***
**
*
```
### 3.3 Mirrored Right Half (Testing Spaces)
```python
n=int(input())
# Mirrored Right Half (Testing Spaces) 
for i in range(1, n + 1): 
		print(" " * (n - i) + "*" * i)
```

```output
7
      *
     **
    ***
   ****
  *****
 ******
*******
```

### 3.4 Full Pyramid
```python
n=int(input())
# Full Pyramid 
for i in range(1, n + 1): 
		print(" " * (n - i) + "*" * (2 * i - 1))
```

```output
n=int(input())
# Full Pyramid 
for i in range(1, n + 1): 
		print(" " * (n - i) + "*" * (2 * i - 1))
```
### 3.5 Inverted Pyramid
```python
n=int(input())
# Inverted Pyramid 
for i in range(n, 0, -1): 
		print(" " * (n - i) + "*" * (2 * i - 1))
```

```output
7
*************
 ***********
  *********
   *******
    *****
     ***
      *
```

### 3.6 Top Half
```python
n=int(input())
# Top half (Pyramid) 
for i in range(1, n + 1): 
		print(" " * (n - i) + "*" * (2 * i - 1))
```

```output
7
      *
     ***
    *****
   *******
  *********
 ***********
*************
```

### 3.7 Bottom Half (Inverted Pyramid)
```python
n=int(input())
# Bottom half (Inverted Pyramid) 
for i in range(n - 1, 0, -1): 
		print(" " * (n - i) + "*" * (2 * i - 1))
```

```output
7
 ***********
  *********
   *******
    *****
     ***
      *

```

### 3.8 Hollow Square
```python
n=int(input())
# Hollow Square 
for i in range(n): 
		for j in range(n): 
				if i == 0 or i == n - 1 or j == 0 or j == n - 1: 
						print("*", end=" ") 
				else: 
						print(" ", end=" ") 
		print()
```

```output
7
* * * * * * * 
*           * 
*           * 
*           * 
*           * 
*           * 
* * * * * * * 
```

### 3.9  Hollow Pyramid
```python
n=int(input())
# Hollow Pyramid
for i in range(1, n + 1):
    for j in range(1, 2 * n):
        if j == n - i + 1 or j == n + i - 1 or i == n:
            print("*", end="")
        else:
            print(" ", end="")
    print()

```

```output
7
      *      
     * *     
    *   *    
   *     *   
  *       *  
 *         * 
*************
```

### 4.0 Floyd's Triangle (incremental numbers)
```python
n=int(input())
# Floyd's Triangle (Incremental numbers)
num = 1
for i in range(1, n + 1):
    for j in range(1, i + 1):
        print(num, end=" ")
        num += 1
    print()

```

```output
7
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 
16 17 18 19 20 21 
22 23 24 25 26 27 28 
```
