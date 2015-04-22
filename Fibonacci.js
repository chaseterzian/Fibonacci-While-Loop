var fibnum = function(number) {
  var count = 0;
  var init = 1;
  var init2 = 0;

  while (count !== number ) {
    if (count%2 !== 0) {
      init = (init2 + init);
    } else {
      init2 = (init + init2);
    }
    count = count + 1;
  }

  if (number%2 === 0) {
    return init2;
  } else {
    return init;
  }
};

console.log(fibnum());
