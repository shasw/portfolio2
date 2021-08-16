const searchFunc = () => {
    let myInput = document.getElementById("my-input").value.toUpperCase();
    console.log(myInput);
    let myTable = document.getElementById("my-table");
    let tr = myTable.getElementsByTagName("tr");
    for (var i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName("td")[0];
        if (td){
            let textValue = td.textContent || td.innerHTML;
            if (textValue.toUpperCase().indexOf(myInput) > -1) {
                tr[i].style.display ="";
            }else {
                tr[i].style.display = "none";
            }
        }
        
    }
}