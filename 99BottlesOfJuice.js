var num = 99;
var lyrics = "";

while (num > 0) {
    if (num === 1) {
        lyrics = num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!";
        console.log(lyrics);
    }
        else if (num === 2) {
        lyrics = num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottle of juice on the wall!";
        console.log(lyrics);
    }
        else {
            lyrics = num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!";
            console.log(lyrics);
        }
    num --;
}
