'use strict'
	
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

const form–°onfidentiality = document.getElementById('form__confidentiality');
const formAgreement = document.getElementById('formAgreement');
const radioMesseging = document.querySelectorAll('input[type="radio"]');
console.log(radioMesseging.forEach(e => e.checked));

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
	
// function $(id) {
// // function getElement(id) {
// 	return document.getElementById(id);
// }
// // getElement('formDevice');
// $("formDevice")

function getSelectDevice(bool = true, color = 'gray') {
	sel.forEach(select => {
		select.disabled = bool;
		select.style.border = `1px solid ${color}`;
	})
}
// !function getSelectDevice(bool = true, color = 'violet') {
// 	sel.forEach(select => {
// 		select.disabled = bool;
// 		select.style.border = `1px solid ${color}`;
// 	})
// }()

function getInputDevice(bool = true, color = 'gray') {
	inp.forEach(input => {
		input.disabled = bool;
		if (input.getAttribute('type') === 'file') { 
			// continue
			input.style.border = 'none';
			document.querySelector('.file__item label').style.border = `1px solid ${color}`;
			document.querySelector('.file__button').style.backgroundColor = `${color}`;
		} else {
			input.style.border = `1px solid ${color}`;
		}
		
	})
}

			
	form.addEventListener('submit', formSend);
	// form–°onfidentiality.addEventListener('input', checkBoxConfirm);
	formAgreement.addEventListener('click', checkVisiableFields);
	
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
		// for(let i = 0; i < input.length; i++) {
				// if (input[i].getAttribute('type') === 'file') {
				// if (input.getAttribute('type') === 'file') {
				// 		continue
				// }
				if (message) {
					small.innerHTML = message;
				}
		// }
	}

	function checkMatchInputs(phoneNum_1, phoneNum_2) {
		console.log(phoneNum_1.name, phoneNum_2.name);
		if (phoneNum_1.value !== phoneNum_2.value) {
				// alert('dont match')
				if (phoneNum_1.name === 'email' && phoneNum_2.name === 'secondemail') {
					
					return showError(phoneNum_2, '–ü–ĺ—ą—ā–į 2 –Ĺ–Ķ —Ā–Ņ—Ė–≤–Ņ–į–ī–į—Ē –∑ 1');
				} else {
					return showError(phoneNum_2);
				}
		} 
	}


	function checkEmail(email_1) {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		// console.log('EMAIL', re.test(email_2.value.trim()));
		if(re.test(email_1.value.trim())) {
					return showSuccess(email_1);
		} else {
				// formSecondEmail.nextElementSibling.innerHTML = "–ü–ĺ—ą—ā–į 2 –Ĺ–Ķ —Ā–Ņ—Ė–≤–Ņ–į–ī–į—Ē –∑ 1";
				// debugger
				// email_1.parentElement.classList.add('_error');
				// email_1.classList.add('_error');
				// small.innerHTML = email_1.id.charAt(0).toUpperCase() + email_1.id.slice(1);
				// small.innerHTML = '123';
				return showError(email_1);
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

	// const form = document.querySelector('.form__device-item-data');
	// const btn = document.querySelector('.button');
	// const formDate = document.querySelector('input[type="date"]');
	// console.log(form, btn);









function checkRequired(itemArr) {
// console.log(itemArr);
	
	itemArr.forEach(function(input) {
// console.log(input.checked);
			if(input.value.trim() === '') {
					showError(input);
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







	function radioCheck() {
		// debugger
		radioMesseging.forEach(input => {
			console.log(input.checked);
			input.addEventListener('click', () => {
				if(!formAgreement.checked && !input.checked ) {
					checkVisiableFields()
				} else if (formAgreement.checked && input.checked ) {
					checkVisiableFields();
				}
			})
		})
		
	}



	function checkVisiableFields() {
		if(!formAgreement.checked && (!radioMesseging[0].checked || !radioMesseging[1].checked)) {
			console.log(radioCheck());
			getSelectDevice(true, "gray");
			getInputDevice(true, "gray");
		} else if (formAgreement.checked && (radioMesseging[0].checked || radioMesseging[1].checked)) {
			getSelectDevice(false, "gold");
			getInputDevice(false, "gold");
		}
	}


function checkDataSale(day_one, day_two) {
	// let day_2 = new Date(),
	// 		day_1 = new Date(formDate.value);
	
	// function diffDates(day_one, day_two) {
		console.log(Math.ceil((day_one - day_two) / (60 * 60 * 24 * 1000)));
		let diferenceTime = Math.ceil((day_one - day_two) / (60 * 60 * 24 * 1000));
		let small = document.querySelector('#small');
		if (diferenceTime >= 16) {
			// small.innerHTML = `–Ě–į—Ā—ā–į–≤ –≥–į—Ä–į–Ĺ—ā—Ė–Ļ–Ĺ–ł–Ļ —ā–Ķ—Ä–ľ—Ė–Ĺ, –í–ł –≤–ļ–į–∑–į–Ľ–ł —á–ł—Ā–Ľ–ĺ ${diferenceTime - 1}`;
			// return showError(formDate, `–Ě–į—Ā—ā–į–≤ –≥–į—Ä–į–Ĺ—ā—Ė–Ļ–Ĺ–ł–Ļ —ā–Ķ—Ä–ľ—Ė–Ĺ, –í–ł –≤–ļ–į–∑–į–Ľ–ł —á–ł—Ā–Ľ–ĺ ${diferenceTime - 1}`);
		} 
		else if (diferenceTime > 1 &&  diferenceTime <= 15) {
			// small.innerHTML = `–í–ł –≤–ļ–į–∑–į–Ľ–ł —á–ł—Ā–Ľ–ĺ ${diferenceTime - 1}, —ā–į –Ĺ–Ķ –ľ–į—Ē —Č–Ķ –≥–į—Ä–į–Ĺ—ā—Ė–Ļ–Ĺ–ĺ–≥–ĺ —ā–Ķ—Ä–ľ—Ė–Ĺ—É`;
			formDate.style.marginBottom = '45px';
			formDate.nextElementSibling.style.bottom = '-36px';
			return showError(formDate, `–£ –į–ļ—Ü—Ė—ó –Ī–Ķ—Ä—É—ā—Ć —É—á–į—Ā—ā—Ć –Ľ–ł—ą–Ķ —Ą—Ė—Ā–ļ–į–Ľ—Ć–Ĺ—Ė —á–Ķ–ļ–ł –≤—Ė–ī 6-–ĺ–≥–ĺ –≤–Ķ—Ä–Ķ—Ā–Ĺ—Ź 2021 —Ä–ĺ–ļ—É. –Ę–į–ļ–ĺ–∂ –∑ –ľ–ĺ–ľ–Ķ–Ĺ—ā—É –Ņ–ĺ–ļ—É–Ņ–ļ–ł –ľ–į—Ē –Ņ—Ä–ĺ–Ļ—ā–ł –Ĺ–Ķ –ľ–Ķ–Ĺ—ą–Ķ –Ĺ—Ė–∂ 14 –ī–Ĺ—Ė–≤ *`);
		} 
		else if (diferenceTime == 1) {
			// small.innerHTML = `–í–ł –≤–ļ–į–∑–į–Ľ–ł —Ā—Ć–ĺ–≥–ĺ–ī–Ĺ—Ė—ą–Ĺ—Ē —á–ł—Ā–Ľ–ĺ, —ā–į –Ĺ–Ķ –ľ–į—Ē —Č–Ķ –≥–į—Ä–į–Ĺ—ā—Ė–Ļ–Ĺ–ĺ–≥–ĺ —ā–Ķ—Ä–ľ—Ė–Ĺ—É`;
			return showError(formDate, `–í–ł –≤–ļ–į–∑–į–Ľ–ł —Ā—Ć–ĺ–≥–ĺ–ī–Ĺ—Ė—ą–Ĺ—Ē —á–ł—Ā–Ľ–ĺ, —ā–į –Ĺ–Ķ –ľ–į—Ē —Č–Ķ –≥–į—Ä–į–Ĺ—ā—Ė–Ļ–Ĺ–ĺ–≥–ĺ —ā–Ķ—Ä–ľ—Ė–Ĺ—É`);
		} 
		else if(formDate.value == '') {
		// else if(diferenceTime == NaN) {
			// small.innerHTML = `No Data`;
			return showError(formDate, `No Data`);
		} 
		else  {
		//  } else if (diferenceTime >= -1) {
			// small.innerHTML = `–í–ł –≤–ļ–į–∑–į–Ľ–ł –ľ–į–Ļ–Ī—É—ā–Ĺ—Ē —á–ł—Ā–Ľ–ĺ`
			return showError(formDate, `–í–ł –≤–ļ–į–∑–į–Ľ–ł –ľ–į–Ļ–Ī—É—ā–Ĺ—Ē —á–ł—Ā–Ľ–ĺ`);
		}
	// };
	// console.log(diffDates(day_2, day_1));


		}
	
	
	
		
		// btn.addEventListener('click', checkDataSale);
	
	




const fileImage = document.getElementById('formImage');
const formPreview = document.getElementById('formPreview');

fileImage.addEventListener('change', () => {
	console.log(fileImage.files[0]);
	uploadFile(fileImage.files[0]);
})

function uploadFile(file) {

	

	let reader = new FileReader();
	reader.onload = function(e) {
    formPreview.innerHTML = `<img src="${e.target.result}" alt="F">`;
  };

	reader.onerror = function(e) {
    alert("Failed to read file!\n\n" + reader.error);
  };

  reader.readAsDataURL(file);
	
}
	

	function formSend(e) {
		// async function formSend(e) {
	e.preventDefault();
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
	checkDataSale(new Date(), new Date(formDate.value));
	// checkEmail(formEmail, formSecondEmail);
	
	// validateEmail(formEmail)
	// validateEmail(formSecondEmail)

} // formSend(e)
// }) // DOMContentLoaded


getSelectDevice();
getInputDevice();
radioCheck()





function onSubmit(token) {
		document.getElementById("demo-form").submit();
}



		/*
		let error = formValidate(form);
			if (error === 0) {
			} else {
							alert("–ó–į–Ņ–į–ĺ–Ľ–Ĺ–ł—ā–Ķ –ĺ–Ī—Ź–∑–į—ā–Ķ–Ľ—Ć–Ĺ—č–Ķ –Ņ–ĺ–Ľ—Ź!")
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