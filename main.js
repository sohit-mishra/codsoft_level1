var input = document.querySelector('h3');
var digit = document.querySelectorAll('input.digit');
var operator = document.querySelectorAll('input.operator');
var clear = document.querySelector('#clear');
var equal = document.querySelector('#equal');

var firstdigit = "";
var secondoperator = "";
var thirddigit = "";
var activethirddigit = false;

for (var a = 0; a < digit.length; a++) {
    digit[a].addEventListener("click", function () {
        if (activethirddigit === true) {
            input.textContent = "";
            thirddigit += this.value;
            input.textContent = thirddigit;
        } else {
            firstdigit += this.value;
            input.textContent = firstdigit;
        }
    })
}

for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function () {
        if (activethirddigit === true) {
            switch (secondoperator) {
                case "+": {
                    input.textContent = "";
                    var sum = Number(firstdigit) + Number(thirddigit);
                    firstdigit = sum;
                    secondoperator = this.value;
                    thirddigit = "";
                    input.textContent = secondoperator;
                    activethirddigit = true;
                    break;
                }
                case "-": {
                    var sub = Number(firstdigit) - Number(thirddigit);
                    firstdigit = sub;
                    secondoperator = this.value;
                    thirddigit = "";
                    input.textContent = secondoperator;
                    activethirddigit = true;
                    break;
                }
                case "*": {
                    var mul = Number(firstdigit) * Number(thirddigit);
                    firstdigit = mul;
                    secondoperator = this.value;
                    thirddigit = "";
                    input.textContent = secondoperator;
                    activethirddigit = true;
                    break;
                }
                case "/": {
                    var divide = Number(firstdigit) / Number(thirddigit);
                    firstdigit = divide;
                    secondoperator = this.value;
                    thirddigit = "";
                    input.textContent = secondoperator;
                    activethirddigit = true;
                    break;
                }
            }
        } else {
            secondoperator = this.value;
            input.textContent = secondoperator;
            activethirddigit = true;
        }
    })
}

clear.addEventListener("click", function () {
    firstdigit = "";
    secondoperator = "";
    thirdoperator = "";
    input.textContent = '0';
    activethirddigit = false;
})

equal.addEventListener("click", function () {
    switch (secondoperator) {
        case "+": {
            var sum = Number(firstdigit) + Number(thirddigit);
            input.textContent = sum;
            firstdigit = "";
            secondoperator = "";
            thirddigit = "";
            activethirddigit = false;
            break;
        }
        case "-": {
            var sub = Number(firstdigit) - Number(thirddigit);
            input.textContent = sub;
            firstdigit = "";
            secondoperator = "";
            thirddigit = "";
            activethirddigit = false;
            break;
        }
        case "*": {
            var mul = Number(firstdigit) * Number(thirddigit);
            input.textContent = mul;
            firstdigit = "";
            secondoperator = "";
            thirddigit = "";
            activethirddigit = false;
            break;
        }
        case "/": {
            var divide = Number(firstdigit) / Number(thirddigit);
            input.textContent = divide;
            firstdigit = "";
            secondoperator = "";
            thirddigit = "";
            activethirddigit = false;
            break;
        }
        default: {
            console.log("Something is wrong");
        }
    }
})