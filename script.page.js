'use strict'



document.addEventListener('DOMContentLoaded', function () {
		const form = document.getElementById('form');
		// const small = document.querySelectorAll('small');
		const small = document.querySelector('small');
		const formName = document.getElementById('formName');
		const formSecondName = document.getElementById('formSecondName');
		const formPhone = document.getElementById('formPhone');
		const formPhoneConfirm = document.getElementById('formPhoneConfirm');
		const formEmail = document.getElementById('formEmail');
		const formSecondEmail = document.getElementById('formSecondEmail');


		const formDevice = document.getElementById('formDevice');
		const formBrand = document.getElementById('formBrand');
		const modelname = document.getElementById('modelname');
		const formCode = document.getElementById('formCode');
		const formSerial = document.getElementById('formSerial');
		const formDate = document.getElementById('formDate');
		const formShopname = document.getElementById('formShopname');
		const formImage = document.getElementById('formImage');
		
		
		
		
		




		
		form.addEventListener('submit', formSend);
		
		function showSuccess(input) {
			input.parentElement.classList.remove('_error');
			input.classList.remove('_error');
		}
		function showError(input) {
			input.parentElement.classList.add('_error');
			input.classList.add('_error');
		}
		function checkPhoneMatch(phoneNum_1, phoneNum_2) {
			console.log(phoneNum_1.value, phoneNum_2.value);
			if (phoneNum_1.value !== phoneNum_2.value) {
				alert('dont match')
				return showSuccess(phoneNum_2);
			} else {
				alert('GOOOD')
			}

		}

		function checkEmail(email_1, email_2) {
			const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if(re.test(email_1.value.trim())) {
				if (email_1.value !== email_2.value) {
					return showError(email_1)
				} else {
					return showSuccess(email_1);
				}
			} else {
				return showError(email_1);
			}
		}


		function checkRequired(itemArr) {
				// console.log(itemArr);

				itemArr.forEach(function(input) {
						if(input.value.trim() === '') {
							showError(input);
								// small.className = '_error';
						} else {
							showSuccess(input);
						}
				})
		}
		
		
		function formSend(e) {
		// async function formSend(e) {
				e.preventDefault();
				
				console.log(formName.value);
				console.log(formDevice.value);
				console.log(formBrand.value);
				console.log(modelname.value);
				console.log();
				checkRequired([
						formName, formSecondName, formPhone, 
						formPhoneConfirm, formEmail, formSecondEmail,
						formDevice, formBrand, modelname,
						formCode, formSerial, formDate, 
						formShopname, formImage, 				
					]);
				checkPhoneMatch(formPhone, formPhoneConfirm);
				checkEmail(formEmail, formSecondEmail);

				

				
				



		} // formSend(e)
}) // DOMContentLoaded

function onSubmit(token) {
		document.getElementById("demo-form").submit();
	}


	/*
	let error = formValidate(form);
				if (error === 0) {
				} else {
						alert("Запаолните обязательные поля!")
				}

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
						// small.innerHTML = 'dsdd'
						small.forEach(item => {
								item.className = '_error';

						})
				}
				function formRemoveError(input) {
						input.parentElement.classList.remove('_error');
						input.classList.remove('_error');
						// const small = document.querySelector('small');
						// small.className = "";
						small.forEach(item => {
								item.className = '';

						})
				}

	*/