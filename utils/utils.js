function isOdd(num){
  if(!Number.isInteger(num)){
    throw new TypeError('Argument must be an integer.')
  }
  return Math.abs(num) % 2 !== 0;
}

function isEven(num){
  if(!Number.isInteger(num)){
    throw new TypeError('Argument must be an integer.')
  }
  return Math.abs(num) % 2 === 0;
}



module.exports = {
  isOdd: isOdd,
  isEven: isEven
};