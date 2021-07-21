const calculateTemp = () => {
    const temp = document.getElementById("temp").value;
    const temp_select = document.getElementById("temp_diff");
    const temp_category = temp_diff.options[temp_select.selectedIndex].value;
    const result = document.getElementById("result");
    
    const celToFar = (val) => {
       const fahrenheit = Math.round((val/5 * 9) + 32);
       return fahrenheit;
    }

    const farToCel = (val) => {
       let celsius = Math.round(((val - 32) * 5)/ 9);
       return celsius;
    }
    
    if(temp_category === 'cel') {
        const res = celToFar(temp);
        result.innerHTML = `= ${res} Fahrenhite`;    
    } else {
        const res = farToCel(temp);
        console.log(res);
        result.innerHTML = `= ${res} Celsius`;
    }
    
    
}

