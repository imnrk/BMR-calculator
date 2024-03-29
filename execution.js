let bmr = 0;

//Calculate the BMR
function calc() {
  if (localStorage.usercount > 1) {
    document.getElementById('caloricneedbtn').style.display = 'block';
  }

  document.getElementById('featuredcontent').style.display = 'none';
  document.getElementById('featuredcontent').style.display = 'none';
  document.getElementById('hint').style.display = 'none';
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

//Calculate Daily calorific need
function calneed() {
  document.getElementById('featuredcontent').style.display = 'none';
  document.getElementById('featuredcontent1').style.display = 'none';
  document.getElementById('dropdown').style.display = 'block';
  if (localStorage.usercount >= 5) {
    document.getElementById('exbtn').style.display = 'block';
  }
  if (localStorage.usercount >= 10) {
    document.getElementById('settingsbtn').style.display = 'block';
  }
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
    '(Hint: Please enter age(in years), height(feet/inches), weight(pounds))';
}

function showphyactivity() {
  document.getElementById('phy').innerHTML = 'Enter physical activity';
}

//Overflow Menu -Focus Pattern
function overflowmenu() {
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
  if (localStorage.usercount > 1) {
    document.getElementById('caloricneedbtn').style.display = 'block';
  }
  document.getElementById('featuredcontent').style.display = 'none';
  document.getElementById('featuredcontent1').style.display = 'none';
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
  if (localStorage.usercount == 1)
    document.getElementById('stepheight').style.display = 'block';
}

function heightinput() {
  document.getElementById('stepheight').style.display = 'none';
  if (localStorage.usercount == 1)
    document.getElementById('stepweight').style.display = 'block';
}

function weightinput() {
  document.getElementById('stepweight').style.display = 'none';
  if (localStorage.usercount == 1)
    document.getElementById('stepbutton').style.display = 'block';
}

function buttoninput() {
  document.getElementById('stepbutton').style.display = 'none';
}

//Default values

function changeage() {
  let age = document.getElementById('age').value;
  if (age <= 25) {
    document.getElementById('defaultval').innerHTML =
      'Your age indicates tendency of higher BMR';
  } else {
    document.getElementById('defaultval').innerHTML =
      'Your age indicates tendency of lower BMR';
  }
}

//Onload startup
function myStartup() {
  /* alert("Hello World"); */
  console.log(localStorage.usercount);
  if (typeof Storage !== 'undefined') {
    if (isNaN(localStorage.usercount)) localStorage.usercount = 0;
    else localStorage.usercount++;
  } else alert('No Local Storage');

  uc = 'User Count ' + localStorage.usercount;

  if (typeof Storage !== 'undefined') {
    usercount = localStorage.usercount;
    if (usercount == 0) {
      document.getElementById('caloricneedbtn').style.display = 'none';
    }
    if (usercount > 0 && usercount < 5) {
    }
    if (usercount >= 5 && usercount < 10) {
      /* show the hide button (for hidden information pattern) */
      document.getElementById('infobtn').style.display = 'block';
    }
    if (usercount >= 10) {
      /* show the hide button (for hidden information pattern) */
      document.getElementById('infobtn').style.display = 'block';
      document.getElementById('featuredcontent').style.display = 'block';
      document.getElementById('featuredcontent1').style.display = 'block';
    }
  }
}

//Inline validation
function inline_validation(x) {
  var val = document.getElementById(x).value;
  if (isNaN(val)) {
    alert(x + ' should be a number');
  }
}
