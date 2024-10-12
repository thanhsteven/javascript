// Hàm Validator
function Validator(options) {
    var selectorRules = {};

    // Xử lý khi Submit Form
    var formElement = document.querySelector(options.form);
    if (formElement) {
        formElement.onsubmit = function (e) {
            options.rules.forEach(function (rule) {
                e.preventDefault();
                var inputElement = formElement.querySelector(rule.selector);
                Validate(inputElement, rule);
            });
        };
    };

    // Hàm thực hiện
    function Validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        // var errorMessage = rule.test(inputElement.value);
        var errorMessage;
        var rules = selectorRules[rule.selector];
        for (var i = 0; i < rules.length; i++) {
            errorMessage = rules[i](inputElement.value);
            if (errorMessage) break;
        };
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        };
    };

    if (formElement) {
        options.rules.forEach(function (rule) {
            // console.log(selectorRules[rule.selector]); 
            //=> Tại sao lại undefined ? => Nghiên cứu lại object là hiểu
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            };
            var inputElement = formElement.querySelector(rule.selector);
            inputElement.onblur = function () {
                Validate(inputElement, rule);
            };
            inputElement.oninput = function () {
                var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                errorElement.innerText = '';
                inputElement.parentElement.classList.remove('invalid');
            };
        });
    };
};


// Hàm Required
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : message || 'Vui lòng nhập trường này !';
        },
    };
};

// Hàm Email
Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là email !';
        },
    };
};

// Hàm MinLength
Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự !`;
        },
    };
};

// Hàm Confirm
Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Xác định mật khẩu không chính xác !';
        },
    };
};