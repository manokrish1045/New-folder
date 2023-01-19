// fs - file system
const fs = require("fs")
// const quote = "dfiuvnfg fuheuf urvhbuif uifbiuryge iuyge uy"

// fs.writeFile('./awesome1.html', quote, (err) => {
//     console.log("Completed writing")
// })
// const quote2 = "dfiuvnfg fuheuf urvhbuif uifbiuryge iuyge uy";

// fs.writeFile("./backup/text-1.html", quote2, (err) => {
//     console.log("Completed writing")
// })
// node file.js
// const quote2 = "dfiuvnfg fuheuf urvhbuif uifbiuryge iuyge uy";
// for (let i = 1; i < 10; i++) {
//     fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//         console.log("Completed writing")
//     })
// }
const quote2 = "dfiuvnfg fuheuf urvhbuif uifbiuryge iuyge uy";

// const [, , noOffiles] = process.argv;
// for (let i = 1; i < noOffiles; i++) {
//     fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//         console.log("Completed writing")
//     })
// }

// fs.readFile("./cool1.txt", "uft-8", (err, data) => {
//     if (err) {
//         console.log("❌", err)
//     } else {
//         console.log(data)
//     }
// })
// const quote3 = "tert rtyhert etye tyherthyeth  "
// fs.appendFile(`./super.html`, "\n" + quote3, (err) => {
//     console.log("Completed writing")
// })
// fs.unlink(`./delete-txt`, (err) => {
//     console.log("deleted writing")
// })
const quote = Date.now

fs.writeFile('./text.txt', quote, (err) => {
    console.log("Completed writing")
})