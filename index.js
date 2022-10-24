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
