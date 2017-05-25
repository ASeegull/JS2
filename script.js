function task1 () {
function rangeSum(start, end) {
    var sum = 0;
    while (start <= end) {
        sum += start;
        start++;
    }
    console.log(sum);
}
    rangeSum(1, 3);
}

document.getElementById('task1').addEventListener('click', task1, false);


function task2 () {
    function rangeSum(start, end) {
        var sum = 0;
        while (start <= end) {
            sum += start;
            start++;
        }
        console.log(sum);
    }
    rangeSum(20,220);
}

document.getElementById('task2').addEventListener('click', task2, false);

function task3() {
    function displayEvenNumbers() {
        for (var i = 1; i <= 20; i++) {
            if (i % 2 === 0) {
                console.log(i);
            }
        }
    }
    displayEvenNumbers();
}

document.getElementById('task3').addEventListener('click', task3, false);

function task4() {
    function displayEvenNumbersContinue() {
        for (var i = 1; i <= 20; i++) {
            if (i % 2) {
                continue;
            }
            console.log(i);
        }
    }
    displayEvenNumbersContinue();
}

document.getElementById('task4').addEventListener('click', task4, false);

function task5() {
    function displayOddNumbers() {
        var i = 10;

        while (i <= 30) {
            if (i % 2) {
                console.log(i);
            }
            i++;
        }
    }
    displayOddNumbers();
}

document.getElementById('task5').addEventListener('click', task5, false);

function task6() {
    function countToMyBirthdayMonth(month) {
        for (var i = 1; i <= 15; i++) {
            if (i === month) {
                break;
            }
            console.log(i);
        }
    }

    countToMyBirthdayMonth(10);
}
document.getElementById('task6').addEventListener('click', task6, false);


function task7() {
    function numberList() {
        var i = 0;
        while (i < 5) {
            console.log(`number ${i}  =)`);
            i++;
        }
    }

    numberList();
}
document.getElementById('task7').addEventListener('click', task7, false);

function task8() {
    function NumberVerifier_DoWhile(minNumber) {
        var num;
        var message = 'Please, enter the number, greater than 100';
        do {
            num = +prompt(message, '101');
            var verify = isNaN(num);
        } while (num <= minNumber || verify);
        console.log('Your number is ' + num);
    }
    NumberVerifier_DoWhile(100);
}
document.getElementById('task8').addEventListener('click', task8, false);


function task9() {
    function NumberVerifier_While(minNumber) {
        var num;
        var message = 'Please, enter the number, greater than 100';
        while (!(num) || num <= minNumber) {
            num = +prompt(message, '101');
        }
        console.log('Your number is ' + num);
    }

    NumberVerifier_While(100);
}
document.getElementById('task9').addEventListener('click', task9, false);


function task10() {
    function hashBank(num) {
        var hashOutput = '';
        for (var i = 1; i <= num; i++) {
            hashOutput += '#';
            console.log(hashOutput);
        }
    }
    hashBank(8);
}
document.getElementById('task10').addEventListener('click', task10, false);