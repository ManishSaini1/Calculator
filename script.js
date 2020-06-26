// //var seven=document.getElementById('7').innerHtml;
// //console.log("hello");
// //console.log(seven);
// // var one;
// // var two;
// // var three;
// // var four;
// // var five;
// // var six;
// // var seven;
// // var eight;
// // var nine;
// // var zero;
// // var dot;
// // var addition;
// // var subtract;
// // var multiply;
// // var divide;
// // var moudulo;
// // var dot;
// // var clear;
// // document.getElementById("input-field").addEventListener("keypress", function(event){
// //     event.preventDefault()
// // });
// var expression="";
// var i=0;
// function pressFunction(event)
// {
//     var bol=true;
//     var x=event.key;
//     console.log(typeof(x));
//     if(x=="Enter")
//      {
//          console.log("heree");
//          calculate();
//      }
//   else   if(!/[1-9 *+-/ ]/.test(x))
//     {
        
//         window.alert("wrongInput");
//         set();
        
//         return false;
//     }
//     else if(bol==true){
//         console.log(expression);
//         expression+=x;
//     }
// //     var letter= /^[a-zA-z]+$/;
// //     if(/[^1-9*+/*-]/.test(x))
// //     {
        
// //         expression+=x;
    
// //     }
// //    else 
// //     else
// //     {
// //         window.alert("please Enter Numberic");
// //     }
// //     console.log(expression);
// //     console.log(typeof(x));
//     // document.getElementById("input-field").addEventListener("keypress", keyValue(e));
//     // function keyValue(e)
//     // {
//     //     console.log(e);
//     // }
// }
// function one()
// {

//    expression+= document.getElementById('1').value;
//    document.getElementById('input-field').value=expression;
//   // console.log(val);
//    console.log(expression);
// }
// function two()
// {
//    expression+= document.getElementById('2').value;
//    document.getElementById('input-field').value=expression;
//    console.log(expression);
// }
// function three()
// {
//    expression+= document.getElementById('3').value;
//    document.getElementById('input-field').value=expression;
// }
// function four()
// {
//     expression+=document.getElementById('4').value;
//     document.getElementById('input-field').value=expression;
// }
// function five()
// {
//     expression+= document.getElementById('5').value;
//    document.getElementById('input-field').value=expression;
// }
// function six()
// {
//     expression+= document.getElementById('6').value;
//     document.getElementById('input-field').value=expression;
// }
// function seven( )
// {
    
//      expression+= document.getElementById('7').value;
//      document.getElementById('input-field').value=expression;

// }
// function eight()
// {
//     expression += document.getElementById('8').value;
//     document.getElementById('input-field').value=expression;
// }
// function nine()
// {
//     console.log("here");
//     expression+= document.getElementById('9').value;
//    document.getElementById('input-field').value=expression;
// }
// function zero()
// {
//     expression+= document.getElementById('0').value;
//    document.getElementById('input-field').value=expression;
// }
// function multiply()
// {
//     expression+= document.getElementById('multi').value;
//    document.getElementById('input-field').value=expression;

// }
// function divide()
// {
//     expression+= document.getElementById('div').value;
//    document.getElementById('input-field').value=expression;
// }
// function addition()
// {

//     expression +=  document.getElementById('add').value;
//     document.getElementById('input-field').value=expression;
//    console.log(expression);
// }
// function  subtract()
// {
//     expression+=  document.getElementById('sub').value;
//   document.getElementById('input-field').value=expression;
// }
// function modulo()
// {
//     expression+= document.getElementById('mod').value;
//    document.getElementById('input-field').value=expression;
// }
// function dot()
// {
//     expression+=   document.getElementById('dot').value;
//   document.getElementById('input-field').value=expression;
// }
// function ac()
// {
//     console.log("here");
//    document.getElementById('input-field').value="0";
//    expression="";
   
// }
// function calculate()
// {
//     console.log(expression);
//     var input=document.getElementById('input-field').value;
//    var ans = eval(expression);
   
//    expression=ans;
//    document.getElementById('input-field').value=ans;
// }
// function set()
// {
//     console.log("helllooo");
//     console.log(expression);
//     console.log(document.getElementById('input-field').value    );

// document.getElementById('input-field').value=expression;
// }
   

//var seven=document.getElementById('7').innerHtml;
//console.log("hello");
//console.log(seven);
// var one;
// var two;
// var three;
// var four;
// var five;
// var six;
// var seven;
// var eight;
// var nine;
// var zero;
// var dot;
// var addition;
// var subtract;
// var multiply;
// var divide;
// var moudulo;
// var dot;
// var clear;
// document.getElementById("input-field").addEventListener("keypress", function(event){
//     event.preventDefault()
// });
var expression="";
var i=0;
document.getElementById("input-field").addEventListener('keydown', function(event) {
    const key = event.key; // const {key} = event; ES6+
        
    if (key === "Backspace" || key === "Delete") {
    
        console.log("down key");
        var currtext=document.getElementById("input-field").value;
        var length=currtext.length;
        expression=currtext.substring(0,length-1);

        //set();
                return false;
    }
});
function pressFunction(event)
{
    
    var regex = /^[0-9]+$/
   // console.log(event.key + "key");
    var bol=true;
    var x=event.key;
    console.log(event.keyCode  + " key Code");
    if (event.keyCode == "deleteContentBackward") {
        console.log("i am here and Valueof space" + x);
    }
  
   // console.log(typeof(x));
    var isValid = regex.test(event.key);
    if(x=="Enter" || event.keyCode==61)
     {
      //   console.log("heree");
         calculate();
         event.preventDefault();
     }
    else if(!/[0-9 *+-/ ]/.test(x)){
      //  console.log("here i am");
        window.alert("wrongInput");
        event.preventDefault();
        set();
        
        return false;
    }
    else if(bol==true){
        console.log(expression);
        expression+=x;
    }
   
    
    
//     var letter= /^[a-zA-z]+$/;
//     if(/[^1-9*+/*-]/.test(x))
//     {
        
//         expression+=x;
    
//     }
//    else 
//     else
//     {
//         window.alert("please Enter Numberic");
//     }
//     console.log(expression);
//     console.log(typeof(x));
    // document.getElementById("input-field").addEventListener("keypress", keyValue(e));
    // function keyValue(e)
    // {
    //     console.log(e);
    // }
}
function one()
{

   expression+= document.getElementById('1').value;
   document.getElementById('input-field').value=expression;
  // console.log(val);
   console.log(expression);
}
function two()
{
   expression+= document.getElementById('2').value;
   document.getElementById('input-field').value=expression;
   console.log(expression);
}
function three()
{
   expression+= document.getElementById('3').value;
   document.getElementById('input-field').value=expression;
}
function four()
{
    expression+=document.getElementById('4').value;
    document.getElementById('input-field').value=expression;
}
function five()
{
    expression+= document.getElementById('5').value;
   document.getElementById('input-field').value=expression;
}
function six()
{
    expression+= document.getElementById('6').value;
    document.getElementById('input-field').value=expression;
}
function seven( )
{
    
     expression+= document.getElementById('7').value;
     document.getElementById('input-field').value=expression;

}
function eight()
{
    expression += document.getElementById('8').value;
    document.getElementById('input-field').value=expression;
}
function nine()
{
    console.log("here");
    expression+= document.getElementById('9').value;
   document.getElementById('input-field').value=expression;
}
function zero()
{
    expression+= document.getElementById('0').value;
   document.getElementById('input-field').value=expression;
}
function multiply()
{
    expression+= document.getElementById('multi').value;
   document.getElementById('input-field').value=expression;

}
function divide()
{
    expression+= document.getElementById('div').value;
   document.getElementById('input-field').value=expression;
}
function addition()
{

    expression +=  document.getElementById('add').value;
    document.getElementById('input-field').value=expression;
   console.log(expression);
}
function  subtract()
{
    expression+=  document.getElementById('sub').value;
  document.getElementById('input-field').value=expression;
}
function modulo()
{
    expression+= document.getElementById('mod').value;
   document.getElementById('input-field').value=expression;
}
function dot()
{
    expression+=   document.getElementById('dot').value;
  document.getElementById('input-field').value=expression;
}
function ac()
{
    console.log("here");
   document.getElementById('input-field').value="";
   expression="";
   
}
function calculate()
{
    console.log(expression);
    var input=document.getElementById('input-field').value;
   var ans = eval(expression);
   
   expression=ans;
   document.getElementById('input-field').value=ans;
}
function set()
{
    console.log("helllooo");
    console.log(expression);
    console.log(document.getElementById('input-field').value    + " i am here and finallll" );

document.getElementById('input-field').value=expression;
}