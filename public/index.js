            /***************** Algorithm Problems  *****************/


//Diagonal Difference

// https://www.hackerrank.com/challenges/diagonal-difference/problem

// Instructions: Given a square matrix, calculate the absolute difference between 
// the sums of its diagonals.

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

//Plus Minus

// https://www.hackerrank.com/challenges/plus-minus/problem

//  Instructions: Given an array of integers, calculate the fractions of 
//  its elements that are positive, negative, and are zeros. 
//  Print the decimal value of each fraction on a new line.

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