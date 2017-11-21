var students = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]


function fullName()
{
   for (var s=0; s<students.length; s++)
   {
       console.log (students[s].first_name, students[s].last_name);
   }
}
fullName();



var users = {
    'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
     ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
     ]
    }

    function namesANDnum()
    {
        console.log ("Students");
        for (var s=0; s<users.Students.length; s++)
        {
            console.log (s +  " - " + users.Students[s].first_name, users.Students[s].last_name +  " - ", users.Students[s].first_name.length + users.Students[s].last_name.length);
        }

        console.log ("Instructors");
        for (var i=0; i<users.Instructors.length; i++)
        {
            console.log (i + "-" + users.Instructors[i].first_name, users.Instructors[i].last_name + " - ", users.Instructors[i].first_name.length + users.Instructors[i].last_name.length);
        }
    }
    namesANDnum();