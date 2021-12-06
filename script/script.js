function getRandom() {
  const arr = [];
  function generateNum() {
    if (arr.length === 100) {
      return arr;
    }

    const num = Math.round(Math.random() * 100);

    if (!arr.includes(num)) {
      arr.push(num);
    } else {
      return generateNum();
    }

    return arr;
  }
  return generateNum;
}

const result = getRandom();

for (let i = 0; i < 100; i++) {
  console.log(result());
}
