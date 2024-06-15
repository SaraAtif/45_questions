//Question #40
function makeAlbum(singer, title, track) {
    var album = { singer: singer, title: title, track: track };
    if (track) {
        album["track"] = track;
    }
    return album;
}
console.log(makeAlbum("singer1", "The first Album"));
console.log(makeAlbum("singer2", "The second Album"));
console.log(makeAlbum("singer3", "The third Album", "12"));
//Question #41
//array function loop
var Magicians = ["magician1", "magician2", "magician3"];
function showMagician(Magicians) {
    Magicians.forEach(function (magician) {
        console.log(magician);
    });
}
showMagician(Magicians);
//Question #42
function make_great(Magicians) {
    for (var i = 0; i < Magicians.length; i++) {
        Magicians[i] = Magicians[i] + "The great";
    }
}
make_great(Magicians); //original array
