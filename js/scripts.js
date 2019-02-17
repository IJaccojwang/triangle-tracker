// //finish this function and add array to hold
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
//Change input to integer value
  var sideA = parseInt(side1);
  var sideB = parseInt(side2);
  var sideC = parseInt(side3);
//Array for triangle types
  var triangleTypes = ["equilateral", "isosceles", "scalene"];
//Test triangles for type
  if((sideA + sideB) <= sideC || (sideB + sideC) <= sideA || (sideA + sideC) <= sideB){
    document.getElementById('result').innerHTML = "This is not a triangle";//Display if not triangle
  }
  else if(sideA === sideB && sideB === sideC && sideA === sideC){
    document.getElementById('result').innerHTML = "This is an " + triangleTypes[0] + " triangle";//Display if equilateral
  }
  else if(sideA === sideB || sideB === sideC || sideA === sideC){
    document.getElementById('result').innerHTML = "This is an " + triangleTypes[1] + " triangle";//Display if isosceles
  }
  else{
    document.getElementById('result').innerHTML = "This is a " + triangleTypes[2] + " triangle";//Display if scalene
  }
}
