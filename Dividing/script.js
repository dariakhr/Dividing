var first_num = +prompt('Write a number');
if (isNaN(first_num) || first_num == 0) {
  alert('Wrong number. Write correct number');
} else {
  var second_num = +prompt('Write second number');
  if (isNaN(second_num) || second_num == 0 || second_num > first_num) {
    alert('Wrong number. Write correct number');
  } else {
    var result = first_num % second_num;
    if (result == 0) {
      alert('Rest = 0');
    } else {
      alert('Rest is ' + result);
    }
  }
}
