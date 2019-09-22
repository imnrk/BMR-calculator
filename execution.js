let bmr = 0;

function clickCounter() {
  // if(typeof(Storage)!==undefined){
  //   if(localStorage.clickcount){
  //     localStorage.clickcount=Number(localStorage.clickcount)+1;
  //   }
  //   else{
  //     localStorage.clickcount=1;
  //   }
  // }
  // document.getElementById("result").innerHTML="You clicked "+localStorage.clickcount+" time(s)";
}

function calc() {
  //sources - w3 schools/stack overflow/calculator.net
  //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show
  //https://www.w3schools.com/tags/tag_select.asp
  //https://www.calculator.net/bmr-calculator.html?ctype=standard&cage=25&csex=m&cheightfeet=5&cheightinch=10&cpound=180&cheightmeter=180&ckg=60&cmop=0&coutunit=c&cformula=m&cfatpct=20&x=55&y=36
  let val = '';
  if (document.getElementById('ml').checked) {
    val =
      document.getElementById('weight').value * 10 +
      (document.getElementById('height').value +
        document.getElementById('inchheight').value * 0.0833) *
        6.25 -
      document.getElementById('age').value * 5 +
      5;
  } else if (document.getElementById('fml').checked) {
    val =
      document.getElementById('weight').value * 10 +
      document.getElementById('height').value * 6.25 -
      document.getElementById('age').value * 5 -
      161;
  }

  let ans = 'BMR : ' + Math.round(val);
  bmr = Math.round(val);

  document.getElementById('bmr').innerHTML = ans;
}
//Hidden information
function calneed() {
  document.getElementById('dropdown').style.display = 'block';
  document.getElementById('exbtn').style.display = 'block';
}
//Expandable Input
function calories() {
  //  console.log(parseFloat(document.getElementById("dropdown").value));
  let ex = parseFloat(document.getElementById('dropdown').value);
  document.getElementById('calorie').innerHTML =
    'Daily Caloric Need is: ' + ex * bmr + ' calories.';
}
//Popover
function exercise_help() {
  alert(
    'Choose an option from the dropdown that best signifies your daily exercise regimen'
  );
}
