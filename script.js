function calculateAge(){
    const Birthdate = document.getElementById("Birthdate").value;
    const result = document.getElementById("result");

    if(Birthdate){
        const today = new Date();
        const birtDate = new Date(Birthdate);

        let ageYear = today.getFullYear() - birtDate.getFullYear();
        let ageMonth = today.getMonth() - birtDate.getMonth();
        let ageDate = today.getDate() - birtDate.getDate();

        if(ageDate < 0){
            ageMonth--;
            ageDate += new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            ).getDate();
        }
        if(ageMonth < 0){
            ageYear--;
            ageMonth +=12;
        }

        result.innerText = `Your age is ${ageYear} years, ${ageMonth} months, and ${ageDate} days.`
        result.style.color = "green"
    }
    else{
        result.innerText = "Please enter your birtdate!!!";
        result.style.color = "red";
    }
}