
var num=[12, "bananas", 36, 7, "nonsense"];

function numbersOnly(oldarr)
{
    var arr=[];
    for (var n=0; n<oldarr.length; n++)
    {
        if (typeof oldarr[n]==="number")
        
        {
            arr.push(oldarr[n]);
        }
    }
    return (arr);
}