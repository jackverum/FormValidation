function Validator(setting) {
    console.log(setting.id);
// debugger
    var formEl = document.getElementById(setting.id);
    let formFields = formEl.elements;
    console.log(formFields);

    let showError = function(el) {
        el.parentNode.classList.remove('success');
        el.parentNode.classList.add('error');
        el.nextElementSibling.innerHTML = el.dataset.error;
    }
    let showSuccess = function(el) {
        el.parentNode.classList.remove('error');
        el.parentNode.classList.add('success');
        el.nextElementSibling.innerHTML = '';
    }
    // console.log(formEl.elements);


    let checkIt = function() {
       // определить правила проверки
        
    }
    // init here
    for(let i = 0; i < formFields.length; i++) {
        if (formFields[i].tagName === 'BUTTON') {
            continue
        }
        formFields[i].addEventListener('change', checkIt)
    }



}