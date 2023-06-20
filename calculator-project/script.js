let result=document.getElementById("inputtext");

let calc=(number)=>{
    result.value+=number;
}

 let Result=()=>{
 try{
    result.value=eval(result.value)
 }
 catch(err){
    alert("Enter a Valid Input")
 }
 }
 function clr(){
    result.value="";

 }
 function del(){
    result.value=result.value.slice(0,-1)
 }
//  function Result(){
//     let eqn= document.getElementById("inputtext").value
//     document.getElementById("inputtext").value=eval(eqn)
   
//    }