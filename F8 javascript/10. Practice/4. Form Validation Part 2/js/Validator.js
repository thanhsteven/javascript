function Validator(formSelector) {
    var _this = this;
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            };
            element = element.parentElement;
        };
    };

    var formElement = document.querySelector(formSelector);
    var formRules = {};
    var validatorRules = {
        required: function (value) {
            return value ? undefined : 'Vui lòng nhập trường này !';
        },
        email: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Trường này phải là email !';
        },
        min: function (min) {
            return function (value) {
                return value.length >= min ? undefined : `Vui lòng nhập ít nhất ${min} kí tự !`;
            };
        },
        max: function (max) {
            return function (value) {
                return value.length >= max ? undefined : `Vui lòng nhập ít nhất ${max} kí tự !`;
            };
        },
    };

    var ruleName = 'required';
    // console.log(validatorRules[ruleName]);

    if (formElement) {
        var inputs = formElement.querySelectorAll('[name][rules]');
        for (var input of inputs) {
            formRules[input.name] = input.getAttribute('rules');
            var rules = input.getAttribute('rules').split('|');

            for (var rule of rules) {
                var ruleInfo;
                var isRuleHasValue = rule.includes(':');

                if (isRuleHasValue) {
                    ruleInfo = rule.split(':');
                    rule = ruleInfo[0];
                };

                var ruleFunc = validatorRules[rule];
                if (isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1]);
                };

                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);
                } else {
                    formRules[input.name] = [ruleFunc];
                };
            };

            // Lắng nghe sự kiện validate
            input.onblur = handleValidate;
            input.oninput = handleClearError;
        };

        // Hàm thực hiện validate
        function handleValidate(event) {
            var errorMessage;
            var rules = formRules[event.target.name];

            for (var rule of rules) {
                errorMessage = rule(event.target.value);
                if (errorMessage) break;
            };

            if (errorMessage) {
                var formGroup = getParent(event.target, '.form-group');
                if (formGroup) {
                    var formMessage = formGroup.querySelector('.form-message');
                    if (formMessage) {
                        formMessage.innerText = errorMessage;
                        formGroup.classList.add('invalid');
                    };
                };
            };

            return !errorMessage;
        };

        // console.log(formRules);
        function handleClearError(event) {
            var formGroup = getParent(event.target, '.form-group');
            if (formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid');
                var formMessage = formGroup.querySelector('.form-message');
                if (formMessage) {
                    formMessage.innerText = '';
                };
            };
        };
    };

    // Xử lý hành vi submit form
    formElement.onsubmit = function (event) {
        event.preventDefault();

        var inputs = formElement.querySelectorAll('[name][rules]');
        var isValid = true;
        for (var input of inputs) {
            if (!handleValidate({ target: input })) {
                isValid = false;
            };
        };

        // Khi không có lỗi
        if (isValid) {
            if (typeof _this.onSubmit === 'function') {
                var enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
                var formValues = Array.from(enableInputs).reduce(function (values, input) {
                    switch (input.type) {
                        case 'radio':
                            values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                            break;
                        case 'checkbox':
                            if (!input.matches(':checked')) {
                                values[input.name] = '';
                                return values;
                            };
                            if (!Array.isArray(values[input.name])) {
                                values[input.name] = [];
                            };
                            values[input.name].push(input.value);
                            break;
                        case 'file':
                            values[input.name] = input.files;
                        default:
                            values[input.name] = input.value;
                    };
                    return values;
                }, {});
                // Gọi lại hàm onsubmit và trả về giá trị của form
                _this.onSubmit(formValues);
            } else {
                formElement.submit();
            };
        };
    };
};