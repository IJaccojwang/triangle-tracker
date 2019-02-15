var sideA = parseInt(prompt("Please enter length of side A"));
var sideB = parseInt(prompt("Please enter length of side B"));
var sideC = parseInt(prompt("Please enter length of side C"));

function triangleCheck(){
  if((sideA + sideB) <= sideC || (sideB + sideC) <= sideA || (sideA + sideC) <= sideB){
    alert("This is not a triangle");
  }
  else if(sideA === sideB && sideB === sideC && sideA === sideC){
    alert("This is an equilateral trianngle");
  }
  else if(sideA === sideB || sideB === sideC || sideA === sideC){
    alert("This is an isosceles triangle");
  }
  else{
    alert("This is s scalene triangle");
  }
}
triangleCheck();
