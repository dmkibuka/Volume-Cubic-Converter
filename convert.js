//Fetch all DOM elements
let weightType = document.getElementById('weightType');
let weightValue = document.getElementById('weightValue');
let inCard = document.getElementById('inCard');
let ftCard = document.getElementById('ftCard');
let ydCard = document.getElementById('ydCard');
let meCard = document.getElementById('meCard');
let cmCard = document.getElementById('cmCard');
let liCard = document.getElementById('liCard');
let glusCard = document.getElementById('glusCard');
let glimCard = document.getElementById('glimCard');
let toCuin = document.getElementById('toCuin');
let toCuft = document.getElementById('toCuft');
let toCuyd = document.getElementById('toCuyd');
let toCucm = document.getElementById('toCucm');
let toCume = document.getElementById('toCume');
let toLiter = document.getElementById('toLiter');
let toGlus = document.getElementById('toGlus');
let toGlim = document.getElementById('toGlim');


//Hide input value box and output cards
weightValue.style.visibility = 'hidden';
output.style.visibility = 'hidden';

//Selected item or option
let mySelect = '0';

//List of all cards
let cardArray = ['inCard', 'ftCard', 'ydCard', 'cmCard', 'meCard', 'liCard', 'glusCard', 'glimCard'];

//Listen for change in the select box
weightType.addEventListener('change', (e) => {

    // Make input box and cards visible
    weightValue.style.visibility = 'visible';
    output.style.visibility = 'visible';

    //Get current selected option
    let val = e.target.value;

    if (val === '1') {
        mySelect = 1;
        noCard('inCard');
    }
    if (val === '2') {
        mySelect = 2;
        noCard('ftCard');
    }
    if (val === '3') {
        mySelect = 3;
        noCard('ydCard');
    }
    if (val === '4') {
        mySelect = 4;
        noCard('cmCard');
    }
    if (val === '5') {
        mySelect = 5;
        noCard('meCard');
    }
    if (val === '6') {
        mySelect = 6;
        noCard('liCard');
    }
    if (val === '7') {
        mySelect = 7;
        noCard('glusCard');
    }
    if (val === '8') {
        mySelect = 8;
        noCard('glimCard');
    }
});

function noCard(card) {
    for (i = 0; i < cardArray.length; i++) {
        if (cardArray[i] === card) {
            // Hide this card and display the other cards
            document.getElementById(cardArray[i]).style.display = 'none';
        } else {
            document.getElementById(cardArray[i]).style.display = 'block';
        }
        // Update values
        updateValues();
    }
}

// Convert Inputs values
weightValue.addEventListener('input', (e) => {

    //Get current input values
    let val = e.target.value;

    //Convert weights
    Conversion(mySelect, val);
});

//Update values once selection changed
function updateValues() {
    let val = weightValue.value;
    Conversion(mySelect, val);
}
/**
 * Conversion ratios
 * switch statement
 **/
function Conversion(mySelect, val) {
    switch (mySelect) {
        case 1: // From cubic inches to..
            toCuft.innerHTML = (val / 1728).toFixed(3);;
            toCuyd.innerHTML = '';
            toCucm.innerHTML = val * 16.387;
            toCume.innerHTML = '';
            toLiter.innerHTML = (val * 0.0164).toFixed(3);
            toGlus.innerHTML = (val * 0.00433).toFixed(4);
            toGlim.innerHTML = '';
            break;

        case 2: // From cubic foot to..
            toCuin.innerHTML = val * 1728
            toCuyd.innerHTML = (val * 0.0370).toFixed(3);
            toCucm.innerHTML = (val * 28.317).toFixed(3);
            toCume.innerHTML = (val * 0.0283).toFixed(3);
            toLiter.innerHTML = (val * 28.32).toFixed(3);
            toGlus.innerHTML = (val * 7.481).toFixed(3);
            toGlim.innerHTML = (val * 6.229).toFixed(3);
            break;

        case 3: // From cubic yards to..
            toCuin.innerHTML = val * 46656;
            toCuft.innerHTML = val * 27;
            toCucm.innerHTML = '';
            toCume.innerHTML = (val * 0.7646).toFixed(3);
            toLiter.innerHTML = (val * 764.6).toFixed(2);
            toGlus.innerHTML = (val * 202).toFixed(2);
            toGlim.innerHTML = (val * 168.2).toFixed(2);
            break;

        case 4: // From cubic centimeters to..
            toCuin.innerHTML = (val * 0.0610).toFixed(4);
            toCuft.innerHTML = '';
            toCuyd.innerHTML = '';
            toCume.innerHTML = '';
            toLiter.innerHTML = (val * 0.001).toFixed(3);
            toGlus.innerHTML = '';
            toGlim.innerHTML = '';
            break;

        case 5: // From cubic meters to..
            toCuin.innerHTML = val * 61023;
            toCuft.innerHTML = (val * 35.31).toFixed(2);
            toCuyd.innerHTML = (val * 1.308).toFixed(3);
            toCucm.innerHTML = val * 1000000;
            toLiter.innerHTML = val * 1000;
            toGlus.innerHTML = (val * 264.2).toFixed(2);
            toGlim.innerHTML = val * 220;
            break;

        case 6: // From liter to..
            toCuin.innerHTML = val * 61023;
            toCuft.innerHTML = (val * 0.0353).toFixed(4);
            toCuyd.innerHTML = (val * 1.308).toFixed(3);
            toCucm.innerHTML = val * 1000;
            toCume.innerHTML = (val * 0.001).toFixed(3);
            toGlus.innerHTML = (val * 0.2642).toFixed(4);
            toGlim.innerHTML = (val * 0.2200).toFixed(3);
            break;

        case 7: // From gallon(us) to..
            toCuin.innerHTML = val * 231;
            toCuft.innerHTML = (val * 0.1337).toFixed(3);
            toCuyd.innerHTML = '';
            toCucm.innerHTML = (val * 3785.4).toFixed(2);
            toCume.innerHTML = '';
            toLiter.innerHTML = (val * 3.785).toFixed(3);
            toGlim.innerHTML = (val * 0.8327).toFixed(3);
            break;

        case 8: // From gallon(imperial) to..
            toCuin.innerHTML = (val * 227.4).toFixed(2);
            toCuft.innerHTML = (val * 0.1605).toFixed(3);
            toCuyd.innerHTML = '';
            toCucm.innerHTML = (val * 4546.1).toFixed(4);
            toCume.innerHTML = '';
            toLiter.innerHTML = (val * 4.546).toFixed(3);
            toGlus.innerHTML = (val * 1.201).toFixed(3);
            break;
    }
}
