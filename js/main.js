
var a = Number(prompt("Введите 'a'"));
if (a==0){alert("Невозможное значение 'а'")}
	else {
		b = Number(prompt("Введите 'b'"));
		if (b==b) {
			c = Number(prompt("Введите 'c'"))
			var D=b*b-4*a*c;
		}

		if (D<0){
			alert("Нет действительных корней")
		}	else if (D==0){ 
				var x=(-b/(2*a));
				alert ("x1 = x2 = "+x);
			}	else {
					var x1=(-b+Math.sqrt(D))/(2*a);
					var x2=(-b-Math.sqrt(D))/(2*a);
					alert ("x1 = "+x1+"\n"+"x2 = "+x2);
				}
	}



