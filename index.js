//1
const concatenateStrings = (...rest) => {
  return rest.join(" ")
}
console.log(concatenateStrings("Hello", "world", "!")); 
console.log(concatenateStrings("JavaScript", "is", "fun", "to", "learn.")); 

//2
const mergeArrays = ([...arr1],[...arr2]) => {
  return [...arr1,...arr2]
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays(["a", "b"], ["c", "d", "e"]));

//3
const concatenateWithSeparator = (separator,...rest) => {
  return rest.join(separator)
}
console.log(concatenateWithSeparator('-', 'apple', 'orange', 'banana'));
console.log(concatenateWithSeparator(', ', 'red', 'green', 'blue', 'yellow'));     

//4
const extractObjectValues = ({name,age}) => {
  return `Name:${name},Age:${age}`
}
console.log(extractObjectValues({ name: "Alice", age: 25 }));
console.log(extractObjectValues({ name: "Bob", age: 30 }));

//5
const extractArrayValues = ([one,two,three]) => {
  return `Values: ${one},${two},${three}`
}
console.log(extractArrayValues([1, 2, "Hello", 3]));
console.log(extractArrayValues(["apple", "orange", "banana"]));

//6
const extractNestedValues = (obj) => {
  const {data:{firstName,lastName,age}} = obj

  return `${firstName+lastName} will be ${age+5} old in five years.`
}
console.log(extractNestedValues({data: { firstName: "Priya", lastName: "Gupta", age: 20 }}));
console.log(extractNestedValues({data: { firstName: "John", lastName: "Doe", age: 25 }}));

//7
const printInfo = ({name:{firstName:name,lastName:surName},department}) => {
return `${name +" "+ surName} works in ${department}.`
}
console.log(printInfo({ name: { firstName: "John", lastName: "Doe" }, department: "IT" }));
console.log(printInfo({ name: { firstName: "Alice", lastName: "Smith" }, department: "Legal" }));

//8
const printUserDetails = ({name="anonymous", post="Hello World!"}) => {
  return `${name} posted "${post}"`
}
console.log(printUserDetails({ name: "John", username: "john", post: "Hello this is John. I am from England." }));
console.log(printUserDetails({}));

//9
const checkEvenOdd = (num) => {
  return `${num % 2 === 0 ? "It's an even number." : "It's an odd number."}`
}
console.log(checkEvenOdd(8));  
console.log(checkEvenOdd(15));

//10
const checkDiscountEligibility = (amount,premiumCustomer) => {
  return `${amount > 100 && premiumCustomer === true ?  "You are eligible for a 10% discount." : "You are eligible for a 5% discount."}`
}
console.log(checkDiscountEligibility(120, true));
console.log(checkDiscountEligibility(90, false));

//11
const object1 = { name: 'Alice', age: 30 }; 
const object2 = { city: 'London', country: 'UK' };

const mergeObjects = (object1,object2) => {
  return {...object1,...object2}
}
console.log(mergeObjects(object1,object2))

//12
const object = { name: 'Dave', age: 25 }; 
const addKeyValuePair = (obj, key,value) => {
   obj[key] = value ;
  return obj 
} 
console.log(addKeyValuePair(object, 'city', 'New York')); 
