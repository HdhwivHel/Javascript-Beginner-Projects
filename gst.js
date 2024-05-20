// takes parametric argument

function gst(val,amt,$gst)
{
    switch(val){
        
        case 1://Interstate
                var final=0;
                final = (($gst/100)*amt) +(amt);
                var gstval =final - amt;
                console.log("Cost Price: "+amt);
                console.log("GST amt: "+gstval);
                console.log("Total: "+final); 
                break;

        case 2: //Intra-State
                let cgst= ((($gst/2.0)/100.0)*amt);
                let sgst = cgst;
                final = amt+sgst+cgst;
                console.log("Cost Price: "+amt);
                console.log("CGST amt: "+cgst);
                console.log("SGST amt: "+sgst)
                console.log("Total: "+final); 
                break;
            
            default: console.log("INVALID OPTION!!!")
                     break;    
            
        }
}

gst(2,1000,10)