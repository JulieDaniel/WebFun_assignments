function birthdaycountdown(){
    var countdown=" days until my birthday.";

    var sadmessage= "It's still a long wait.";
    var excited="It's getting closer";
    var ecstatic="It's so close";
    var birthday="Let's have a party";

    for (var daysUntilMyBirthday=60; daysUntilMyBirthday>=0; daysUntilMyBirthday--)
    {
        console.log(daysUntilMyBirthday + countdown);

    if(daysUntilMyBirthday>30)
        {
            console.log(sadmessage);
        }
    else if(daysUntilMyBirthday>5)
        {
            console.log(excited);
        }
    else if (daysUntilMyBirthday>0)
        {
            console.log(ecstatic);
        }
    else if (daysUntilMyBirthday==0)
        {
            console.log(birthday);
        }
    }
}
birthdaycountdown();