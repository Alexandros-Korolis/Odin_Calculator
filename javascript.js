btn_one = document.querySelector('#btn_one');
btn_two = document.querySelector('#btn_two');
btn_three = document.querySelector('#btn_three');
btn_four = document.querySelector('#btn_four');
btn_five = document.querySelector('#btn_five');
btn_six = document.querySelector('#btn_six');
btn_seven = document.querySelector('#btn_seven');
btn_eight = document.querySelector('#btn_eight');
btn_nine = document.querySelector('#btn_nine');
btn_zero = document.querySelector('#btn_zero');
btn_plus = document.querySelector('#btn_plus');
btn_minus = document.querySelector('#btn_minus');
btn_multipl = document.querySelector('#btn_multipl');
btn_divide = document.querySelector('#btn_divide');
btn_clear = document.querySelector('#btn_clear');
btn_equal = document.querySelector('#btn_equal');

btn_one.addEventListener('click',() =>{
    const x1 = document.getElementById('input'); 
    x1.setAttribute('value',document.getElementById('input').getAttribute("value") + 1);
});

btn_two.addEventListener('click',() =>{
    const x2 = document.getElementById('input'); 
    x2.setAttribute('value',document.getElementById('input').getAttribute("value") + 2);
});

btn_three.addEventListener('click',() =>{
    const x3 = document.getElementById('input'); 
    x3.setAttribute('value',document.getElementById('input').getAttribute("value") + 3);
});

btn_four.addEventListener('click',() =>{
    const x4 = document.getElementById('input'); 
    x4.setAttribute('value',document.getElementById('input').getAttribute("value") + 4);
});

btn_five.addEventListener('click',() =>{
    const x5 = document.getElementById('input'); 
    x5.setAttribute('value',document.getElementById('input').getAttribute("value") + 5);
});

btn_six.addEventListener('click',() =>{
    const x6 = document.getElementById('input'); 
    x6.setAttribute('value',document.getElementById('input').getAttribute("value") + 6);
});

btn_seven.addEventListener('click',() =>{
    const x7 = document.getElementById('input'); 
    x7.setAttribute('value',document.getElementById('input').getAttribute("value") + 7);
});

btn_eight.addEventListener('click',() =>{
    const x8 = document.getElementById('input'); 
    x8.setAttribute('value',document.getElementById('input').getAttribute("value") + 8);
});

btn_nine.addEventListener('click',() =>{
    const x9 = document.getElementById('input'); 
    x9.setAttribute('value',document.getElementById('input').getAttribute("value") + 9);
});

btn_zero.addEventListener('click',() =>{
    const x0 = document.getElementById('input'); 
    x0.setAttribute('value',document.getElementById('input').getAttribute("value") + 0);
});


// const add = function(){
//     let op = '+';
//     first_number_string = document.getElementById('input').getAttribute("value");
//     first_number_final = parseInt(first_number_string);
//     document.getElementById('input').setAttribute('value',document.getElementById('input').getAttribute("value") + '+');
// };

const subtract = function(){
    let op = '-';
};

const multiply = function(){
    let op = '*';
};

const divide = function(){
    let op = '/';
};

const operate = function(){
    let op ;
};


// btn_plus.addEventListener('click',()=>{
//     let op = '+';
//     first_number_string = document.getElementById('input').getAttribute("value");
//     first_number_final = parseInt(first_number_string);
//     document.getElementById('input').setAttribute('value','+');
// });