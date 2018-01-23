document.addEventListener('DOMContentLoaded', function() {

  const inputs = document.querySelectorAll('.controls input');

  function handleUpdate() {
    const suffix = this.dataset.sizing || ''; // dataset is a list of all the data- in an object to be called and '' is for anything that doesnt have a suffix
    console.log(this.suffix);

    //selecting a variable, get the document and set a property(variable) and then append suffix that we grabbed from the data- tag 
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)

  }

  inputs.forEach(input => input.addEventListener('change', handleUpdate));
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


}, false);
