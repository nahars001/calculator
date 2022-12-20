let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
    button.addEventListener("click", (e) => {
        let clickedBtn = e.target.innerText;
        //   console.log("Content :- ", clickedBtn);

        switch (clickedBtn) {
            case "C":
                display.innerText = "";
                break;
            case "=":
                // try {
                //     display.innerText = eval(display.innerText);
                // } catch {
                //     display.innerText = "Error";
                // }
                break;
            default:
                display.innerText += clickedBtn;
        }
    });
});




buttons.map((button) => {
    button.addEventListener("click", (e) => {
        let clickedBtn = e.target.innerText;
        //   console.log("Content :- ", clickedBtn);
        var myVal = document.getElementById("display").innerText;
        console.log(myVal);
        let answer = document.getElementById("input_answer");
        if (myVal != "") {
           answer.innerText = "Ans: " + eval(myVal);
        } 
        
        if (myVal == "") {
            answer.innerText = "";
        }

        switch (clickedBtn) {
            case "C":
                display.innerText = "";
                break;
            case "=":
                try {
                    if(display.innerText != ""){
                        
                
                    answer.innerText = "Ans: "+eval(display.innerText);
                    }
                } catch {
                    answer.innerText = "Error";
                }
                break;
            default:
                //.innerText += clickedBtn;
        }
    });
});



 
    
 

    







// display.addEventListener('change', calculate);
// function calculate() {

   

//     try {
//         display.innerText = eval(display.innerText);
//     } catch {
//         display.innerText = "Error";

//     }
// }


