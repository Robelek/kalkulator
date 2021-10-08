let numer1= "";
let numer2= "";
let wynik ="";
let wybieranumer2 = false;
let wykonaldzialanie = false;
let dzialanie = "";
function wybierz(a)
{
	if(wykonaldzialanie)
	{
		wykonaldzialanie=false;	
		numer1 = "";
		numer2= "";
		dzialanie="";
		wybieranumer2 = false;

	}
	
		if(!wybieranumer2)
		{
			if(a=="DEL")
			{
				numer1="";
				

			}
			else
			{
				numer1+=a;
				
			}
			softwyswietl(numer1);
			
		}
		else
		{
			if(a=="DEL")
			{
				numer2="";
				
			}
			else
			{
				numer2+=a;
				
			}
			softwyswietl(numer2);
		}

	
}
function dzialanko(a)
{
	wybieranumer2 = true;
	dzialanie=a;
	if(dzialanie=="pierw")
	{
		wyswietl();
	}
}
function softwyswietl(a)
{
	if(a=="")
	{
		a=0;
	}
	document.getElementById("wynik").innerHTML = a;
}

function wyswietl()
{
	if(wykonaldzialanie)
	{
		numer1=wynik;
	}
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
		case "pierw":
			wynik = Math.sqrt(numer1)
			break;
		default:
			wynik = "BLAD";
	}
	wykonaldzialanie=true;
	document.getElementById("wynik").innerHTML = wynik;
	
	//alert(numer1);
	//numer1 = "";
	//numer2= "";
	//dzialanie="";
	//wybieranumer2 = false;
}
	