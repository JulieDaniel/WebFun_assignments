
var arr = ["James", "Jill", "Jane", "Jack"];


function fancy (arr, symbol)
{
  for (var j=0; j<arr.length; j++)
    {
      console.log(j+ symbol+ arr[j]);
    }
     
}
fancy(arr, " --> ");