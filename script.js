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
  pin: 9999,
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
  pin: 1010,
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
