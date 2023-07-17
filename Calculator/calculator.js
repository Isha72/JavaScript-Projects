let calculation = localStorage.getItem('calculation') || '';
display();

function update(val)
{
  calculation += val;
  display();
  localStorage.setItem('calculation', calculation);
}

function display()
{
  document.querySelector('.result').
  innerHTML = calculation;
}
