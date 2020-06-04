function RESULT() {

  x = prompt('Enter x ');
  y = prompt('Enter y ');
  /* function sum() {
            var txtFirstNo = document.getElementById('txtFirstNo').value;
            var txtSecondNo = document.getElementById('txtSecondNo').value;
            // var result = parseInt(txtFirstNo) + parseInt(txtSecondNo);
            if (txtFirstNo || txtSecondNo == isNaN) {
                document.getElementById('txtResult').value = result;
            }
             
            else if(txtFirstNo || txtSecondNo == isNaN){
                document.getElementById('txtResult').value = 'result';
            }
             
        }



        These are not working yet. Stucked at input.
   */
  if (isNaN(x) && isNaN(y)) {
  return x + y; // CHAR + CHAR
  }
  else if(!isNaN(x) && !isNaN(y)) { // this one add
  return +x + +y; 
  }
  else if(!isNaN(x) && isNaN(y)) { // num + char
  return 'Not compaitible(num+char)';
  }
  else if(isNaN(x) && !isNaN(y)) { // char + num
  return 'Not compaitible__(char+num)';
  }         
  return 'Just hanging'; // JK
  }
  
  //console.log(RESULT()); //You can use this too
  //alert(RESULT()); //You can use this too
  // expected output: "Not a Number!"
  document.getElementById("mandex").innerHTML =RESULT();