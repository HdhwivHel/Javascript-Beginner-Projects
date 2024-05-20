//counts different types of characters

function chartype() {
  let str = process.argv[2];
  let n = 0;
  let ch = 0;
  let sch = 0;
  let len = str.length;

  str = str.toLowerCase();

  for (let i = 0; i < len; i++) {
    // console.log(i,("0123456789".indexOf(str.charAt(i))));
    if ("0123456789".indexOf(str.charAt(i)) != -1) {
      n += 1;
    } else if ("abcdefghijklmnopqrstuvwxyz".indexOf(str.charAt(i)) != -1) {
      ch += 1;
    } else {
      sch += 1;
    }
  }

  console.log(`Number of numbers: ${n}`);
  console.log(`Number of characters: ${ch}`);
  console.log(`Number of special characters: ${sch}`);
}
chartype();
