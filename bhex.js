/*
 * Credit: http://stackoverflow.com/a/12987042
 */
//Useful Functions
function checkBin(n){return/^[01]{1,64}$/.test(n)}
function checkDec(n){return/^[0-9]{1,64}$/.test(n)}
function checkHex(n){return/^[0-9A-Fa-f]{1,64}$/.test(n)}
function pad(s,z){s=""+s;return s.length<z?pad("0"+s,z):s}
function unpad(s){s=""+s;return s.replace(/^0+/,'')}

//Decimal operations
function Dec2Bin(n){if(!checkDec(n)||n<0)return 0;return parseInt(n).toString(2)}
function Dec2Hex(n){if(!checkDec(n)||n<0)return 0;return parseInt(n).toString(16)}

//Binary Operations
function Bin2Dec(n){if(!checkBin(n))return 0;return parseInt(n,2).toString(10)}
function Bin2Hex(n){if(!checkBin(n))return 0;return parseInt(n,2).toString(16)}

//Hexadecimal Operations
function Hex2Bin(n){if(!checkHex(n))return 0;return parseInt(n,16).toString(2)}
function Hex2Dec(n){if(!checkHex(n))return 0;return parseInt(n,16).toString(10)}

/*
 * Update functions
 */
function updateFromHex(element)
{
	hexval=element.value;
	document.getElementById("dec").value=Hex2Dec(hexval);
	document.getElementById("bin").value=Hex2Bin(hexval);
}

function updateFromDec(element)
{
	decval=element.value;
	document.getElementById("hex").value=Dec2Hex(decval);
	document.getElementById("bin").value=Dec2Bin(decval);
}

function updateFromBin(element)
{
	binval=element.value;
	document.getElementById("hex").value=Bin2Hex(binval);
	document.getElementById("dec").value=Bin2Dec(binval);
}