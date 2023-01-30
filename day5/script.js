

//odd numbe
var arry=[1,2,3,4,5,,6,7,8,9,10]

var oddNumber= arry.filter((Element)=> Element%2!==0)

console.log(oddNumber)

//sum of all number

var sum= arry.reduce((acc,cvalue)=>acc+cvalue,0)
 console.log(sum  )



 // how to find prime number
let result = [];
function isPrime(arry) {
  if(arry < 2) return false;

  for (let k = 2; k < arry; k++){
    if(arry% k == 0){
      return false;
    }
  }
  return true;
}
arry.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result); 

//how to find paligamee

var paligamee= "madam"

function checkPalindrome() {

  var arrayPaligamme = paligamee.split('').reverse().join('');
  console.log(arrayPaligamme)

if(paligamee==arrayPaligamme)
{console.log("it is a paligamee")}
else{
  console.log("it is not a paligamee")
}
}
  checkPalindrome();

  //Return median of two sorted arrays of the same size

  var arr1=[1,9,4,7,3]
  var arr2=[5,2,6,8]

var arr3= [...arr1,
  ...arr2]
console.log(arr3)

var arr4 = arr3.sort();
console.log(arr4)

//Remove duplicates from an array

var reel=["tamil","ram","tamil","dharani","suriya"]

var uniqueset=new Set(reel);
var real = [...uniqueset]
console.log(real)


//Rotate an array by k times

var nums=[1,2,3,4,5]
var k = 3;


function rotateArray1() {

  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());

    console.log(`step ${i+1}` ,nums)
  
  }

  
}
rotateArray1();




