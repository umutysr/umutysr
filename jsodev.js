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
    alert("Not-->bu uygulamada sonuçlar girdiden sonra geliyor örnek:1. 'sayi gir'-->sonuç");
    var x,y;
    for(x=1;x<=10;x++){
        y=Number(prompt(x));
        if(y<0){
            alert("negatif");
        }else if(y==0){
            alert("girilen sayı sıfır yada sayı girilmemiş");
        }else{
            alert("sayı pozitif");
        }
    }
}
function odev49(){
    var a,b,c,d;
    alert("paralelkenar alan bulma");
    alert("yüksekliği giriniz");
    a=Number(prompt(b));
    alert("yüksekliğin indiği kenarın uzunluğunu giriniz:");
    c=Number(prompt(d));
    alert("sonuc " + (a*c));
}
function odev64(){
    var b;
    alert("oğrenci not bilgisi");
    alert("oğrenci notunu giriniz:");
    var a=Number(prompt(b));
    if(0<a && a<=49){
        alert("başarısız");
    }else if(50<=a && a<=64){
        alert("orta");
    }else if(65<=a && a<=84){
        alert("iyi");
    }else if(85<=a && a<=100){
        alert("çok iyi");
    }else if(a<0 || a>100){
        alert("geçersiz not");
    }

}
function odev78(){
    var x,y,a,z,d;
    var c,f,k;
    alert("çeviri formulleri:");
    alert("ilk ölceği seçiniz:")
    alert("Celsius[1] Fahrenheit[2] Kelvin[3]");
    y=prompt(x);
    alert("dereceyi giriniz:");
    d=Number(prompt(z));
    
    if(y==1){
        alert("donuşecek degeri seçiniz:");
        alert("Celsius[1] Fahrenheit[2] Kelvin[3]");
        a=prompt(x)
        if(a==1){
            alert("Hata - Giriş yaptığınız birim değerine dönüştürme yapılamaz.");
        }else if(a==2){
            f= d*1.8+32;
            alert("sonuc " + f + " Fahrenheit");
        }else if(a==3){
            k= d+273.15;
            alert("sonuc: " + k + " Kelvin");
        }
    }else if(y==2){
        alert("donuşecek degeri seçiniz:");
        alert("Celsius[1] Fahrenheit[2] Kelvin[3]");
        a=prompt(x);
        if(a==1){
            c = (d-32)/1.8;
            alert("sonuc: " + c + " celsius");

        }else if(a==2){
            alert("Hata - Giriş yaptığınız birim değerine dönüştürme yapılamaz.");
        }else if(a==3){
            k=(d-32)/1.8000+273.15;
            alert("sonuc: "+ k + "Kelvin");
        }
    }else if(y==3){
        alert("donuşecek degeri seçiniz:");
        alert("Celsius[1] Fahrenheit[2] Kelvin[3]");
        a=prompt(x);
        if(a==1){
            c= d-273.15;
            alert("sonuc: " + c + "Celsius");
        }else if(a==2){
            f=(d-273.15)*1.8000+32.00;
            alert("sonuç: " + f + "Fahrenheit");
        }else if(a==3){
            alert("Hata - Giriş yaptığınız birim değerine dönüştürme yapılamaz.");
        }

        }
    }
    function deneme(){
        alert("ali");
    }
    
