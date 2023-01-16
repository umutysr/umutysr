function odev7(){
    alert("beş sayının ortalaması");
    alert("10,20,30,40,60");
    var x=[10,20,30,40,60];
    var i;
    var y=0;
    for(i=0;i<5;i++){
        y=x[i]+y;
    }

    alert(y/5);
}
function odev18(){
    var x;
    alert("kullanıcıdan girilen sayının tekmi çiftmi olduğunu bulan program");
    var y= Number(prompt(x));
    if(y%2==0){
        alert("çift sayı " + y);
    }else{
        alert("tek sayı " + y)
    }
}
function odev29(){
    alert("**sicil numarası çalışma saati ve saat ücretini giriniz**");
    var x,y,z;
    alert("sicil numarasını giriniz:");
    var a=prompt(x);
    alert("çalışma saatini giriniz:");
    var b=Number(prompt(y));
    alert("saat ücretini giriniz:");
    var c=Number(prompt(z));
    alert("sicil numarası "+a);
    alert( "alınması gereken para " +  (b*c));
}
function odev40(){
    alert("10 sayının negatif mi pozitif mi oldugunu bulan program");
    var x,y;
    for(x=1;x<=10;x++){
        y=Number(prompt(x));
        if(y<0){
            alert("negatif");
        }else if(y==0){
            alert("sayı 0");
        }else{
            alert("sayı pozitif");
        }
    }
}