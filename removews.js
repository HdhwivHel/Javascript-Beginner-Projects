//removes all whitespace from string input
function removws()
{
    var str = process.argv[2];
    var len = str.length;
    console.log(len);
    var i=-1;
    var str1="";
    while(i<len)
    {
        i+=1;
        if(str.charAt(i)!=' ')
        {
            str1= str1+str.charAt(i);        
        }
    
        else{
            continue; // returns to iteration condition directly

        }

        

        

    }

    console.log(str1);

}

removws()
