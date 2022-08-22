let head = document.getElementsByTagName('head')[0]
console.log(head)

let child = document.createElement("style")
// child.innerHTML = `
//     body { background: red; }
// `

let header = document.getElementsByClassName('header')[0]
let nav = document.getElementsByClassName('nav')[0]

document.body.removeChild(nav)
head.appendChild(child)