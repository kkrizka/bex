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
	updateTable(parseInt(hexval,16));
}

function updateFromDec(element)
{
	decval=element.value;
	document.getElementById("hex").value=Dec2Hex(decval);
	document.getElementById("bin").value=Dec2Bin(decval);
	updateTable(parseInt(decval,10));
}

function updateFromBin(element)
{
	binval=element.value;
	document.getElementById("hex").value=Bin2Hex(binval);
	document.getElementById("dec").value=Bin2Dec(binval);
	updateTable(parseInt(binval,2));
}

function updateFromTable()
{
	// Build up bitstring
	bitstring="";
	for(i=31;i>=0;i--)
	{
		td=document.getElementById("bit"+pad(i,2));
		bitstring+=td.innerHTML;
	}

	document.getElementById("hex").value=Bin2Hex(bitstring)
	document.getElementById("dec").value=Bin2Dec(bitstring)
	document.getElementById("bin").value=bitstring
}

function updateTable(newval)
{
	binstring=pad(Dec2Bin(newval),32);
	for(i=31;i>=0;i--)
	{
		td=document.getElementById("bit"+pad(i,2));
		td.innerHTML=binstring.charAt(31-i)
	}	
}

/*
 * Bit table
 */
function toggleBit(bittd)
{
	bitval=parseInt(bittd.innerHTML,'2');
	bitval=bitval?0:1;
	bittd.innerHTML=bitval;

	updateFromTable();
}