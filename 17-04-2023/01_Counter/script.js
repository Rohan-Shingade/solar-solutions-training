function increment () {
  let number = Number(document.getElementById('number').innerHTML); //convert to number bydefault it is in the format of string. writing 'Number' at the start, will convert it into the number & storing it into the number variable
  document.getElementById('number').innerHTML = number+1;
}

function decrement (){
  let number = Number(document.getElementById('number').innerHTML);
  document.getElementById('number').innerHTML = number-1;
}

function neutral () {
  //let number = Number(document.getElementById('number').innerHTML);
  document.getElementById('number').innerHTML = 0;
}