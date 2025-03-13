function toggleForm() {
    const formWrapper = document.querySelector('.form-wrapper');
    if (formWrapper.classList.contains('show-login')) {
        formWrapper.classList.remove('show-login');
        formWrapper.classList.add('show-signup');
    } else {
        formWrapper.classList.remove('show-signup');
        formWrapper.classList.add('show-login');
    }
}
