let userInput = document.getElementById("date");
let result = document.getElementById("result");

// user will be able to select (any previous date > today)
userInput.max = new Date().toISOString().split("T")[0];


function calculateMyAge(){

    // stores birthdate
    let birthDate = new Date(userInput.value);
    
    let d1= birthDate.getDate();  //stores birth date
    let m1= birthDate.getMonth()+1;  //stores birth month, added +1 so that it gets the month
    let y1= birthDate.getFullYear();  //stores birth year

    //stores todays date
    let today = new Date();
    
    let d2= today.getDate();  //stores today date
    let m2= today.getMonth()+1;  //stores today month, added +1 so that it gets the month
    let y2= today.getFullYear();  //stores today year

    //Calculating the difference
    let y3, m3, d3;

    //year difference
    y3= y2 - y1;

    if(m2 >= m1){
        m3= m2 - m1;
    }
    else{
        y3--;
        m3 = 12 + m2 - m1
    }
    
    if(d2 >= d1){
        d3 = d2 - d1;
    }
    else{
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;   
    }
    if(m3 < 0){
        m3 = 11;
        y3--;
    }
    // console.log(y3,m3,d3);

    //display result
    result.innerHTML = `You are <span>"${y3}"</span> years, <span>"${m3}"</span> months and <span>"${d3}"</span> days old.`;
}
    function getDaysInMonth(year, month){
        return new Date(year, month, 0).getDate();
    }