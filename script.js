'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  hasExistingLoan: false,
  loanAmountValue: 0,
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  hasExistingLoan: false,
  loanAmountValue: 0,
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  hasExistingLoan: false,
  loanAmountValue: 0,
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  hasExistingLoan: false,
  loanAmountValue: 0,
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};
const account5 = {
  owner: 'Judah Aderonmu',
  movements: [10000, 7000, 1700, 500, 900],
  hasExistingLoan: false,
  loanAmountValue: 0,
  interestRate: 5,
  pin: 5555,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-12-25T06:04:23.907Z',
    '2022-10-02T16:33:06.386Z',
    '2022-10-07T18:49:59.371Z',
    '2022-10-09T12:01:20.894Z',
  ],
  currency: 'NGN',
  locale: 'en-NG',
};

const account6 = {
  owner: 'Isaac Aderonmu',
  movements: [8000, 3000, 600, -500, 1900, -600],
  hasExistingLoan: false,
  loanAmountValue: 0,
  interestRate: 1.5,
  pin: 6666,
  movementsDates: [
    '2018-03-03T23:00:00.000Z',
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'NGN',
  locale: 'en-NG',
};

const account7 = {
  owner: 'Tito Ayodeji',
  movements: [
    10000000, 5000000, 2000000, 1000000, 800000, 300000, 600, -500, 1900, -600,
  ],
  hasExistingLoan: false,
  loanAmountValue: 0,
  interestRate: 1.0,
  pin: 7777,
  movementsDates: [
    '2018-03-03T23:00:00.000Z',
    '2018-03-19T23:00:00.000Z',
    '2018-04-19T23:00:00.000Z',
    '2018-05-19T23:00:00.000Z',
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-07-26T12:01:20.894Z',
    '2021-08-17T23:00:00.000Z',
  ],
  currency: 'USD',
  locale: 'en-NG',
};
const account8 = {
  owner: 'Olabisi Aderonmu',
  movements: [1000, 5000, 2000, 1000, 800, 3000, 600, -500, 1900, -600],
  hasExistingLoan: false,
  loanAmountValue: 0,
  interestRate: 1.0,
  pin: 8888,
  movementsDates: [
    '2018-03-03T23:00:00.000Z',
    '2018-03-19T23:00:00.000Z',
    '2018-04-19T23:00:00.000Z',
    '2018-05-19T23:00:00.000Z',
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-07-26T12:01:20.894Z',
    '2021-08-17T23:00:00.000Z',
  ],
  currency: 'NGN',
  locale: 'en-NG',
};
const account9 = {
  owner: 'Chibuzor Ibekwe',
  movements: [1000, 5000, 2000, 1000, 800, 3000, 600, -500, 1900, -600],
  hasExistingLoan: false,
  loanAmountValue: 0,
  interestRate: 1.0,
  pin: 8888,
  movementsDates: [
    '2018-03-03T23:00:00.000Z',
    '2018-03-19T23:00:00.000Z',
    '2018-04-19T23:00:00.000Z',
    '2018-05-19T23:00:00.000Z',
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-07-26T12:01:20.894Z',
    '2021-08-17T23:00:00.000Z',
  ],
  currency: 'NGN',
  locale: 'en-NG',
};

const account10 = {
  owner: 'Olisa Maduegbuna',
  movements: [1000, 5000, 2000, 1000, 800, 3000, 600, -500, 1900, -600],
  hasExistingLoan: false,
  loanAmountValue: 0,
  interestRate: 1.0,
  pin: 8888,
  movementsDates: [
    '2018-03-03T23:00:00.000Z',
    '2018-03-19T23:00:00.000Z',
    '2018-04-19T23:00:00.000Z',
    '2018-05-19T23:00:00.000Z',
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-07-26T12:01:20.894Z',
    '2021-08-17T23:00:00.000Z',
  ],
  currency: 'NGN',
  locale: 'en-NG',
};

const account11 = {
  owner: 'Semilogo Osunderu',
  movements: [1000, 5000, 2000, 1000, 800, 3000, 600, -500, 1900, -600],
  hasExistingLoan: false,
  loanAmountValue: 0,
  interestRate: 1.0,
  pin: 1101,
  movementsDates: [
    '2018-03-03T23:00:00.000Z',
    '2018-03-19T23:00:00.000Z',
    '2018-04-19T23:00:00.000Z',
    '2018-05-19T23:00:00.000Z',
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-07-26T12:01:20.894Z',
    '2021-08-17T23:00:00.000Z',
  ],
  currency: 'NGN',
  locale: 'en-NG',
};

const accounts = [
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
  account7,
  account8,
  account9,
  account10,
  account11,
];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const headingLoan = document.querySelector('.loan__heading');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const containerMovementsLoan = document.querySelector('.movements__type--loan');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // // 1 is added to getMonth because months are stored as arrays on javascript and are therefore zero based
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};
const numberConverter = function (mov) {
  const movements = mov.map(mov => +mov);
  return movements;
};

const formattedCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(+value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  let type;
  movs.forEach(function (mov, i) {
    if (typeof mov === 'number') {
      type = mov > 0 ? 'deposit' : 'withdrawal';
    } else if (typeof mov === 'string') {
      type = +mov > 0 ? 'loan' : 'loan Paid';
    }
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formattedCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div> 
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((accum, mov) => accum + +mov, 0);
  labelBalance.textContent = formattedCur(
    acc.balance,
    acc.locale,
    acc.currency
  );
};

const calcDisplaySummary = function (acc) {
  const movements = numberConverter(acc.movements);
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formattedCur(incomes, acc.locale, acc.currency);

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formattedCur(out, acc.locale, acc.currency);

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formattedCur(
    interest,
    acc.locale,
    acc.currency
  );
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const toggleLabelLoan = function (acc) {
  if (acc.hasExistingLoan === false) {
    headingLoan.textContent = `Request loan`;
  } else {
    headingLoan.textContent = `Repay loan--${acc.loanAmountValue}`;
  }
};

/**
 * update ui
 * @param {*} acc
 */
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);

  toggleLabelLoan(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // when 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    //decrease time
    time--;
  };

  // set time to 5 minutes
  let time = 600;

  // call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

///////////////////////////////////////
// Event handlers
/**
 * current account
 * used to track the current user
 */
let currentAccount, timer;

const currencies = {
  EUR: 'Euro',
  USD: 'United States Dollar',
  NGN: 'Nigerian Naira',
};

//implementing a currency converter feauture
const currencyConverter = function (fromCur, toCur, amount) {
  const conversionRates = { USD: 1, EUR: 1.0268, NGN: 434.28 };

  let fromRate = conversionRates[fromCur];
  let toRate = conversionRates[toCur];
  return ((toRate / fromRate) * amount).toFixed(2);
};

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //create current date and time based on users locale
    const now = new Date();
    const options = {
      year: 'numeric',
      month: 'numeric', //'long', i.e 'August'
      // weekday:'short', //i.e 'wed' or 'thu'
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);

    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    inputLoanAmount.value = '';

    // Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);

    //converting the currency before transfer,
    const convAmount = +currencyConverter(
      currentAccount.currency,
      receiverAcc.currency,
      amount
    );
    //the '+' operator in the code above converts convAmount which is returned as a string to a number
    receiverAcc.movements.push(convAmount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +inputLoanAmount.value;

  if (
    currentAccount.hasExistingLoan === false &&
    amount > 0 &&
    currentAccount.movements.some(mov => mov >= amount * 0.1)
  ) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(`${amount}`);

      // Add Loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      currentAccount.loanAmountValue = amount + amount / 10;
      currentAccount.hasExistingLoan = true;

      // Update UI
      updateUI(currentAccount);
    }, 3000);
    clearInterval(timer);
    timer = startLogOutTimer();
  }
  if (
    currentAccount.balance >= amount &&
    amount >= currentAccount.loanAmountValue &&
    currentAccount.hasExistingLoan === true
  ) {
    currentAccount.movements.push(`${-currentAccount.loanAmountValue}`);
    currentAccount.movementsDates.push(new Date().toISOString());

    currentAccount.hasExistingLoan = false;
    currentAccount.loanAmountValue = 0;
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin &&
    currentAccount.hasExistingLoan === false
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

////////////////////////////////////////////////
// Converting and Checking numbers
/*
console.log(23 === 23.0);

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

//conversion
console.log(Number('23'));
console.log(+'23');
console.log(+'45' + +'56');

//parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseFloat('2e3e', 10));

console.log(Number.parseInt('2.5rem'));
console.log(Number.parseFloat('2.5rem'));

//checking numbers
// for NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));
//for number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));
//for integer
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23.5));
*/

///////////////////////////////////////////////
// Math and Rounding
/*
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));

console.log(Math.max(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 20));

// Rounding Integers
console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.round(23.8));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.8));

console.log(Math.floor(23.3));
console.log(Math.floor('23.8'));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));
*/

//////////////////////////////////////////////
// The Remainder Operator
/*
console.log(5 % 2);
console.log(5 / 2);

console.log(8 % 3);
console.log(8 / 3);

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

labelWelcome.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 2 !== 0) row.style.backgroundColor = 'blue';
  });
});
*/

//////////////////////////////////////////////
// Numeric Separators
/*
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const pi = 3.1415;
console.log(pi);

console.log(Number('230_000'));
console.log(parseInt('230_000'));
*/

//////////////////////////////////////////////
// Working with BigInt
/*
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(17676498067056385689567567545765109767645n);
console.log(BigInt(17676498067056385689567567545765109767645));

// Operations
console.log(10000n + 10000n);
console.log(9801672159869890256757861867n * 10000000n);
//console.log(Math.sqrt(16n));

const huge = 529867861579709617816896n;
const num = 23;
console.log(huge * BigInt(num));

// Exceptions
//Logical operators
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == '20');

// Contacenation
console.log(huge + ' is really big!!');

// Divisions
console.log(11n / 3n);
console.log(10 / 3);
*/

/////////////////////////////////////////////
// Creating Dates
/*
const now = new Date();
console.log(now);

console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

//working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142253380000));

console.log(Date.now());
future.setFullYear(2040);
console.log(future);
*/

/////////////////////////////////////////////
// Operations with Dates
/*
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);
*/

////////////////////////////////////////////
// Internationalizing Numbers (Intl)
/*
const num = 3745256.67;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'GBP',
  // useGrouping: false,
};

console.log('GBR:  ', new Intl.NumberFormat('en-GB', options).format(num));
console.log('Germany:  ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria:  ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);
*/

///////////////////////////////////////////
// Timers: setTimeout and setInterval
/*
// setTimeout
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza 🍕 with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);
console.log('waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

//setInterval
setInterval(function () {
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  console.log(hour, minutes, seconds);
}, 1000);
*/
