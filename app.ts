
let cl = console.log;


function add(n1 : number, n2 : number) : number{
    return n1+n2;
}

function sub( n1 : number, n2 : number) : number{
    return n1-n2;
}

function printResult(num : number) : void{
    cl(`The result is ${num}`);
}


// let combiner : Function;

let combiner : (n1 : number, n2 : number) => number;

combiner = add;
combiner = sub;
// combiner = printResult;
// combiner = console.log;


// function type and callback

function addHandler(n1 : number, n2 : number, cb : (num : number) => void){
    let result = n1+n2;
    cb(result);
}

addHandler(100, 200, printResult);


// unknown type 

let userInfo : unknown;
let userName : string;

userInfo = 123;
userInfo = 'John';

userName = 'July';


if(typeof userInfo === 'string'){
    userName = userInfo;
}

cl(userName);


// ========================== Ex. 1) ======================

function sum(n1 : number, n2 : number) : number{
    return n1+n2;
}


function printRes(num : number) : void{
    cl(`The result is ${num}`);
}

printResult(20);

// let combiner1 : Function;

let combiner1 : (n1 : number, n2 : number) => number; 

combiner1 = sum;
// combiner1 = printRes;


// function type and callback


function AddHandler(n1 : number, n2 : number, callback : (num : number) => void){
    let result = n1+n2;
    callback(result);
}

AddHandler(50, 70, printRes);


// unknown type 


let empInfo : unknown;
let empId : number;


empInfo = 'Smith';
empInfo = 505;

empId = 105;


if(typeof empInfo === 'number'){
    empId = empInfo;
}

cl(empId);


// ========================== Ex. 2) ======================


function mul(n1 : number, n2 : number) : number{
    return n1*n2;
}

function showResult(num : number) : void{
    cl(`The multiplication is ${num}`);
}


// let combiner2 : Function;

let combiner2 : (n1 : number, n2 : number) => number;

combiner2 = mul;
// combiner2 = showResult;


// function type and callback

function addhandler(n1 : number, n2 : number, clback : (num : number) => void){
    let result = n1*n2;
    clback(result);
}


addhandler(25, 25, showResult);

// unknown type 

let studentInfo : unknown;
let studentEmail : string;

studentInfo = 'Neha';
studentInfo = 'neha@gmail.com';

studentEmail = 'sneha@gmail.com';


if(typeof studentInfo === 'string'){
    studentEmail = studentInfo;
}

cl(studentEmail);


// ========================== Ex. 3) ======================


function sum1(n1 : number, n2 : number) : number{
    return n1+n2;
}


function showRes(num : number){
    cl(`The result is ${num}`)
}


// let combiner3 : Function; 

let combiner3 : (n1 : number, n2 : number) => number;

combiner3 = sum1;
// combiner3 = showRes;


// function type and callback


function addHandler1(n1 : number, n2 : number, cb : (num : number) => void){
    let result = n1+n2;
    cb(result);
}

addHandler1(200, 500, showRes);


// unknown type 


let personInfo : unknown;
let personAge : number;

personInfo = 'Jen';
personInfo = 45;


personAge = 30;


if(typeof personInfo === 'number'){
    personAge = personInfo;
}

cl(personAge);


// ========================== Ex. 4) ======================


function div(n1 : number, n2 : number) : number{
    return n1+n2;
}


function showResult1(num : number) : void{
    cl(`The result is ${num}`);
}


// let combiner_1 : Function;

let combiner_1 : (n1 : number, n2 : number) => number;

combiner_1 = div;
// combiner_1 = showResult1;


function addHandler_2(n1 : number, n2 : number, cb : (num : number) => void){
    let result = n1+n2;
    cb(result);
}

addHandler_2(50,50,showResult1);


// unknown type 

let carInfo : unknown;
let carColor : string;

carInfo = 500;
carInfo = 'grey';

carColor = 'white';

if(typeof carInfo === 'string'){
    carColor = carInfo;
}

cl(carColor);


// ========================== Ex. 5) ======================


function Addition(n1 : number, n2 : number) : number{
    return n1+n2;
}

function print_Res(num : number) : void{
    cl(`The result is ${num}`);
}


// let combiner_3 : Function;

let combiner_3 : (n1 : number, n2 : number) => number;

combiner_3 = Addition;
// combiner_3 = print_Res;

function addHandler_3(n1 : number, n2 : number, cb : (num : number) => void){
    let result = n1+n2;
    cb(result);
}

addHandler_3(10, 10, print_Res);


// unknown type 


let sportInfo : unknown;
let sportName : string;


sportInfo = 11;
sportInfo = 'cricket';

sportName = 'football';


if(typeof sportInfo === 'string'){
    sportName = sportInfo;
}
