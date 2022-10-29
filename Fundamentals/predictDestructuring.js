//Problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
//Index 0
const [ randomCar ] = cars
//skip index 0 & log index 1
const [ ,otherRandomCar ] = cars
//Output of console.log(randomCar) = ['Tesla']
//Output of console.log(otherRandomCar) =['Mercedes']

//Problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
//Name conflicts
//const { name: otherName} = employee;
//Output of console.log(name); = ReferenceError/name is out of scope
//Output of console.log(otherName); = Elon


//Problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const {password : hashedPassword} = person;
//Output of console.log(password); = 12345
//Output of console.log(hashedPassword); = undefined/password undefined in person object

//Problem 4
const numbers = [8,2,3,5,6,1,67,12,2];
const [,first] =  numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Output of console.log(first == second); = false/ first = 2, second = 3
//Output of console.log(first == third); = true/ first & third = 2

//Problem 5 
const lastTest = {
    key: 'value',
    secondKey: [1,5,1,8,3,3]
}
const {key} = lastTest;
const {secondKey} = lastTest;
const [,willThisWork] = secondKey;

//Output of console.log(key) = value
//Output of console.log(secondKey)= [1,5,1,8,3,3]
//Output of console.log(secondKey[0]) = [1]
//Output of console.log(willThisWork) = [5]
