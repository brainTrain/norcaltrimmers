// lovingly lifted from: http://www.html5rocks.com/en/tutorials/forms/constraintvalidation/#toc-safari

function safariRequiredShim() {
    let forms = document.getElementsByTagName('form');
    for (let i = 0; i < forms.length; i++) {
        forms[i].noValidate = true;

        forms[i].addEventListener('submit', function(event) {
            //Prevent submission if checkValidity on the form returns false.
            if (!event.target.checkValidity()) {
                event.preventDefault();
                //Implement you own means of displaying error messages to the user here.
            }
        }, false);
    }
}

module.exports = safariRequiredShim;
