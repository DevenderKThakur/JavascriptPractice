// create a function to find the square root of the number 

function number(){
  let a =parseInt( prompt('enter the variable'));
  let b = Math.sqrt(a);
  console.log(b);
}
// number();

// create a function to swap number using the third variable 

function swapNumber(){
  let a =parseInt( prompt('enter the varaible'));
  let b =parseInt( prompt('enter the value'));
  let temp;
  temp = a;
  a=b;
  b= temp;
  console.log('print:-'+a+'and:-'+b);
}
// swapNumber();

// wap to find that the number is positive,negative, zero 

function checkNumber(){
  let x = parseInt(prompt('enter the value'));
  if(x>1){
    console.log('the number is +ve');
  }
  else if(x<1 && x!==0){
    console.log('the number is -ve');
  }
  else{
    console.log('the number is zero');
  }
}
// checkNumber();

// wap to find that the number is prime/non-prime number 

function findPrimeOrNot(){
  let x = parseInt(prompt('enter the value'));
  let flag = 0;
  
  if(x!==0){                       //this is so that the value enter is not an zero
    for(let i=2;i<x;i++){
    if(x%i==0){
      flag=1;                                   //this is initializing the value of the flag to be one which represents non-prime number 
    }
  }
  if(flag==1){
    console.log('the number is non-prime number');
  }
  else{
    console.log('the number is prime number');
  }
 }
  else{
    console.log('Invalid value ! please enter again');
  }
}

// findPrimeOrNot();
