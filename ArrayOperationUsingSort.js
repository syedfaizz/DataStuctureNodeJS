const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter Date : ', (Date) => 
{
    rl.question('Please enter Month : ', (Month) => 
    {
        //if (Month >= 3   &&  Date >= 20  && Month <= 6 && Date <= 20)
        if (Month >= 3  && Month <= 6 )
        {
            //console.log(" 'True' - Date is :-"+ Date + " Month is :-"+Month+ " is Between June 20");
            if(Month>=3 && Month<6 && Date>=20)
            {
                console.log(" 'True' - Date is :-"+ Date + " Month is :-"+Month+ " is Between March 20");
            }
            else
            {
                if(Month<=6 && Month>3&& Date<=20)
                {
                    console.log(" 'True' - Date is :-"+ Date + " Month is :-"+Month+ " is Between June 20");
                }
                else
                {  
                    console.log("'false' - Date is :- "+ Date + " Month is :- "+Month+ " is Not Between March 20 And June 20 ");
                }
            }
        }
        else
        {  
            console.log("'false' - Date is :- "+ Date + " Month is :- "+Month+ " is Not Between March 20 And June 20 ");
        }
        
        rl.close();
    });
});