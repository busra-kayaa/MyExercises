var Ders_Adi = document.getElementById("Ders_Adi");
var Vize = document.getElementById("Vize");
var Final = document.getElementById("Final");
var Ortalama = document. getElementById("Ortalama");
var Gecme = document. getElementById("Gecme");
var Harf = document. getElementById("Harf");

function hesapla()
{
    var gecme ,harfNotu;

    if(Vize.value < 0)
        Vize.value = -1 * Vize.value;

    if (Final.value < 0)
        Final.value = -1 * Final.value;

    if (Vize.value > 100)
    {
        alert("Vize degeri 100'den büyük olamaz. Program sonlaniyor!!!");
        return;
    }

    if (Final.value > 100)
    {
        alert("Final değeri 100 den büyük olamaz. Program sonlaniyor!!!");
        return;
    }
        var sonuc = Number(Vize.value)*40/100 + Number(Final.value)*60/100;
    if (30>=sonuc && sonuc>0)
    {
        harfNotu = "FF"
    }
    else if (50>=sonuc && sonuc>30)
    {
        harfNotu = "DD"
    }
    else if(70>=sonuc && sonuc>50)
    {
        harfNotu = "CC"
    }
    else if(90>=sonuc && sonuc>70)
    {
        harfNotu = "BB"
    }
    else if(100>=sonuc && sonuc>90)
    {
        harfNotu = "AA"
    }
    
    if(sonuc>50)
    {
        var gecme = 'Geçti' ;
    }
    else
    {
        var gecme = 'Kaldi' ;
    }

   // gecme = sonuc > 50 ? "Geçti" : "Kaldı";

    let veriDizisi = [];
    veriDizisi.push(Ders_Adi.value);
    veriDizisi.push(Vize.value);
    veriDizisi.push(Final.value);
    veriDizisi.push(sonuc);
    veriDizisi.push(harfNotu);
    veriDizisi.push(gecme);
    
    let tablo = document.getElementById("veriTablosu");
    let satir = tablo.insertRow();

    veriDizisi.forEach(function(veri) {
        let hucre = satir.insertCell();
        hucre.textContent = veri;
    });
}




