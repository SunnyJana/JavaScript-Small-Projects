
function billingFunction() {
	var a=document.getElementById('shippingName');
	var b=document.getElementById('shippingZip');
	var c=document.getElementById('billingName');
	var d=document.getElementById('billingZip');
	if (document.getElementById("same").checked==true) {
		c.value=a.value;
		d.value=b.value;
	}
	else{
		c.value=null;
		d.value=null;
	}

}