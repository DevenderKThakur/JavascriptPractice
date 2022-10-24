// creating a bascic calculator using javascript 
function basicCalculator(){
  let x = parseFloat(prompt('enter the number '));
  let y = parseFloat(prompt('enter the number '));
  let opt = parseFloat(prompt('enter the operation '));
  switch(opt){
    case 1:
      alert(x+y);
      break;
    case 2:
      alert(x-y);
      break;
    case 3:
      alert(x*y);
      break;
    case 4:
      alert(x/y);
      break;
    case 5:
      alert('Invalid operation');
  }
}
// basicCalculator();
