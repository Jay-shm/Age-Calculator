function calculateAge(){
    const birtDate = document.getElementById("Birthdate").value;
    const result = document.getElementById("result");

    if(birtDate){
        let today = new Date();
        let birtdate = new Date(birtDate);
        let ageDate = today.getDate() - birtdate.getDate();
        let ageMonth = today.getMonth() - birtdate.getMonth();
        let ageYear = today.getFullYear() - birtdate.getFullYear();

        if(ageDate < 0){
            ageMonth--;
            ageDate += new Date(
                ageYear,
                ageMonth,
                0
            ).getDate();
        }

        if(ageMonth < 0){
            ageYear--;
            ageMonth += 12;
        }

        result.innerText = `Your age is ${ageYear} years, ${ageMonth} months, and ${ageDate} days.`;
        result.style.color = "green";
    }
    else{
        result.innerText = "Enter Your Birthday";
        result.style.color = "Red";
    }
}