var arr=[23,2,4];
function mandex(arr){
    return (arr % 2==0);
}
var status=arr.some(mandex);
document.write("It's "+status);