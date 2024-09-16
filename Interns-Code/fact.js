const factorial = (n)=>{

    if(n<0){
        return "Factorial for 0 does not exist";
    }

    let ans = 1;
    for(let i=n;i>=1;i--){
        ans = ans*i;
    }

    return ans;
}

console.log(factorial(5));