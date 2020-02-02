function popup() {
			var name 			= document.getElementById('names').value,
					email 		= document.getElementById('emails').value,
					question 	= document.getElementById('questions').value,
					bin1 			= document.getElementById('bintang1'),
					bin2 			= document.getElementById('bintang2'),
					bin3 			= document.getElementById('bintang3');
			if (!name && !email && !question) {
				bin1.style.display = "block";
				bin2.style.display = "block";
				bin3.style.display = "block";
				return alert("Please Check Again! Your NAME, EMAIL & QUESTION is empty!!");
			}
			else if ( !email && !question) {
				bin1.style.display = "none";
				bin2.style.display = "block";
				bin3.style.display = "block";
				return alert("Please Check Again! Your EMAIL & QUESTION is empty!!");
			}
			else if ( !name && !question) {
				bin1.style.display = "block";
				bin2.style.display = "none";
				bin3.style.display = "block";
				return alert("Please Check Again! Your NAME & QUESTION is empty!!");
			}
			else if ( !email && !name) {
				bin1.style.display = "block";
				bin2.style.display = "block";
				bin3.style.display = "none";
				return alert("Please Check Again! Your NAME & EMAIL is empty!!");
			}
			else if (!name) {
				bin1.style.display = "block";
				bin2.style.display = "none";
				bin3.style.display = "none";
				return alert("Please Check Again! Your NAME is empty!!");
			}
			else if (!email) {
				bin1.style.display = "none";
				bin2.style.display = "block";
				bin3.style.display = "none";
				return alert("Please Check Again! Your EMAIL is empty!!");
			}
			else if (!question) {
				bin1.style.display = "none";
				bin2.style.display = "none";
				bin3.style.display = "block";
				return alert("Please Check Again! Your QUESTION is empty!!");
			}else { alert("Regristration Success!") }
		}
		
function menuClick() {
	var src   = document.getElementById('search-dropdown').style,
		menu  = document.getElementById('menu-dropdown').style;
	if (src.left == '0%' ) {
	src.left = "-95%";
	src.height = "0px";
	menu.left = "-95%";
	menu.height = "0px";
	menu.paddingTop = "0px";
	}
	else {
	src.left = "0%";
	src.height = "50px";
	menu.left = "0%";
	menu.height = "225px";
	menu.paddingTop = "5%";
	}
}