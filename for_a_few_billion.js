var money=.01;
var day;


for (day=1; day<=30; day++)
{
    money=money*2;
}
console.log("After 30 days, I have $", money);


money=.01;
for (day=1; day<=30; day++)
{
    money=money*2;
    if (money>=10000.00)
    {
        break;
    }
}
console.log("After", day, "I have $", money);

money=.01;
for (day=1; day<100; day++)
{
    money=money*2;
    if (money>=1000000000)
    {
        break;
    }
}
console.log("After", day, "I have $", money);