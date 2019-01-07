function toBinary(number){
  let binary = '';
  if(number == 0) binary += 0;
  while(number > 0){
    binary = (number % 2) + binary;
    number = Math.floor(number / 2);
  }
  while(binary.length < 3) {
    binary = 0 + binary;
  }
  return binary;
}

function insertRow() {
  let markup = '<tr>\n';
  for(let i = 0; i <= arguments.length-1; i++){
    markup += '<td>' + arguments[i] + '</td>\n';
  }
  markup += '</tr>';
  return markup;
}

function invert(arg) {
  if(arg == 0) arg = 1;
  else arg = 0;
  return arg;
}


var x = 0, y = 0, z = 0,
    steps = 7, binaryStep;


    $('.tabl').append(insertRow('x', 'y', 'z', '~x', '~x+y'))
    for(let i = 0; i <= steps; i++){
      binaryStep = toBinary(i);
      x = +(binaryStep.charAt(0));
      y = +(binaryStep.charAt(1));
      z = +(binaryStep.charAt(2));
      $('.tabl').append(insertRow(x, y, z, invert(x), invert(x)^y))
    }

/*
x y z
0 0 0
0 0 1
0 1 0
0 1 1
1 0 0
1 0 1
1 1 0
1 1 1 - 7 (10)
*/
