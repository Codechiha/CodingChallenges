        /***************** Algorithm Problems  *****************/


/*
DIAGONAL DIFFERENCE

https://www.hackerrank.com/challenges/diagonal-difference/problem

Instructions: Given a square matrix, calculate the absolute difference between 
the sums of its diagonals.

*/

function diagonalDifference(arr) {
    // Write your code here
    let first = 0
    let second = 0
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(i == j){
                first += arr[i][j]
            }
            if(i == arr.length - 1 - j){
                second += arr[i][j]
            }
        }
    }
    console.log('Diagonal Difference:', Math.abs(second - first))
    return Math.abs(second - first)
}

let arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let arr2 = [[10, 3289, 209], [1298, 102, 182], [98, 8, 219]]

diagonalDifference(arr1)
diagonalDifference(arr2)

/*
PLUS MINUS

https://www.hackerrank.com/challenges/plus-minus/problem

 Instructions: Given an array of integers, calculate the fractions of 
 its elements that are positive, negative, and are zeros. 
 Print the decimal value of each fraction on a new line.

 */

function plusMinus(arr) {
    let pos = 0
    let neg = 0
    let zer = 0

    for(let i = 0; i < arr.length; i++){
        if(arr[i]> 0){
            pos += 1
        }
        else if(arr[i] < 0){
            neg += 1
        }
        else{
            zer += 1
        }
    }
    console.log('Plus Minus: ')
    console.log(pos/arr.length)
    console.log(neg/arr.length)
    console.log(zer/arr.length)
}

let arr3 = [1, 1, 0, -1, -1]
let arr4 = [10, 0, -0.5, 46, 1, 1, 1, 0, 0, 9, 6789, -12, -23]
plusMinus(arr3)
plusMinus(arr4)

/*
STAIRCASE

Consider a staircase of size n = 4:

#
##
###
####

Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .
*/

function staircase(n) {
    console.log('Staircase: ', n)
    let line = Array(n + 1).fill(' ');
    line[n] = '\n';

    for(let i = n - 1; i >= 0; i--){
        line[i] = '#';
        process.stdout.write(line.join(''));
    }
}

staircase(5)
staircase(10)

/* 
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

For example, arr = [1, 3, 5, 7, 9]. Our minimum sum is 1 + 3 + 5 + 7 = 16 and our maximum sum is 3 + 5 + 7 + 9 = 24. We would print

16 24
*/

function miniMaxSum(arr) {
    let min = 0
    let max = 0
    arr.sort()
    
    for(let i = 0; i < arr.length - 1; i++){
        min += arr[i]
    }
    for(let i = 1; i < arr.length; i++){
        max += arr[i]
    }
    console.log('MinMaxSum: ')
    console.log(' Min:', min, '\n', 'Max:', max)

}

arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

miniMaxSum(arr5)

/*
BIRTHDAY CANDLES

You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.

For example, if your niece is turning 4 years old, and the cake will have 4 candles of height 4, 4, 1, 3, she will be able to blow out 2 candles successfully, since the tallest candles are of height 4 and there are 2 such candles.

*/

function birthdayCakeCandles(ar) {
    let count = 0
    ar.sort();
    console.log('Birthday Cake Candles: ')

    for(let i = ar.length - 1; i > -1; i--){
        if(ar[0] == ar[ar.length - 1]){
            count = ar.length
            return count
        }
        if(ar[0] == ar[ar.length - 2]){
            count = ar.length - 1
            return count
        }
        if(ar[i] == Math.max(...ar)){
            count += 1
        }
        else{
            console.log('Max Blown Out Candles:', count)
            return count
        }
    }
    console.log('Max Blown Out Candles:', count)
    return count

}

arr6 = [0, 2, 2, 3, 5, 5, 5, 5]

birthdayCakeCandles(arr6)