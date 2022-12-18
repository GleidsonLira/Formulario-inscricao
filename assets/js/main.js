const inputs = document.getElementsByTagName('input');

function validadeInputs() {
    for (let i=0; i< inputs.length; i++) {
        inputs[i].addEventListener('blur', function () {
            const erro = document.getElementsByClassName('error');
            const erroIcon = document.getElementsByClassName('error__icon');

            if (!this.valeu) {
                this.classList.add('invalid');
                erro[i].classList.add('visable');
                erroIcon[i].classList.add('visable');
              }
            else {
                this.classList.remove('invalid');
                erro[i].classList.remove('visable');
                erroIcon.classList.remove('visable');
            }
        })
    }
}