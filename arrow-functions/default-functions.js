function calculateBill(total, tax = 0.13, tip = 0.15) {
  return total + (total * tax) + (total * tip);
}

const totalBill = calculateBill(100, null, 0.25);
console.log(totalBill);

// old syntax ==
function makeAjaxRequest(url, method) {
  if (!method) {
    method = 'GET';
  }

  // logic to make the request
}

// ES6
function makeAjaxRequest(url, method = 'GET') {
  return method;

  // logic to make the request
}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'POST');

// ===

function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 999999;
}

function createAdminUser() {
  user.admin = true;
  return user;
}

createAdminUser(new User(generateId()));



// === ES6

function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 999999;
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;
  return user;
}

const user = new User(generateId());
createAdminUser();

