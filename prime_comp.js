function n_type(){
    n= process.argv[2]
    let totf =0;
    for(var i=1;i<=n;i++)
    {
        if(n%i==0)
        {
            totf+=1;
        }
    }

    if(totf>2)
    {
        console.log(`${n} is a composite number.`)
    }

    else if(n==1 || n==0)
        {
            console.log(`${n} is neither a prime nor a composite number.`)
        }
    
    else
    {
        console.log(`${n} is a prime number.`)
    }
}

n_type();