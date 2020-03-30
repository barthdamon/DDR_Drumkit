

var x = 0.66;


var justPlayed = false;
// float -- run the equation once
function msg_float(r)
{
	post("playing drums");
	post(r);
	x = r*x*(1.-x);
	outlet(0, r);
}

function bang()
{
	post(x);
	post();
}

function list(a)
{
	var note = arguments[0];
	var playing = arguments[1] > 0;
	if (playing)
	{
		post("playing");
		post(note);
		//outlet(0, note);
		var notemesg = "144, " + note +", 1";
		outlet(0, notemesg);
	}
	else
	{
		var notemesg = "144, " + note +", 0";
		outlet(0, notemesg);
	}
	//post("the list contains", arguments.length, "elements");
}