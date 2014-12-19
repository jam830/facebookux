/*
*		ONLY FOR DEMOSTRATION USER EXPERIENCE OF FACEBOOK
*
*
*		DEVELOPED BY Angelo Pescatore
*		WEB SITE 	 www.angelopescatore.it
*		E-MAIL		 angelo.pescatore@me.com	
*
*
*
*/

var leftColumn = document.getElementById('leftCol');
var contentArea = document.getElementById('contentArea');
var buttonLogo = document.getElementById('u_0_e');//.children[0];

//sostituisco il logo
buttonLogo.innerHTML = '<a id="showHideLogo" href="#"><i class="img sp_mU59Yi_m4NY sx_281f5f"><u>Show / Hide </u></i></a>';

var logo = document.getElementById('showHideLogo');

var atimer = 0;
var timer= 0;

//fix the position of left column 
leftColumn.style.position = "fixed";

//add style
leftColumn.setAttribute("class","_4-u2 mbm _5jmm _5pat _5v3q _2l4l _x72");

//add margin and padding 
leftColumn.style.marginTop = "6px";
leftColumn.style.paddingTop = "12px";
leftColumn.style.paddingLeft = "4px";
leftColumn.style.paddingRight = "4px";
leftColumn.style.opacity = "1";


//add scroll in position fix
leftColumn.style.overflowY = "scroll";
leftColumn.style.height = "100%";

//asset margin of center column
contentArea.style.marginLeft = "4px";
contentArea.style.paddingRight = "6px";

//set event open or close left column on click logo facebook
logo.onclick = function(){
	if(!document.getElementById('contentArea').style.marginLeft){
		document.getElementById('contentArea').style.marginLeft= "4px";
		document.getElementById('contentArea').style.width="496px";
	}

	if(leftColumn.style.opacity>0){
		if(atimer){
			clearInterval(atimer);
		}
		if(timer){
			clearInterval(timer);	
		}
		leftColumn.style.opacity = parseFloat(leftColumn.style.opacity) - 0.1;
		timer = setInterval(function(){
			
			leftColumn.style.opacity = parseFloat(leftColumn.style.opacity) - 0.1;

			if(leftColumn.style.opacity<0){
				leftColumn.style.display="none";

				//modify the width of center column
				document.getElementById('contentArea').style.marginLeft = "-175px";
    		document.getElementById('contentArea').style.width = "673px";

				clearInterval(timer);
			}
		},50);
	}

	if(leftColumn.style.opacity<1){
		if(atimer){
			clearInterval(atimer);	
		}
		if(timer){
			clearInterval(timer);	
		}
		document.getElementById('contentArea').style.marginLeft = "4px";
    document.getElementById('contentArea').style.width = "496px";
		
		leftColumn.style.display = "block";
		leftColumn.style.opacity = parseFloat(leftColumn.style.opacity) + 0.1;
		atimer = setInterval(function(){
			
			leftColumn.style.opacity = parseFloat(leftColumn.style.opacity) + 0.1;

			if(leftColumn.style.opacity>1){
				clearInterval(atimer);
			}
		},50);
	}

}
