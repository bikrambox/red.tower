function report()
{
    var name = document.getElementById('name').value;
    var m1 = document.getElementById('softwareengineering').value;
    var m2 = document.getElementById('oracle').value;
    var m3 = document.getElementById('computernetwork').value;
    var m4 = document.getElementById('ita').value;
    var m5 = document.getElementById('ai').value;

    var total1 = document.getElementById('tot');
    var averagemarks = document.getElementById('avg');
    var name1 = document.getElementById('na');
    var res1 = document.getElementById('res');
    var grd1 = document.getElementById('grd');

     var grade;
    var graderesult;

    if(m1<30 || m2<30 || m3<30 || m4<30 || m5<30)
    {
             name1.innerHTML = name;
           grd1.innerHTML = "D";
           res1.innerHTML = "Fail";
    }
    else
    {
         name1.innerHTML = name;
    var tottalmarks = +m1+ +m2+ +m3+ +m4+ +m5;
    total1.innerHTML = tottalmarks;
    //alert(total1);
    var average = tottalmarks / 5;
    //average
     averagemarks.innerHTML = average;

     //grade
     if( average >= 75)
     {

              grade = "A+";
              graderesult = "Pass";
     }
      else if(average >= 60 & average < 75)
     {
          grade = "A";
          graderesult = "Pass";
     }
     else if(average >= 50 & average < 60)
     {
             grade = "B";
             graderesult = "Pass";
     }

     else if (average >= 30 & average <50)
     {
             grade = "C";
             graderesult = "Pass";
     }

     else if(average < 30)
     {
        grade = "D";
        graderesult = "Fails";
     }

     res1.innerHTML= graderesult;
     grd1.innerHTML = grade;
    }
}
