
// ex 2

let file = "12,reza \n" + "22,zahra \n" + "11,mona \n";

let newfile = file.replaceAll(",", '":"').replaceAll("\n", '","');

newfile = newfile.substring(0, newfile.length - 2);

newfile='{"'+newfile+'}';

let result = JSON.parse(newfile);

console.log(result);
