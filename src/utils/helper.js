function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
       return false;
      }
    }
    return true;
   }
  
   //Function to find the nth prime number
   export function findNthPrime(n) {
    let count = 0;
    let num = 2;
    let num1=parseInt(n);
    while (count < num1) {
      if (isPrime(num)) {
       count++;
      }
      num++;
    }
    return num - 1;
   }