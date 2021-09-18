let array= new Array();
let n=10;
for( i=0 ; i <n; i++)
{
    let randomNumber =( Math.floor(Math.random() * 10) % 3) ;
    array.push(randomNumber);
}

for (let i=0; i<n; i++){
    for (let j=i+1; j<n; j++) 
    { 
    for (let k=j+1; k<n; k++) 
        { 
            if (array[i]+array[j]+array[k] == 0) 
            { 
                console.log("Sum of 3 Integers "+ array[i] + " + " + array[j] + " + " + array[k] + " = 0" );
            } 
        } 
    }
} 