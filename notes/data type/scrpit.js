var a = 36,b=27;
console.log(Math.sqrt(a)),Math.cbrt(b);
console.log(Math.abs(-10));
console.log(Math.max(5,6,1,5,6,9,23))
console.log(Math.min(5,6))
console.log(Math.floor(4.8))
console.log(Math.ceil(4.1))
console.log(Math.round(4.5))
console.log(Math.pow(3,4),3**4)
console.log(Math.random())
//print otp 4 digit //
console.log(Math.floor(Math.random()*10000))
//print one dice ludu game //
console.log(Math.ceil (Math.random()*6))
var num=25.3157;
console.log(num.toFixed(2))
console.log(num.toPrecision('5'))
//convert to binary,1101//
var a=13
console.log(a.toString(2))

// conert any value to number () or 'unary+'

console.log(5 + Number('4'))
console.log( 5 + +'4') 



//string//
//there is no differnce between single quotation or double quotation
var name="pavan"
var n='pavan'
console.log(typeof name,typeof n) 

var qoute="the gandhi said ,'good night'"
var msg= "the time is 6'o clock"

//string can be represented by third ways also

var str=`apple`
console.log(typeof str)


//backticks  are used to take dynamic value
var cost=25,quantity=4;
console.log("i bought"+quantity+"apple.Each cost ₹ "+cost+".so total is"+(cost*quantity))
// console.log(i bought $quantity+"apple.Each cost "+cost+".so total is"+(cost*quantity))




var a=2,b=4;
console.log(Math.sqrt(a+b))