let numer1= "";
let numer2= "";
let wynik ="";
let wybieranumer2 = false;
let dzialanie = "";
function wybierz(a)
{
	if(!wybieranumer2)
	{
		numer1+=a;
		document.getElementById("wynik").innerHTML = numer1;
	}
	else
	{
		numer2+=a;
		document.getElementById("wynik").innerHTML = numer2;
	}
}
function dzialanko(a)
{
	wybieranumer2 = true;
	dzialanie=a;
}


function wyswietl()
{
	numer1= +numer1;
	numer2= +numer2;
	switch(dzialanie)
	{
		case "-":
			wynik = numer1-numer2;
			break;
	
		case "+":
			wynik =numer1+numer2;
			break;
	
		case "*":
			wynik =numer1*numer2;
			break;
	
		case "/":
			wynik =numer1/numer2;
			break;
	
		default:
			wynik = "BLAD";
	}
	document.getElementById("wynik").innerHTML = wynik;
	//alert(numer1);
	numer1 = "";
	numer2= "";
	dzialanie="";
	wybieranumer2 = false;
}
	