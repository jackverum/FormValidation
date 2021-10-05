'use strict'

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    console.log(form);
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);
        let formData = new FormData(form);
        console.log(formData);
        formData.append('image', formImage.files[0]);

        if(error === 0) {
            form.classList.add('_sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if(response.ok) {
                let result = await response.json();
                alert(result.message);
                console.log(result);
                formPreview.innerHTML = '';
                form.reset();
                form.classList.remove('_sending');
            } else {
                alert('Ошибка');
                form.classList.remove('_sending');
            }

        } else {
            alert('Заполните обязательные поля!')
        }
    }

// formValidate()
    function formValidate(form) {
        let error = 0;
        let formRequire = document.querySelectorAll('._require');

         for (let i = 0; i < formRequire.length; i++) {
             const input = formRequire[i];
             
             formRemoveError(input);

             if(input.classList.contains('_email')) {
                if(emailTest(input)) {
                    formAddError(input);
                    error++;
                }
             } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
                formAddError(input);
                error++;
             } else {
                 if(input.value === '') {
                     formAddError(input);
                     error++;
                    }
                }
            }
             return error;
    }
    function formAddError(input) {
        console.log(input);
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    // Function for testing EMAIL
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    // Получаем инпут  file в переменную
    const formImage = document.getElementById('formImage');
    // Получаем див для превью в переменную
    const formPreview = document.getElementById('formPreview');

    formImage.addEventListener('change', () => {
        uploadFile(formImage.files[0]);
    })

    function uploadFile(file) {
        if(!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
            alert('Разрешены только изображения.');
            formImage.value = '';
            return;
        }
        if(file.size > 2 * 1024 * 1024) {
            alert('Файл должен быть менее 2 Мб');
            return;
        }

        let reader = new FileReader();
        reader.onload = function(e) {
            console.log(e);
            formPreview.innerHTML = `<img src="${e.target.result}" alt="Foto">`;
        };
        reader.onerror = function(e) {
            alert('Ошибка');
        }
        reader.readAsDataURL(file);
    }

    


});