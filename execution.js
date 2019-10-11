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
  buttoninput();
}

//Hidden information - Focus pattern
function calneed() {
  document.getElementById('dropdown').style.display = 'block';
  document.getElementById('exbtn').style.display = 'block';
  document.getElementById('settingsbtn').style.display = 'block';
  buttoninput();
}

//Expandable Input - Focus pattern
function calories() {
  //  console.log(parseFloat(document.getElementById("dropdown").value));
  let ex = parseFloat(document.getElementById('dropdown').value);
  document.getElementById('calorie').innerHTML =
    'Daily Caloric Need is: ' + ex * bmr + ' calories.';
}

//Popover - Help pattern
function exercise_help() {
  alert(
    'Choose an option from the dropdown that best signifies your daily exercise regimen'
  );
}

//inputhints - Help pattern
function inputhint() {
  document.getElementById('hint').innerHTML =
    'Please choose an option from dropdown that describes your physical activity';
}

//Overflow Menu -Focus Pattern
function overflowmenu() {
  //https://stackoverflow.com/questions/362614/calling-onclick-on-a-radiobutton-list-using-javascript
  let x = document.getElementById('calorie').innerHTML;
  x = parseFloat(x.split(' ')[4]);
  var joules = x * 4.184;
  var kcal = x * 0.001;
  var sj = document.getElementById('setjoule').checked;
  var sk = document.getElementById('setkcal').checked;
  var text = 'Daily need in ';
  if (sj) {
    text += 'joules is ' + joules + ' joules';
  } else if (sk) {
    text += 'kcal is ' + kcal + ' Kcal';
  }

  document.getElementById('convertedcalorie').innerHTML = text;
}

function getoverflowmenu() {
  document.getElementById('convert').style.display = 'block';
  document.getElementById('convertbtn').style.display = 'block';
}

//Wizard - Focus pattern
function wizardcalc() {
  document.getElementById('age').value = 25;
  document.getElementById('height').value = 6;
  document.getElementById('weight').value = 120;
  let val =
    document.getElementById('weight').value * 10 +
    (document.getElementById('height').value +
      document.getElementById('inchheight').value * 0.0833) *
      6.25 -
    document.getElementById('age').value * 5 +
    5;
  let ans = 'BMR : ' + Math.round(val);
  bmr = Math.round(val);

  document.getElementById('bmr').innerHTML = ans;
  buttoninput();
}

//Coachmarks - Focus pattern
function ageinput() {
  document.getElementById('stepage').style.display = 'none';
  document.getElementById('stepheight').style.display = 'block';
}

function heightinput() {
  document.getElementById('stepheight').style.display = 'none';
  document.getElementById('stepweight').style.display = 'block';
}

function weightinput() {
  document.getElementById('stepweight').style.display = 'none';
  document.getElementById('stepbutton').style.display = 'block';
}

function buttoninput() {
  document.getElementById('stepbutton').style.display = 'none';
}
