// Doi tuong Validator
function Validator(option) {
    // console.log(option.form);

    var selectorRules = {};

    // Lấy Element của form cần validate
    var formElement = document.querySelector(option.form);

    // Hàm xác nhận, thực hiện
    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(option.errorSelector);
        // console.log(errorElement);

        // Lấy hàm test function : rule.test
        var errorMessage;
        //=> console.log(errorMessage);

        var rules = selectorRules[rule.selector];
        // console.log(rules);

        // Lặp qua từng Rule và Kiểm tra
        // Nếu có lỗi thì dừng việc kiểm tra
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

        return !errorMessage;
    };


    if (formElement) {

        // Khi Submit Form
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;

            // Lặp qua từng rule và validate
            option.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                };
            });

            if (isFormValid) {
                if (typeof option.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
                    // console.log(enableInputs); 

                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
                        values[input.name] = input.value;
                        return values;
                    }, {});

                    option.onSubmit(formValues);
                };
            };
        };



        // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input,...)
        option.rules.forEach(rule => {
            // console.log(rule);

            // Lưu lại các rules trong mỗi input
            // selectorRules[rule.selector] = rule.test;
            // console.log(selectorRules[rule.selector]);

            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            };


            var inputElement = formElement.querySelector(rule.selector);
            // console.log(inputElement);

            if (inputElement) {
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {

                    // blur khỏi input nào
                    //=> console.log('blur' + rule.selector);

                    // Lấy value trong input đó
                    //=> console.log(inputElement.value);

                    // Gọi hàm validate
                    validate(inputElement, rule);
                };

                // Xử lý mỗi khi user nhập vào input
                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector(option.errorSelector);
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                };
            };
        });

        // console.log(selectorRules);

    };
};



// Định nghĩa rule
// Nguyên tắc của rule:
// - Khi có lỗi => trả ra message lỗi
// - Khi hợp lệ => không trả gì cả (undefined)

Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : message || 'Vui lòng nhập trường này !';
        },
    };
};

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là email !';
        },
    };
};

Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} ký tự !`;
        },
    };
};

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Xác định mật khẩu không chính xác !';
        },
    }
};