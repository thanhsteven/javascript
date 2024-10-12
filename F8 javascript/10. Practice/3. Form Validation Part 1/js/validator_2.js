// Hàm Validator
function Validator(options) {

    var formElement = document.querySelector(options.form);
    
    options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        if (inputElement) {
            inputElement.onblur = function () {
                Validate(inputElement, rule);
            };
            inputElement.oninput = function () {
                RemoveInvalid(inputElement);
            };
        };
    });

    // Hàm Validate
    function Validate(inputElement, rule) {
        var errorMessage = rule.checked(inputElement.value);
        var errorTagElement = inputElement.parentElement.querySelector(options.errorMessageTag);
        if (errorMessage) {
            errorTagElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorTagElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        };
    };

    // Hàm Remove Invalid
    function RemoveInvalid(inputElement) {
        var errorTagElement = inputElement.parentElement.querySelector(options.errorMessageTag);
        errorTagElement.innerText = '';
        inputElement.parentElement.classList.remove('invalid');
    };
};


// Hàm xử lý rule cho mỗi trường
//=> Hàm yêu cầu họ tên
function isRequired(selector, message) {
    return {
        selector: selector,
        checked: (value) => {
            return value.trim() ? undefined : message || 'Vui lòng nhập trường này !';
        },
    };
};
//=> Hàm Email
function isEmail(selector, message) {
    return {
        selector: selector,
        checked: (value) => {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (value.trim() == '') {
                return 'Vui lòng nhập trường này !';
            } else if (regex.test(value) == false) {
                return message ? message : 'Trường này phải là email !';
            };
        },
    };
};
//=> Hàm Password
function isRulePassword(selector, minValue, message) {
    return {
        selector: selector,
        checked: (value) => {
            if (value.trim() == '') {
                return 'Vui lòng nhập trường này !';
            } else if (value.length <= minValue) {
                return message ? message : `Mật khẩu tối thiểu ${minValue} kí tự !`;
            };
        },
    };
};
//=> Hàm Confirmed Password
function isConfirmed(selector, getConfirmValue, message) {
    return {
        selector: selector,
        checked: (value) => {
            if (value.trim() == '') {
                return 'Vui lòng nhập trường này !';
            } else if (value !== getConfirmValue()) {
                return message ? message : 'Xác nhận mật khẩu không chính xác !';
            };
        },
    };
};