function displayOddNumbers() {
    var i = 10;

    while (i <= 30) {
        if (i % 2 === 1) {
            console.log(i);
            i++;
        }
        else {
            i++;
        }
    }
}

displayOddNumbers();


function countToMyBirthdayMonth() {
    for(var i = 1; i <= 15; i++) {
        if (i === 10) {
            break;
        }
        console.log(i);
    }
}

countToMyBirthdayMonth();

function displayEvenNumbers() {
    for (var i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}


function displayEvenNumbersContinue() {
    for (var i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}


