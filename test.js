const findEven = (num) => {
  let evenNum = [];
  
  for (let num = 1; num <= 50; num++) {
    if (num % 2 === 0) {
      evenNum.push(num);
    }
  }
  return evenNum;
}

findEven();
