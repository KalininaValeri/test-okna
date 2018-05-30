var calc = function(){
    var doc = document;
    var number = doc.getElementById('number');
    var total = doc.getElementById('total');
    var terms = doc.getElementById('terms');
    var form = doc.getElementById('form');

    var countSum = function () {

    };

    var handlerNumber = function(num) {
        var summ = 0;
        if (num > 0) {
            terms.classList.add('active');
            for (var i = 0; i < num; i++) {
                var newInput = doc.createElement('input');
                newInput.classList.add('terms__input');
                newInput.classList.add('input');
                newInput.setAttribute('type', 'number');
                terms.appendChild(newInput);
            }

            var arrayTerms = terms.querySelectorAll('.terms__input');
            var arrVal = [];
            for (var k = 0; k < arrayTerms.length; k++) {
                arrayTerms[k].addEventListener('keyup', function(event){
                    arrVal[k] = 1;
                });
            }
        }

        if (+num === 0) {
            terms.classList.remove('active');
           for (var j = 0; j < arrayTerms.length; j++) {
               terms.removeChild(arrayTerms[j]);
           }
        }
    };

    form.addEventListener('submit', function (event) {
        event.preventDefault();
    });

    number.addEventListener('keyup', function (event) {
        if (+number.value < 0) {
            number.value = 0;
        }
        if ( event.keyCode === 13 ) {
            handlerNumber(number.value);
        }
    });
};
document.addEventListener("DOMContentLoaded", calc);