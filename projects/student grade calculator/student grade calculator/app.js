const calc = () => {

    let english = document.getElementById('english').value;
    let maths = document.getElementById('maths').value;
    let science = document.getElementById('science').value;
    let programing = document.getElementById('programing').value;
    let result = document.getElementById('result');
    let grades = "";


    let total = parseFloat(english) + parseFloat(maths) + parseFloat(science) + parseFloat(programing);


    let percentage = (total/400)*100;
    

    if (percentage<=100 & percentage>80) {
         grades = 'A';
         result.innerHTML = `Your Total is ${total} and percentage is ${percentage}% and Grade is ${grades}<br> You are PASS !!`
    } else if (percentage<=79 & percentage>60){
         grades = 'B';
         result.innerHTML = `Your Total is ${total} and percentage is ${percentage}% and Grade is ${grades}<br> You are PASS !!`
    } else if (percentage<=59 & percentage>40) {
         grades = 'C';
         result.innerHTML = `Your Total is ${total} and percentage is ${percentage}% and Grade is ${grades}<br> You are PASS !!`
    } else {
         grades = 'F';
         result.innerHTML = `Your Total is ${total} and percentage is ${percentage}% and Grade is ${grades}<br> You are FAIL !!`
    }
    

    
};