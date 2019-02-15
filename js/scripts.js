
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

//Business logic
function triangleCheck(){
//Initialize 3 sides
  var side1 = document.getElementById("sideA").value;
  var side2 = document.getElementById("sideB").value;
  var side3 = document.getElementById("sideC").value;

  var sideA = parseInt(side1);
  var sideB = parseInt(side2);
  var sideC = parseInt(side3);

//Test triangles for type
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
    alert("This is a scalene triangle");
  }
}
