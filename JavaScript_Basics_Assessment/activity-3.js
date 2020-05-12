let names = ["Tim", "Jonesy", "Sally"];

for (let i = 0; i < 3; i++){
let temp = prompt('Please enter a name: ');
  names.push(temp);
}

for (let i = 0; i < 6; i++){
  console.log (names[i]);
}