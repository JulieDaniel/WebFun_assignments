var hour=12;
var min=58;
var AMorPM="PM";

var preamble;
var ending;


if (min<30)
{
    preamble="It's just after";
}
else if (min>30)
{
    if (hour<12)
    {
     hour=hour+1;   
    }
    else
    {
        hour=1;
    }
    
    preamble="It's almost";
}
else
{   
    preamble="It's half past";
}



if (AMorPM =="AM")
{
    ending="in the morning.";
    if ((hour==12) && (min==0))
    {
        preamble= "It's";
        ending="midnight.";
    }
}
else 
{   
    if ((hour>5) && (hour!=12))
        ending="in the evening.";
    else
        ending="in the afternoon.";
    if ((hour==12) && (min==0))
        {
            preamble= "It's";
            ending="noon.";
        }
}


console.log(preamble, hour, ending);
