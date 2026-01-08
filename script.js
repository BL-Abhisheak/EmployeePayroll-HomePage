        document.addEventListener('DOMContentLoaded', function () {

            const form = document.querySelector('#main-form');

            const nameInput = document.querySelector('#txt-name');
            const emailInput = document.querySelector('#txt-email');
            const mobileInput = document.querySelector('#txt-mobile');
            const passwordInput = document.querySelector('#txt-password');
            const salaryInput = document.querySelector('#txt-range');

            const nameError = document.querySelector('.text-error');
            const emailError = document.querySelector('.email-error');
            const mobileError = document.querySelector('.mobile-error');
            const passwordError = document.querySelector('.password-error');

            const outName = document.querySelector('#out-name');
            const outEmail = document.querySelector('#out-email');
            const outSalary = document.querySelector('#out-salary');
            const outSalaryFinal = document.querySelector('#out-salary-final');

            const nameRegex = /^[A-Z][a-z]{2,5}$/;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
            const mobileRegex = /^91\s[6-9]\d{9}$/;
            const passwordRegex = /^.{8,}$/;

            outSalary.textContent = salaryInput.value;

            salaryInput.addEventListener('input', function () {
                outSalary.textContent = salaryInput.value;
            });

            form.addEventListener('submit', function (e) {
                e.preventDefault();

                let isValid = true;

                if (!nameRegex.test(nameInput.value)) {
                    nameError.textContent = 'Name is incorrect';
                    isValid = false;
                } else {
                    nameError.textContent = '';
                }

                if (!emailRegex.test(emailInput.value)) {
                    emailError.textContent = 'Invalid email';
                    isValid = false;
                } else {
                    emailError.textContent = '';
                }

                if (!mobileRegex.test(mobileInput.value)) {
                    mobileError.textContent = 'Format: 91 9919819801';
                    isValid = false;
                } else {
                    mobileError.textContent = '';
                }

                if (!passwordRegex.test(passwordInput.value)) {
                    passwordError.textContent = 'Minimum 8 characters required';
                    isValid = false;
                } else {
                    passwordError.textContent = '';
                }

                if (!isValid) return;

                outName.textContent = nameInput.value;
                outEmail.textContent = emailInput.value;
                outSalaryFinal.textContent = salaryInput.value;

                form.reset();
                outSalary.textContent = salaryInput.value;
            });

        });
  