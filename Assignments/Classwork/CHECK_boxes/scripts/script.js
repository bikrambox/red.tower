/*......................FIRST FUNCTION......................................*/

function myFunction() {
        var letter = document.getElementById("first_input").value;
        var leto = document.getElementById("second_input").value;
        //var error_message = document.getElementById("error_message");
        //var empt = document.getElementById("my_input")("my_inputo").value;
        var text;
        if (!leto) { // empty
            //text = "Enter something";
            //alert("Enter Something");
            text = "Enter Something";
            messagee.innerHTML = text;
            //document.getElementById("my_input")("my_inputo").focus();
            return false;
        }
        else if (!letter) { // empty
            //text = "Enter something";
            //alert("Enter Something");
            text = "Enter Something";
            messagee.innerHTML = text;
            //document.getElementById("my_input")("my_inputo").focus();
            return false;
        }
        else if (!isNaN(letter) &&  !isNaN(leto)) { // num num
            text = +letter + +leto;
        }
        else if (!isNaN(letter) &&  isNaN(leto)) { // num char
            text = "Not compaitible at all.";
        }
        else if (isNaN(letter) &&  !isNaN(leto)) { //  char bum
            text = "Not compaitible at all.";
        }
        else if (isNaN(letter) &&  isNaN(leto)) {  //char char
            text = letter + leto;
        }
        else {
            text = "Again just chilling.";
        }
        document.getElementById("messagee").innerHTML = text;
    }
     /*......................ANOTHER FUNCTION FOR REFRESH......................................*/
    
     function refreshPage(){
        window.location.reload();
    } 
    
        