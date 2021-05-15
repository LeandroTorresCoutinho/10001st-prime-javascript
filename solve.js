let primeList = [2,3,5,7,9,11], iPrime = 12;

let isPrime = function(n){
    for(let i = 2;i < n - 1; i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}

function findPrimeNumber(n){
    while (primeList.length <n){
        if(isPrime(iPrime)){
            primeList.push(iPrime);
            iPrime += 1;
        }else{
            iPrime += 1;
        }
    }
    console.log(primeList[n - 1]);
    return primeList[n - 1];
}

findPrimeNumber(10003)