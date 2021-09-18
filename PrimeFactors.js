const prompt=require('prompt-sync')();
const n = prompt('Enter number: ');
let array=new Array();

for(let i=2; i<=n; i++){
    if(n % i == 0){
        let count = 0;
        for (let j=1; j<=i; j++){
            let remainder=i % j;
            if(remainder==0){
                count++;
            }
        }
        if(count==2){
            primeFactorArray.push(i);
        }
    }
}

console.log("Prime Factors Are : " + array );