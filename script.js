const inputScreen = document.getElementById('operations');
const btnDiv = document.getElementById('buttons');
const opBtns = document.querySelectorAll('.op-btn');

const generateButtons = () => {

    const clearBtn = document.createElement('button');
    clearBtn.setAttribute('class', 'calc-btn clear');
    clearBtn.innerText = 'C';
    clearBtn.addEventListener('click', () => inputScreen.innerText = '');

    const equalBtn = document.createElement('button');
    equalBtn.setAttribute('class', 'calc-btn equal');
    equalBtn.innerText = '=';
    equalBtn.addEventListener('click', calculate);

    for (let number = 1; number <= 10; number++) {

        const numberButton = document.createElement('button');
        numberButton.setAttribute('class', 'calc-btn');
        numberButton.innerText = (number == 10) ? 0 : number;
        numberButton.addEventListener('click', () => inputScreen.innerText += numberButton.innerText);

        btnDiv.append(numberButton);

    }

    btnDiv.append(clearBtn);
    btnDiv.append(equalBtn);

}

const ops = ['+', '*', '/'];

opBtns.forEach(btn => {

    btn.addEventListener('click', () => {

        const operation = btn.dataset.operation;

        if (inputScreen.innerText != '') {

            const values = inputScreen.innerText.split('');

            const lastValueOfInputScreen = values[values.length - 1];

            if (lastValueOfInputScreen == '-') {

                inputScreen.innerText.replace(inputScreen.innerText[inputScreen.innerText.length - 1], '-');

            }

            else if (lastValueOfInputScreen != operation && (!ops.includes(lastValueOfInputScreen))) {

                inputScreen.innerText += operation

            }


        } else {

            if (operation == '-') inputScreen.innerText += operation;

        }


    });

});


const calculate = () => {

    if (inputScreen.innerText == '' || inputScreen.innerText == 'Error') return;

    try {

        inputScreen.innerText = eval(inputScreen.innerText);

    } catch (error) {

        inputScreen.innerText = 'Error';

    }
}


generateButtons()