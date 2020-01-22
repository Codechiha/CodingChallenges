/************************  Warm-up Problems  *******************************/

/*
Sock Merchant

John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are n = 7 socks with colors ar = [1, 2, 1, 2, 1, 3, 2]. There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.


Sample Input

9
10 20 20 10 10 30 50 10 20


Sample Output

3
*/

function sockMerchant(n, ar) {
    let pair = 0
    ar.sort()
    console.log(ar)
    for(let i = 0; i < ar.length; i++){
        if(ar[i] == ar[i+1]){
            pair += 1;
            i++
        }
    }
    console.log('Sock Merchant:', pair)
    return pair
}

sockArr = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 6]

sockMerchant(sockArr.length, sockArr)