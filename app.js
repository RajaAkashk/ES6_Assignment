<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
<ol id="list">
  
</ol>
  <script>
    const list = document.querySelector('#list')

function isPrime(num){
  if(num <= 1) return false;
  if(num === 2) return true;
  for(let i = 2; i <= Math.sqrt(num); i++){
    if(num % i === 0) return false;
  }
  return true ;
}
    
for(let i=1; i<=30 ; i++){
  const newElement = document.createElement('li')
  newElement.textContent = i
  
  if(isPrime(i) && i % 3 === 0 ){
    newElement.textContent = "FizzPrime";
  }
  else if (isPrime(i) && i % 5 === 0 ){
      newElement.textContent = "BuzzPrime";
    }
  else if (i % 3 === 0 ){
      newElement.textContent = "Fizz";
    } 
  else if (i % 5 === 0 ){
    newElement.textContent = "Buzz";
  } 
  else if (isPrime(i) ){
    newElement.textContent = "Prime"
  }
  else{
    newElement.textContent = i
  }
  list.appendChild(newElement)
}
    
  </script>
</body>

</html>
