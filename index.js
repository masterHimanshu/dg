function diceGame(name1,name2) {

var arr = ["dice1.png" , "dice2.png" , "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
var num=Math.floor(Math.random()*6);
var num1=Math.floor(Math.random()*6);
var arr1=arr[num];
var arr2=arr[num1];
document.querySelector("#player1").src=arr1;
document.querySelector("#player2").src=arr2;
if (num>num1) {
  document.querySelector("h1").innerHTML=(name1+" wins ");

} else if (num<num1)
 {
  document.querySelector("h1").innerHTML=(name2+"  wins ");
} else
{
  document.querySelector("h1").innerHTML=("Its a tie  ");
}
}
