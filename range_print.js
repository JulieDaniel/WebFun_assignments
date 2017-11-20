function printrange(start, end, skip = 1)
{

if (start<end)
{
     for (var num=start; num<end; num+=skip)
    {
        console.log(num);
    }
}
else
{   
    // if going down in numbers, a neg skip is needed.
    if (skip>0)
    {   
        skip=-skip;
    }

     for (var num=start; num>end; num+=skip)
     {
         console.log(num);
     }
  }
}
printrange(2,10,2);