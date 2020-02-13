// var a = 10;
// var b = 20;
// var c = a+b;
// console.log(c);

// var name = 'Luka';
// var age = '10';
// var location = 'Bokkos';

// console.log('My Name '+ name +' and I am '+ age +' years old and I stay in '+ location +'.');

// console.log(`my name is ${name} and i am ${age} old my location is ${location}`);

// var a = 2;
// var b = 12;
// var c = 6;
// // var d = (b+c);
// var x = a*(b + c);
// var y = x*.16
// // var y = x ^ 0.5;
// // console.log(x);
// console.log(x);
// console.log(y);

// var a = 1;
// var b = -5;
// var c = 6;
// var p = a*2;
// var q = -(b);
// var x = Math.sqrt((b*b) - 4*a*c);
// var y = (q + x)/p;
// var z = (q - x)/p;
// console.log(x);
// console.log(p);
// console.log(q);
// console.log(y);
// console.log(z);

// console.log('welcome' + 'to nhub');
// var a = 12;
// var d = 4;
// var b = ' books';
// var c = a + d + b;
// var e = b + a + d;
// console.log(c);
// console.log(e);

// ========================================object
// var projector = {
//     color: 'orange',
//     sound: 'noise',
//     price: 120000
// }

// var person = {
//     name: 'John',
//     age: 16,
//     height:'1.4',
//     location: 'jos'
// }
// var car = {
//     color: 'red',
//     model: '2020',
//     price: 5000000
// }
// var johnProps = `my name is ${person.name} and i am ${person.age} years old`;
// var john_car = `I have a ${car.color} car and it is model ${car.model} which costs ${car.price}`;
// var join = johnProps + john_car;
// console.log(join);
// var x = 2;
// var y =  projector.price + x;
// console.log(projector);
// console.log(projector.price);
// console.log(y);

//===============================Array
// var x = [391, 392, 320, 70, 492];
// console.log(x);
// console.log(x[0]);
// console.log(x.length);
// var y = x.pop();
// console.log(x);
// console.log(y);
// var z =x.push('push');
// console.log(x);
// var e = x.splice(0, 2);
// console.log(x);

//====================================Typeof
// var a = typeof 'my name' + '...' + typeof 4 + '.....' + typeof false + '....' + typeof[1,2,3,4] + '....' + typeof{name: 'zacks', age:12}
// console.log(a);

//======================================functions=========================================]

// function funName() {
//     var x =3;
//     var y =7;
//     var z =x + y;
//     return z;
// }

// var result = funName();
// console.log(result);
// document.write(result);

// function funName(one, two) {
//     var sum =one + two;
//     return sum;
// }

// var result = funName(13, 2);
// console.log(result);
// document.write(result);

document.getElementById('output').style.visibility = 'hidden'
document.getElementById('lbsInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible'
    var lbs = e.target.value;
    document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
    document.getElementById('kgOutput').innerHTML = lbs/2046;
    document.getElementById('ozOutput').innerHTML = lbs*16;
});
