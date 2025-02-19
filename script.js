// CALENDAR JS
let calendar = document.querySelector('.calendar');

const month_names = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

isLeapYear = (year) => {
  return (
    (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  );
};

getFebDays = (year) => {
  return isLeapYear(year) ? 29 : 28;
};

generateCalendar = (month, year) => {
  let calendar_days = calendar.querySelector('.calendar-days');
  let calendar_header_year = calendar.querySelector('#year');

  let days_of_month = [
    31,
    getFebDays(year),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  calendar_days.innerHTML = '';

  let currDate = new Date();
  if (month > 11 || month < 0) month = currDate.getMonth();
  if (!year) year = currDate.getFullYear();

  let curr_month = `${month_names[month]}`;
  month_picker.innerHTML = curr_month;
  calendar_header_year.innerHTML = year;

  // get first day of month

  let first_day = new Date(year, month, 1);

  for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
    let day = document.createElement('div');
    if (i >= first_day.getDay()) {
      day.classList.add('calendar-day-hover');
      day.innerHTML = i - first_day.getDay() + 1;
      day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`;
      if (
        i - first_day.getDay() + 1 === currDate.getDate() &&
        year === currDate.getFullYear() &&
        month === currDate.getMonth()
      ) {
        day.classList.add('curr-date');
      }
    }
    calendar_days.appendChild(day);
  }
};

let month_list = calendar.querySelector('.month-list');

month_names.forEach((e, index) => {
  let month = document.createElement('div');
  month.innerHTML = `<div data-month="${index}">${e}</div>`;
  month.querySelector('div').onclick = () => {
    month_list.classList.remove('show');
    curr_month.value = index;
    generateCalendar(index, curr_year.value);
  };
  month_list.appendChild(month);
});

let month_picker = calendar.querySelector('#month-picker');

month_picker.onclick = () => {
  month_list.classList.add('show');
};

let currDate = new Date();

let curr_month = { value: currDate.getMonth() };
let curr_year = { value: currDate.getFullYear() };

generateCalendar(curr_month.value, curr_year.value);

document.querySelector('#prev-year').onclick = () => {
  --curr_year.value;
  generateCalendar(curr_month.value, curr_year.value);
};

document.querySelector('#next-year').onclick = () => {
  ++curr_year.value;
  generateCalendar(curr_month.value, curr_year.value);
};

//FOR CALCULATOR

const screen = document.getElementById('screen');
screen.value = 0;
document.querySelector('#one').addEventListener('click', function () {
  screen.textContent += 1;
});
document.querySelector('#two').addEventListener('click', function () {
  screen.textContent += 2;
});
document.querySelector('#three').addEventListener('click', function () {
  screen.textContent += 3;
});
document.querySelector('#four').addEventListener('click', function () {
  screen.textContent += 4;
});
document.querySelector('#five').addEventListener('click', function () {
  screen.textContent += 5;
});
document.querySelector('#six').addEventListener('click', function () {
  screen.textContent += 6;
});
document.querySelector('#seven').addEventListener('click', function () {
  screen.textContent += 7;
});
document.querySelector('#eight').addEventListener('click', function () {
  screen.textContent += 8;
});
document.querySelector('#nine').addEventListener('click', function () {
  screen.textContent += 9;
});
document.querySelector('#zero').addEventListener('click', function () {
  screen.textContent += 0;
});
document.querySelector('#plus').addEventListener('click', function () {
  screen.textContent += '+';
});
document.querySelector('#minus').addEventListener('click', function () {
  screen.textContent += '-';
});
document.querySelector('#multiply').addEventListener('click', function () {
  screen.textContent += '*';
});
document.querySelector('#divide').addEventListener('click', function () {
  screen.textContent += '/';
});
document.querySelector('#decimal').addEventListener('click', function () {
  screen.textContent += '.';
});
document.querySelector('#equals').addEventListener('click', function () {
  let answer = eval(screen.textContent);
  screen.textContent = answer;
});
document.querySelector('#clear').addEventListener('click', function () {
  screen.textContent = null;
});

//FOR MODAL
const calendarmodal = document.querySelector('.calendar-modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenCalendar = document.querySelector('#calendar-button');

const openModalCalendar = function () {
  calendarmodal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalCalendar = function () {
  calendarmodal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnOpenCalendar.addEventListener('click', openModalCalendar);
btnCloseModal.addEventListener('click', closeModalCalendar);
overlay.addEventListener('click', closeModalCalendar);

const calculatormodal = document.querySelector('.calculator-modal');
const btnOpenCalculator = document.querySelector('#calculator-button');

const openModalCalculator = function () {
  calculatormodal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModalCalculator = function () {
  calculatormodal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnOpenCalculator.addEventListener('click', openModalCalculator);
overlay.addEventListener('click', closeModalCalculator);
//
//
//

////
//
//
//
// ABCBCBCABBCABCABCBACB

var x, i, j, l, ll, selElmnt, a, b, c, hehe, hehep;
/* Look for any elements with the class "custom-select": */
hehep = document.querySelector('#mainp');
x = document.getElementsByClassName('custom-select');
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName('select')[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement('DIV');
  a.setAttribute('class', 'select-selected');
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement('DIV');
  b.setAttribute('class', 'select-items select-hide');
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement('DIV');
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener('click', function (e) {
      /* When an item is clicked, update the original select box,
        and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName('select')[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName('same-as-selected');
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute('class');
          }
          this.setAttribute('class', 'same-as-selected');
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener('click', function (e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle('select-hide');
    hehep.classList.toggle('hidden');
    this.classList.toggle('select-arrow-active');
  });
}
function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName('select-items');
  y = document.getElementsByClassName('select-selected');
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove('select-arrow-active');
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add('select-hide');
    }
  }
}

//

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener('click', closeAllSelect);

//
//
//
//
//
//
//
//

const selectedElement = document.querySelector('#areas');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', function () {
  if (selectedElement.value == 'default') {
    alert('Please Select Your Area');
  }
});
