//This function will return true 1 in 100 times.
function winner()
{
    var number;
    number=Math.floor(Math.random()*100)+1;
    if (number==1) 
         return(true);
    else 
        return(false);
}

//this returns a number between 50 and 100.
function winnings()
{
    return (Math.floor(Math.random()*51)+50);
}

function playslots(nQuarters)
{
    while (nQuarters--)
        {
            if (winner())
            {
                return (winnings() + nQuarters);
            }
        }
    return(0);    
}
playslots(500);