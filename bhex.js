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
 * Credit: http://www.qodo.co.uk/assets/files/uploads/javascript-restrict-keyboard-character-input.html
 */
// create as many regular expressions here as you need:
var hexOnly = /[0-9a-fA-F]/g;
var digitsOnly = /[0-9]/g;
var binOnly = /[01]/g;

function restrictCharacters(myfield, e, restrictionType) {
    if (!e) var e = window.event
    if (e.keyCode) code = e.keyCode;
    else if (e.which) code = e.which;
    var character = String.fromCharCode(code);
    
    // if they pressed esc... remove focus from field...
    if (code==27) { this.blur(); return false; }
	
    // ignore if they are press other keys
    // strange because code: 39 is the down key AND ' key...
    // and DEL also equals .
    if (!e.ctrlKey && code!=9 && code!=8 && code!=36 && code!=37 && code!=38 && (code!=39 || (code==39 && character=="'")) && code!=40) {
	if (character.match(restrictionType)) {
	    return true;
	} else {
	    return false;
	}
	
    }
}


/*
 * Update functions
 */
function updateAll(newval)
{
    document.getElementById("hex").value=newval.toString(16);
    document.getElementById("dec").value=newval.toString(10);
    document.getElementById("bin").value=newval.toString(2);
    updateTable(newval);
}

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
	td.setAttribute("title","bit "+i.toString()+": "+td.innerHTML)
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
	td.setAttribute("title","bit "+i.toString()+": "+binstring.charAt(31-i))
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

/*
 * Operations
 */
function bitshift_right()
{
    value=parseInt(document.getElementById("dec").value)
    newvalue=value>>1
    updateAll(newvalue)
}

function bitshift_left()
{
    value=parseInt(document.getElementById("dec").value)
    newvalue=value<<1
    updateAll(newvalue)
}
