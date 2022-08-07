var inputNode = document.getElementById("inp");
//inputNode.value = "abdullah";
console.log("input", inputNode);

var objname = "";
function inpChange(e) {
  var val = e.target.value;
  objname = val;
  val = "";
}
inputNode.addEventListener("click", inpChange, false);
Arrobj = [
  {
    name: objname,
  },
];
var li = document.querySelector("li");

console.log("objname", objname);
li.innerText = Arrobj[0].name;
// function mergeSort(){
// if(arr.length<0){
// return 0
// }

// var half =parseInt(arr.length/2)
// console.log('half',half)
// var left = arr.slice(0,half)
// console.log('left',left)
// var right= arr.slice(half,arr.length);
// console.log('right',right)

// function merge(left, right) {
//     let narr = []
//     // Break out of loop if any one of the array gets empty
//     while (left.length && right.length) {
//         // Pick the smaller among the smallest element of left and right sub arrays
//         if (left[0] < right[0]) {
//             narr.push(left.shift())
//         } else {
//             narr.push(right.shift())
//         }
//     }

//     // Concatenating the leftover elements
//     // (in case we didn't go through the entire left or right array)
//     return [ ...narr, ...left, ...right ]
// }
// return merge(left,right)
// }
// var arr2 = [34,7,23,32,5,62]

//   var arr = [34,7,23,32,5,62];
// function merge_Sort() {
//     if (arr.length <= 1)
//     {
//       return arr;
//     }

//     var half = parseInt(arr.length / 2);
//     var left = arr.slice(0, half).merge_Sort();
//     var right = arr.slice(half,     arr.length).merge_Sort();
//     function merge(left, right)
//     {
//     var arry = [];
//     while (left.length > 0 && right.length > 0)
//     {
//       arry.push((left[0] <= right[0]) ? left.shift() : right.shift());
//     }
//       return arry.concat(left).concat(right);
//     };

//     return merge(left, right);
//   };
// Array.prototype.merge_Sort = function merge_Sort() {
//     if (this.length <= 1)
//     {
//       return this;
//     }

//     var half = parseInt(this.length / 2);
//     var left = this.slice(0, half).merge_Sort();
//     var right = this.slice(half,     this.length).merge_Sort();
//     var merge = function merge(left, right)
//     {
//     var arry = [];
//     while (left.length > 0 && right.length > 0)
//     {
//       arry.push((left[0] <= right[0]) ? left.shift() : right.shift());
//     }
//       return arry.concat(left).concat(right);
//     };

//     return merge(left, right);
//   };

//   var a = [4,7,3,2,5,6];
//document.write(a.merge_Sort());
//console.log(a.merge_Sort());
//console.log(arr.merge_Sort())
//document.write(arr.merge_Sort())
// function mrange(a,b){

//     if (b - a === 0)
//     {
//       return [a + 1];
//     }
//     else
//     {
//         var li=mrange(a,b-1)
//         li.push(b-1)

//         return li
//     }
// }
//document.write('<br>',mrange(2,9))
// function arrSum(a,b){
//     debugger
//     if(a===b){
//         return (a+b)*3
//     }
//     else{
//         return a+b
//     }
// //     var b= 0
// //    for(var i=1;i<n.length;i++){
// //         b = b+n[i]
// //    }
// //    return b

// }
// document.write('<br>',arrSum(2,2))
// document.write('<br>',arrSum(3,2))

// function exponent(n,a){

//     if(a===0){
//         return 1
//     }
//     else{
//         return n * exponent(n,a-1)
//     }
// }
// document.write('<br>',exponent(8,2))
//function absoldiff(str){
//   debugger
//Q17
//    if(a <= b){
//        return b-a
//    }
//    else if(a>b){
//        return (a-b)*3
//    }
//Q18
// return(a ==50 || b ==50) ? true : false

// return a+b ==50 ? true :false
//Q19
// if(a<20){
//   return "a<20" + true
// }
// else if(a>20 && a<100){
//   return true
// }
//   else if(a>100 && a<400){
//     return "yes" + true
//   }
//   else{
//     return false
//   }

// if(str=== null || str.substr(0,2)==='Py')
//   { return str +" true"
//  }
//  else{
//       return str.slice(2)
//  }
// }
// if(str.length>=1 )
//   {
//     //return str.slice(str.length-1) //locate n
//     //return
//     //return "  " + str.replace(str.slice(0,1),str.slice(str.length-1)) && str.replace(str.slice(str.length-1),str.slice(0,1))
//    // return str.slice(1,str.length-1)
//     return str.slice(str.length-1) + str.slice(1,str.length-1) +str.slice(0,1)
//   }
//Reverse a string with change an character
//return str.length
//var sel = document.getSelection()
//var rng = sel.getRangeAt(0)
// var start = rng.anchorOffset;//rng.startOffset;
//var end = rng.focusOffset;//rng.endOffset;
//  var a =str.split(" ")
//  var b=""
//  for(var i=a.length-1; i>=0;i--)
//  {
//     b=b+a[i] + " "
//  }
//  return b
//Q26
// if(str.length>=3){
//   var ext =str.slice(str.length-3)
//   return ext + str + ext
// }
//Q28
//Q28
// if(str.slice(4) ==='Script'){
//   return str.slice(0,4)
// }
//}
// function absoldiff(a){
//   debugger
//   //Q150
// if(a>0){
//   var c = a.toString().slice(0,1)
//   var d=a.toString().slice(1)
//   return d+ c
// }

// }
// function arrOrNot(str){
//   debugger
//   // var b=""
//   // if(str.length<= st && nd){
//   //   return alert("st-index and nd-Index should be less than string length")
//   // }
//   // else{
//   //   for(i=st;i<=nd;i++){
//   //     b=b+str[i]
//   //   }
//   // }
//   // return b
//    //var a =str.split(" ")
// var stlen =str.length
// var alf=""
// var arr=[]
// for(j=0;j<=str.length;j++){
//    if(str[j] === " " ){
//       arr.push(alf)
//       alf=""
//    }
//    else{
//      alf = alf+str[j]
//    }
// }
//  var b=""
//  for(var i=arr.length-1; i>=0;i--)
//  {
//     b=b+arr[i] + " "
//  }
//  return b
// }
//   var str ="this is a string "//window.prompt()

// document.write('<br>',arrOrNot(str))
//document.write('<br>',absoldiff(25,25))
// function iterativePalindrom(str){
//   debugger
//   var strlen =str.length
//  //var b ="" //str[1]
//  //var c =""//str[str.length-1]
// var strhlf =str.length /2
// var sthf =parseInt(strhlf)
//  console.log('strhlf',sthf)

//  for(i=sthf;i<=str.length;i++){
//    if(str[i] !== str[str.length-i-1]){
//    // b=b+ str[str.length-i]
//        return false
//    }

//  }
//  return true
//  //console.log(b)

// }
// var str ="codeedoc" //window.prompt("")//
//  function recursivePalindrom(str){
//   debugger
//   const strLen = str.length;
//   if (strLen < 2) return true;

//   if (str[0] === str[strLen - 1]) {
//       return recursivePalindrom( str.slice(1, strLen - 1) );
//   }

//   return false;

//  }
//document.write('<br>',recursivePalindrom(str))

//function arrOrNot(str){
//return Array.isArray(str) ? true :false
// if(toString.call(str) === '[object Array]'){
//   //if(typeof str ==='[object]'){
//   return true
// }
// else{
//   return false
// }
//
//debugger
//arr=[]
//  return str.slice(0)
// str.forEach(st=>{
//   arr.push(st)
//   console.log(`st`, st)
// for(var i=0;i<=st.length;i++){

//   //if(toString.call(st[i]) === '[object Array]'){
//    // if(typeof st[i] === "object"){
//     //return Array.isArray(str) ? true :false
//     // if(Array.isArray(st[i])){
//     // return st[i] +"array inside arr one dimentional array"//+arr.push(st)
//     // }
//     // else{
//     //   return "one dimentional array"
//     // }
// }
// })
//  return arr
// }
//  function arrOrNot(str){
//   arr=[]
//   for(var i=0;i<str.length;i++){
//     //arr.push(str[i])
//     arr[arr.length]  =str[i]//alternate of push()
//     // arr += str.filter(Array.isArray)
//   }
//    return arr
// }
// var str =['red','gree','blu','kal']
//document.write('<br>',arrOrNot(str))
// let ame="aaa"
// let cname= ame
// ame='ccc'
// console.log(`cname`, cname)
// const o1={
//   id:1,
//   nm:'aaa'
// }
// const o2=o1
// o2.nm='ccc'
// console.log(`o1`, o2)
// function lastEle(str,n){
//   debugger
// //var d =str.length
// var arr=[]
// for(var i=str.length-n;i<=str.length-1;i++){
//   arr[arr.length] =str[i]
// }
// console.log(`arr`, arr)

// return arr
// }
// document.write('<br>',lastEle(str,1))
// function arrToStr(str){
//   debugger
// //var d =str.length
// var arr=""
// for(var i=0;i<str.length;i++){
//   arr +=str[i]+','
// }
// console.log(`arr`, arr)

// return arr
// }
// var inp = window.prompt(245468)
// function arrToStr(inp){
//   debugger
// var arr=""
// for(var i=0;i<inp.length;i++){
//   if(inp[i] %2 ===0 && inp[i+1] %2 ===0 ){
//     arr+= inp[i]+'-'
//   }
//   else{
//     arr+= inp[i]+''
//   }
// }

// console.log(`arr`, arr)

// return arr
// }
// function bubbleSort(str){

//  for(let i=0;i<str.length;i++){
//    for(let j=0;j<str.length;j++){
//      if(str[j]> str[j+1])
//      {
//       let arr =str[j]
//       console.log(`arr`, arr)
//       str[j] = str[j+1]
//       str[j+1] = arr
//      }
//    }
//  }

// return str

// }
// function arrFilter(str){
//   debugger
//   var len=str.length
//   let arr=''
//   for(let i=0;i<len;i++){
//     for(let j=0;j<len;j++)
//     {
//       if(str[j]=== str[j+1]){
//          arr= str[j]
//       }
//     }
//   }
//   return [arr , arr.length ,'times']
// }
// function swapStr(str){
//   let len =str.length
//   let alf=""
//   let arr=[]
//   debugger
//   // for(let i=0; i<=str.length;i++){
//   //   if(str[i] === " " || i === str.length){
//   //     arr.push(alf)
//   //     alf=""
//   //   }
//   //   else{
//   //     alf = alf+str[i]
//   //   }
//   // }
//   for(let i=0; i<str.length;i++){
//     if(str[i] == str[i].toUpperCase()){// && str[i] == str[i].toLowerCase()){
//        alf=alf+ str[i].toLowerCase()
//     }
//     else if(str[i] == str[i].toLowerCase()){
//       alf= alf+ str[i].toUpperCase()
//     }
//     else{
//       alf=alf +str[i]
//     }
//   }
//   console.log(`arr`, arr)

//   return alf
// }
// var str="The Quick Brown Fox" //tHE qUICK bROWN fOX'
//let str=[ 4,3,1,2,2,2,2,-3,5,-6,7,8 ];
//var str = [[[1, 2], [1, 24]], [[8, 11],[ 9, 4]], [[7, 0], [7, 27]], [[7, 4], [28, 14]]];
// var str = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// function arrNodeIndex(str){
//   let len =str.length
//   let alf=""
//   for(let i=0;i<len;i++){
//     alf= alf + `row ${i} <br>`
//     for(let j=0;j<str[i].length;j++){
//       alf= alf+ `${str[i][j]}  <br>`

//     }
//   }
//   return alf
// }
//var str = [1, 2, 1, 24,8, 11, 9, 4];

// function arrSumProduct(str){
//   let len =str.length
//   let multi=1
//   let sum=0
//   for(let i=0;i<len;i++){
//     multi= multi * str[i]  //'product' + +" "

//   }
//   for(let j=0;j<len;j++){
//       sum= sum +str[j] //+`<br>`

//     }
//   return [sum,multi]
// }
//document.write('<br>',arrSumProduct(str))
// var body =document.getElementsByTagName('body')

// function addItemInBlankArray(arr){
//   debugger
// var inp = document.createElement('input')
//   //   inp.value =1
//   // body.appendChild(inp)

//   // body.style.display="inline"
//   // for (let i = 0; i < 2; i++) {
//   //   let btn = document.createElement('button')
//   //   body.appendChild(btn)
//   //   btn.innerText =  i===0? "add":"display"
//   //   btn.setAttribute(`onclick`, `addNumInArr(arr,inp)`)
//   // }
//   //addNumInArr(arr,inp)

//   return arr
// }
//input = document.querySelector('#i1').value
//var body = document.querySelector('body')
//var input = document.querySelector('#i1').value
// var arr = []
// function addNumInArr(arr){
//  // debugger
//   var input = document.getElementById("i1").value;
//   for (let i = 0; i <arr.length+1; i++) {
//      arr[i]=  input

//   }
//   return arr
// }
//  var a1=[1,2,3];
//  var a2=[100,2,1,10]
// function  forUnique(a1,a2){
//   debugger
//   var arr =[]
//   var n1=a1.length;
// var n2= a2.length;
// for(var i = 0; i < n1; i++) {
//   for(var j = i; j < n2; j++) {
//         arr[i]=a1[i]
//         arr[j]=a2[j]
//   }
// }
//   console.log(`arr`, arr)

//   return  arr
// }
// document.write('<br>',forUnique(a1,a2))
// let arr = [
//   "1", "2", "3", "4", "5"
// ];
// function  ShaffleArr(arr){
//   debugger
//   //var ar =[]
//   var n1=arr.length;

//   while(n1 !=0){

//     var random_index = Math.floor(Math.random() *n1);

//     n1--;
//     // And swap it with the current element.
//     [arr[n1],arr[random_index]]=[arr[random_index],arr[n1]]
//   }

//   return  arr
// }
// document.write('<br>',ShaffleArr(arr))
// let num = [
//   1,2,3,8
// ];
// let num=4568
// function swapIt(num){
//   debugger
// var n=num.toString().length
// //while(n !=0){

//   for(let i=0;i<n;i++){
//      // n--;
//      var random_index = i+n;
//       // And swap it with the current element.
//       [num[i],num[random_index]]=[num[random_index],num[i]]
//   }
//   //  }
// // while(n !=0){
// //   n++;
// //   [num[n],num[n+1]]=[num[n+1],num[n]]
// // }
// return num
// }
// document.write('<br>',swapIt(num))
// console.log(`window.localStorage`, window.localStorage)
// localStorage.setItem('Name','Abdullah')
// localStorage.setItem('age',23)
// let veg =['bhindi','pyaz','alu','bagun','tamatar']
// localStorage.setItem('sabzi',JSON.stringify(veg))
// var n =localStorage.getItem('Name')
// var ag =localStorage.getItem('age')
// var sabzi =localStorage.getItem('sabzi')
// // console.log(`n`, n)
// let sbzi =JSON.parse(sabzi)

// console.log(`sabzi 1`,sbzi[3] )
// var rm =window.localStorage.removeItem('sbzi[3]')

// console.log(`sabzi 2`,sbzi )
// console.log(`rm`,rm )

// //window.localStorage.removeItem('age')
//var Key = window.localStorage.key(0)

// console.log(`key`, Key)
//window.localStorage.clear()

//eleCreator(body,eles,atr,atrV)

// function eleCreator(parent, el, attrType, attrVal) {
//     var res;
//     for (let i = 0; i < el.length; i++) {
//         var ele = document.createElement(el[i])
//         res = parent.appendChild(ele)
//         let inputs = document.querySelectorAll('input')

//         for (let k = 0; k < inputs.length; k++) {
//             console.log(`ele`, inputs[k])
//             for (let j = 0; j < attrType.length; j++) {
//                 for (let each of attrVal) {
//                     var ech;
//                     if (attrType) each.every(ea =>
//                         inputs[k].setAttribute(attrType[j], ea)//attrVal[j])
//                     )
//                 }
//             }
//         }

//     }

//     return res

// }
