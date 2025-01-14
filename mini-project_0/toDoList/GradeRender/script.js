/* eslint-disable no-unused-vars */

document.addEventListener ("DOMContentLoaded",
    ()=>{
        document.getElementById("getGrade").addEventListener(
            'click',(event)=>{
                event.preventDefault();
                let marks = document.getElementById("marks").value;
                
                let resultGrade="";
                
                switch(marks){
                    case 70<=marks<90:
                        {
                         resultGrade=" B";
                         break;
                        } 
                     case marks>=90:
                        {
                            resultGrade=" A";
                         break;
                        }
                    case 30<marks<70:
                        {
                            resultGrade=" C";
                            break;
                        }
                    case marks<=30:
                        {
                            resultGrade=" D";
                            break;
                        }
                    default:
                       resultGrade="Grade F";
                }
                document.getElementById("result").innerHTML=`Your Marks ${marks} and Grade ${resultGrade}`;   
            }
        );
    }
)

document.getElementById("marks")


for(let i=0;;i++){
    console.log("St");
    if(i>5)
    {
        console.log("break");
        break;
    }
}
console.log("Loop Ended");

