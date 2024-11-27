var password = "Han99o";

function passcheck() {
    if (document.getElementById('pass1').value != password) {
        window.location.replace('https://youareanidiot.cc/');
        alert('pw nya salah!!');
    }

    if (document.getElementById('pass1').value == password) {
        window.location.replace('https://surveyjs.io/service/surveyresults/c8588bb8-c16e-42ce-99a4-258990b7ccba#table')
    }
}

