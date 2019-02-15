
// function inputCheck(){
//   if(sideA === NaN || sideB === NaN || sideC === NaN){
//     alert("Please ensure that all your entries are numbers");
//   }
//   else{
//     alert("done");
//   }
// }
//
// inputCheck();
//
// else if (sideA == null || sideA == " " || sideB == null || sideB == " " || sideC == null || sideC == " ") {
//   alert("Please ensure none of the fields are left blank");
// }
// else{

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
