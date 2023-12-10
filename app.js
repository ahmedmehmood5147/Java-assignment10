// var arr = [[1 , 2 , 3],
// [4 , 5 , 6]
// [7 , 8 , 9]]
// for (var i = 0 ; i <= 10; i ++){
//     document.write(i + "<br>")
// }
// var userName = prompt ("enter a table")
// var length = prompt ("enter a lenght")
// for (var i = 1 ; i <= length ; i++ ){
//     document.write (`${userName}x${i}=${userName*i}<br>` )
// }
var fruits = ["apple","mango","banana","strwaberry"]
for (var i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}
for (var i = 0 ; i <= 15 ; i ++){
    document.write(i+"<br>")
}
for (var i = 15 ; i >= 1 ; i--){
    document.write(i+"<br>")
}
for (var i = 0 ; i <= 10 ;i++){
    document.write(i*2+"<br>")
}
for (var i = 2000 ; i <=20000;i=i+2000){
    document.write(i+"<br>")
}
var arr = ["cake","apple pie","cookie","chips","patties"]
var userName = prompt ("what do want our shop")
for(var i = 0 ; i < arr.length ;i++){
if (arr[i]===userName){
    console.log("yes this item is available")
    break;
}
else {
    console.log("no this is not available")
}} 