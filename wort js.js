var k = 5;
function input(){
    var tableau = new Array(20);
//var motd1 = document.getElementById("mot").value;
//var trad1 = document.getElementById("traduction").value;

tableau[0] = document.getElementById("mot1").value;
tableau[1] = document.getElementById("traduction1").value;
tableau[2] = document.getElementById("mot2").value;
tableau[3] = document.getElementById("traduction2").value; 
tableau[4] = document.getElementById("mot3").value;
tableau[5] = document.getElementById("traduction3").value;
tableau[6] = document.getElementById("mot4").value;
tableau[7] = document.getElementById("traduction4").value;
tableau[8] = document.getElementById("mot5").value;
tableau[9] = document.getElementById("traduction5").value;
tableau[10] = document.getElementById("mot6").value;
tableau[11] = document.getElementById("traduction6").value;
tableau[12] = document.getElementById("mot7").value;
tableau[13] = document.getElementById("traduction7").value;
tableau[14] = document.getElementById("mot8").value;
tableau[15] = document.getElementById("traduction8").value;
tableau[16] = document.getElementById("mot9").value;
tableau[17] = document.getElementById("traduction9").value;
tableau[18] = document.getElementById("mot10").value;
tableau[19] = document.getElementById("traduction10").value; 
var hz = "blaugrana";
var hz1 = hz.length;
for(var f = 0; f<=19; ++f){
    var long = tableau[f].length;
    if(long != 0){ 
sessionStorage.setItem(f , tableau[f]);}}
for(var i = 0; i<=19; ++i){
    
    document.getElementById(i).innerHTML = tableau[i]; } 
    alert(hz1);   
}

//add begin
