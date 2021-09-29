'use strict'

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    
    form.addEventListener('submit', formSend);
    
    async function formSend(e) {
        e.preventDefault();
        
        console.log(form);

        let error = formValidate(form);



        function formValidate(form) {
            let error = 0;
            let formRequire = document.querySelectorAll('._require');

            for (let i = 0; i < formRequire.length; i++) {
                const input = formRequire[i];
                // console.log(input);
                formRemoveError(input)
                
                if(input.classList.contains('_email')) {

                }
                if(input.value === '') {
                    formAddError(input);
                }



            }
            return error;
        }

        function formAddError(input) {
            input.parentElement.classList.add('_error');
            input.classList.add('_error');
        }
        function formRemoveError(input) {
            input.parentElement.classList.remove('_error');
            input.classList.remove('_error');
        }


    }
})