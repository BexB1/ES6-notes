// You can pass variables into the template string using ${}

var name = 'Bex';

const p1 = document.querySelector('#p1')
p1.innerHTML = `Hey there, ${name}!`;

// You can use HTML and ternary operators in template strings

const person = {
  id: 1,
  name: `Bex`
}

const markup = `
  <div>
    <p>
      <h2>ID:</h2> ${person.id}
      <h3>NAME:</h3> ${person.name}
      ${person.greeting ? `<h4>SAYS:</h4> ${person.greeting}` : ''}
    </p>
  </div>
`;

p1.innerHTML = markup;

// Template tagging

function highlight(strings, ...values) {
  let str = '';
  strings.forEach((string, i) => {
    // str += string + (values[i] || '');
    str += `${string} <span contenteditable class="h1">${values[i] || ''}</span>`;
  });
  return str;
}

const fullName = 'Ada Lovelace';
const age = 40;
const sentence = highlight`My name is ${fullName} and I am ${age} years old.`;
p1.innerHTML = sentence;
