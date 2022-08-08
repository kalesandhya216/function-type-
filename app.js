var cl = console.log;
function add(n1, n2) {
    return n1 + n2;
}
function sub(n1, n2) {
    return n1 - n2;
}
function printResult(num) {
    cl("The result is ".concat(num));
}
// let combiner : Function;
var combiner;
combiner = add;
combiner = sub;
// combiner = printResult;
// combiner = console.log;
// function type and callback
function addHandler(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addHandler(100, 200, printResult);
// unknown type 
var userInfo;
var userName;
userInfo = 123;
userInfo = 'John';
userName = 'July';
if (typeof userInfo === 'string') {
    userName = userInfo;
}
cl(userName);
// ========================== Ex. 1) ======================
function sum(n1, n2) {
    return n1 + n2;
}
function printRes(num) {
    cl("The result is ".concat(num));
}
printResult(20);
// let combiner1 : Function;
var combiner1;
combiner1 = sum;
// combiner1 = printRes;
// function type and callback
function AddHandler(n1, n2, callback) {
    var result = n1 + n2;
    callback(result);
}
AddHandler(50, 70, printRes);
// unknown type 
var empInfo;
var empId;
empInfo = 'Smith';
empInfo = 505;
empId = 105;
if (typeof empInfo === 'number') {
    empId = empInfo;
}
cl(empId);
// ========================== Ex. 2) ======================
function mul(n1, n2) {
    return n1 * n2;
}
function showResult(num) {
    cl("The multiplication is ".concat(num));
}
// let combiner2 : Function;
var combiner2;
combiner2 = mul;
// combiner2 = showResult;
// function type and callback
function addhandler(n1, n2, clback) {
    var result = n1 * n2;
    clback(result);
}
addhandler(25, 25, showResult);
// unknown type 
var studentInfo;
var studentEmail;
studentInfo = 'Neha';
studentInfo = 'neha@gmail.com';
studentEmail = 'sneha@gmail.com';
if (typeof studentInfo === 'string') {
    studentEmail = studentInfo;
}
cl(studentEmail);
// ========================== Ex. 3) ======================
function sum1(n1, n2) {
    return n1 + n2;
}
function showRes(num) {
    cl("The result is ".concat(num));
}
// let combiner3 : Function; 
var combiner3;
combiner3 = sum1;
// combiner3 = showRes;
// function type and callback
function addHandler1(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addHandler1(200, 500, showRes);
// unknown type 
var personInfo;
var personAge;
personInfo = 'Jen';
personInfo = 45;
personAge = 30;
if (typeof personInfo === 'number') {
    personAge = personInfo;
}
cl(personAge);
// ========================== Ex. 4) ======================
function div(n1, n2) {
    return n1 + n2;
}
function showResult1(num) {
    cl("The result is ".concat(num));
}
// let combiner_1 : Function;
var combiner_1;
combiner_1 = div;
// combiner_1 = showResult1;
function addHandler_2(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addHandler_2(50, 50, showResult1);
// unknown type 
var carInfo;
var carColor;
carInfo = 500;
carInfo = 'grey';
carColor = 'white';
if (typeof carInfo === 'string') {
    carColor = carInfo;
}
cl(carColor);
// ========================== Ex. 5) ======================
function Addition(n1, n2) {
    return n1 + n2;
}
function print_Res(num) {
    cl("The result is ".concat(num));
}
// let combiner_3 : Function;
var combiner_3;
combiner_3 = Addition;
// combiner_3 = print_Res;
function addHandler_3(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addHandler_3(10, 10, print_Res);
// unknown type 
var sportInfo;
var sportName;
sportInfo = 11;
sportInfo = 'cricket';
sportName = 'football';
if (typeof sportInfo === 'string') {
    sportName = sportInfo;
}
