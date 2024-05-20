function astrick(){
    let str = process.argv[2] //give argument after node stringtostar.js
    let length = str.length;
    console.log(length);
    let str1 = ""
    for (let i = 0; i < length; i++) {
        str1 = str1 + "*"
    }
    console.log(str1)
}

astrick()