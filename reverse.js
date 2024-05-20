function reverse(){

    var str = process.argv[2];
    let len = str.length;
    let str1 ="";
    console.log(len);
    for(let i=len-1; i>=0;i--)
    {
        str1 = str1+ str.charAt(i)
    }
    console.log(str1)

}

reverse()
