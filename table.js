var table = process.argv[2]//takes 1st args while executing
let till= process.argv[3] //takes 2nd args while executing

for(let i=1; i<=till;i++)
{
    console.log(`${table}*${i}= ${table*i}`)
}

