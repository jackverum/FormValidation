'use strict'
		// let work;
		// function don(text) {
		// 	console.log(text);
		// }
		// function keepCodding() {
		// 	// work = true
		// 	console.log('Work more');
		// }
		
		// if (!work) {keepCodding()}
		// else {don(`t touch`)}

const form = document.getElementById('form');
				const mainForm = document.forms["form"];
				// console.log(mainForm.formEmail);
				// console.log(mainForm.formSecondEmail);
				// const small = document.querySelectorAll('small');
				// const small = document.querySelector('small');
				const formName = document.getElementById('formName');
				const formSecondName = document.getElementById('formSecondName');
				const formPhone = document.getElementById('formPhone');
				const formPhoneConfirm = document.getElementById('formPhoneConfirm');
				const formEmail = document.getElementById('formEmail');
				const formSecondEmail = document.getElementById('formSecondEmail');
				
				const formRegion = document.getElementById('formRegion');
				const formStreet = document.getElementById('formStreet');
				const formIndex = document.getElementById('formIndex');
				const formPostAdress = document.getElementById('formPostAdress');
				
				const formAgreement = document.getElementById('formAgreement');
				const radioMesseging = document.querySelectorAll('input[type=radio]');
				console.log(radioMesseging.checked);
				

				const formDevice = document.getElementById('formDevice');
				const formBrand = document.getElementById('formBrand');
				const modelname = document.getElementById('modelname');
				const formCode = document.getElementById('formCode');
				const formSerial = document.getElementById('formSerial');
				const formDate = document.getElementById('formDate');
				const formShopname = document.getElementById('formShopname');
				const formImage = document.getElementById('formImage');


				const formDeviceForm = document.querySelector('.form__device');
				let sel = formDeviceForm.querySelectorAll('select');
				let inp = formDeviceForm.querySelectorAll('input');
// document.addEventListener('DOMContentLoaded', function () {
		
	for(let i = 0; i < sel.length; i++) {
		console.log(sel[i].disabled = true);
		sel[i].style.border = '1px solid gray';
		
		// console.log(inp[i].setAttribute('disabled'));
	}
	for(let i = 0; i < inp.length; i++) {
		console.log(inp[i].disabled = true);
		if (inp[i].getAttribute('type') === 'file') {
			continue
		} else {
			inp[i].style.border = '1px solid gray';
		}
		// console.log(inp[i].setAttribute('disabled'));
	}
				
	form.addEventListener('submit', formSend);
	formAgreement.addEventListener('change', checkBoxConfirm);
	
	function showSuccess(input) {
			input.parentElement.classList.remove('_error');
			input.classList.remove('_error');
	}
	function showError(input, message) {
		const formControl = input.parentElement;
		formControl.classList.add('_error');
		// input.classList.add('_error');
		// input.parentElement.classList.add('_error');
		// input.classList.add('_error');
		let small = formControl.querySelector('small');
		for(let i = 0; i < input.length; i++) {
				if (input[i].getAttribute('type') === 'file') {
						continue
				}
				small.innerHTML = message;
		}
	}

	function checkMatchInputs(phoneNum_1, phoneNum_2) {
		// console.log(phoneNum_1.value, phoneNum_2.value);
		if (phoneNum_1.value !== phoneNum_2.value) {
				// alert('dont match')
				return showError(phoneNum_2);
		} 
	}


	function checkEmail(email_1) {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		// console.log('EMAIL', re.test(email_2.value.trim()));
		if(re.test(email_1.value.trim())) {
					return showSuccess(email_1);
		} else {
				// formSecondEmail.nextElementSibling.innerHTML = "Пошта 2 не співпадає з 1";
				// debugger
				// email_1.parentElement.classList.add('_error');
				// email_1.classList.add('_error');
				// small.innerHTML = email_1.id.charAt(0).toUpperCase() + email_1.id.slice(1);
				// small.innerHTML = '123';
				return showError(email_1, `Пошта 2 не співпадає з 1`);
		}
	}




				// function checkEmail(email_2) {
				// 	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				// 	console.log('EMAIL', re.test(email_2.value.trim()));
				// 	if(re.test(email_1.value.trim())) {
				// 	}
				// }

				// const validateEmail = (input) => {
				// 	console.log(input.value);
				// 	const re =
				// 		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				// 	if (!re.test(String(input.value).toLowerCase())) return input;
				// 	console.log(input);
				// 	return false;
				// };

function checkRequired(itemArr) {
// console.log(itemArr);
	
	itemArr.forEach(function(input) {
// console.log(input.checked);
			if(input.value.trim() === '') {
					showError(input, 'Незаповнене поле *');
							// small.className = '_error';
			} else {
					showSuccess(input);
			}
			// if(!this.form.checkbox.checked)
			// {
			// 	alert('You must agree to the terms first.');
			// 	return false;
			// }
		})
	}

	function checkBoxConfirm(params) {
		console.log(radioMesseging.checked);

		for(let i = 0; i < radioMesseging.length; i++) {
			console.log(radioMesseging[i].checked);
			if(radioMesseging[i].checked) {
				// if(!formAgreement.checked) {
					alert("CH B")
					// console.log(formDevice.closest('.form__device'));
					// console.log(formDevice.getAttribute('div'));
					// let inp = formDevice.getElementsByTagName('select');
					console.log(inp);
					// inp.forEach(inp => inp.setAttributeNode('disabled'));
		
					for(let i = 0; i < sel.length; i++) {
						console.log(sel[i].disabled = true);
						sel[i].style.border = '1px solid gray';
						showError(sel[i], 'Активуйте чекбокс *');
						// console.log(inp[i].setAttribute('disabled'));
					}
					for(let i = 0; i < inp.length; i++) {
						console.log(inp[i].disabled = true);
						showError(inp[i], 'Активуйте чекбокс *');
						
						if (inp[i].getAttribute('type') === 'file') {
							continue
						} else {
							inp[i].style.border = '1px solid gray';
						}
						// console.log(inp[i].setAttribute('disabled'));
					}
					// let arr = [].slice(inp).map(function (node) {
					// 	return node;
					// });
					// console.log(arr);
					// console.log([].slice(inp).map(function (node) {
					// 	return node;
					// }));
				} else if (radioMesseging[i].checked) {
				// } else if (formAgreement.checked || radioMesseging.checked) {
					alert('CB - Good')
					for(let i = 0; i < sel.length; i++) {
						console.log(sel[i].disabled = false);
						sel[i].style.border = '1px solid gray';
						showError(sel[i], 'Активуйте чекбокс *');
						// console.log(inp[i].setAttribute('disabled'));
					}
					for(let i = 0; i < inp.length; i++) {
						console.log(inp[i].disabled = false);
						showError(inp[i], 'Активуйте чекбокс *');
						
						if (inp[i].getAttribute('type') === 'file') {
							continue
						} else {
							inp[i].style.border = '1px solid gray';
						}
						// console.log(inp[i].setAttribute('disabled'));
					}
				}
		}

	
	}
	
	
	function formSend(e) {
		// async function formSend(e) {
		e.preventDefault();
		
	console.log(radioMesseging);
	// console.log(formName.value);
	// console.log(formDevice.value);
	// console.log(formBrand.value);
	// console.log(modelname.value);
	console.log();
	checkRequired([
					formName, formSecondName, formPhone, 
					formPhoneConfirm, formEmail, formSecondEmail,
					formDevice, formBrand, modelname,
					formCode, formSerial, formDate, 
					formShopname, formImage, 
					formRegion, formStreet, formIndex, formPostAdress,
					formAgreement 				
			]);
	checkMatchInputs(formPhone, formPhoneConfirm);
	checkEmail(formEmail);
	checkEmail(formSecondEmail);
	checkMatchInputs(formEmail, formSecondEmail);
	
	// checkEmail(formEmail, formSecondEmail);
	
	// validateEmail(formEmail)
	// validateEmail(formSecondEmail)

} // formSend(e)
// }) // DOMContentLoaded





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