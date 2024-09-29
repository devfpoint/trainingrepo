let food1;
let food2;
let food3;

function foodTotal () {
     food1 = parseFloat(document.getElementById('food1').value);
     food2 = parseFloat(document.getElementById('food2').value);
     food3 = parseFloat(document.getElementById('food3').value);

     let foodSum = (food1+food2+food3)
     document.getElementById('result').innerText = `Total cost of food is: ${foodSum}`;

}