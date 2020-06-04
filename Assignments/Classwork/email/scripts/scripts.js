function validate() {

    if( document.myForm.Name.value == "" ) {
       alert( "Please provide your name!" );
       document.myForm.Name.focus() ;
       return false;
    }
    if( document.myForm.EMail.value == "" ) {
       alert( "Please provide your Email!" );
       document.myForm.EMail.focus() ;
       return false;
    }
    if( document.myForm.phone.value == "" || isNaN( document.myForm.phone.value ) ||
       document.myForm.phone.value.length != 10 ) {

       alert( "Please provide a valid Phone number of format ***-***-****." );
       document.myForm.phone.focus() ;
       return false;
    }
    if( document.myForm.Country.value == "-1" ) {
       alert( "Please provide th Department!" );
       return false;
    }
    return( true );
 }

