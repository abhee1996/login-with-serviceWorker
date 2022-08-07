// // // // // // // // // //
// Login with localStorage //
// // // // // // // // // //
let formNode = document.querySelector('#form')
var eles = ['input', 'input', 'input', 'input']
var atr = ['type', 'id', 'placeholder']
var atrV = [
    ['text', 'fname', 'First Name'],
    ['text', 'lname', 'Last Name'],
    ['text', 'age', 'age'],
    ['button', 'btn', 'login']
]

//eleCreator(formNode,eles,atr,atrV)
let fname = document.getElementById('fname') //textContent //innerText
let age = document.getElementById('age') //textContent //innerText
let lname = document.getElementById('lname') //textContent //innerText
let loginBtn = document.getElementById('login')
let removeBtn = document.getElementById('remove')
loginBtn.addEventListener('click', login)
removeBtn.addEventListener('click', removeloc)

function login() {
    debugger
    let fn = fname.value
    let ln = lname.value
    let ag = age.value
    var person = { "name": `${fn} ${ln}`, "age": `${ag}` };
    if (localStorage.length >= 0) {
        if (fn !== '' && ln !== '') {
            window.localStorage.setItem('person', JSON.stringify(person))
            let getPerson = JSON.parse(localStorage.getItem('person'))
            document.write(`welcome back  ${getPerson.name} 
            <br>
            <button id="showApi" > show api</button>
            <br>
            <div id="showApiData" >hello</div>
            `)

        }
        else {
            document.write('incorrect credidentials')
            window.localStorage.setItem('First Name', null)
            window.localStorage.setItem('Last Name', null)
        }
    }


}
let getItems = JSON.parse(localStorage.getItem('person'))
function removeloc() {
    let itemId = document.getElementById('fname').value
    addInhtml(JSON.stringify(getItems));
    delete getItems[itemId];
    localStorage.setItem('person', JSON.stringify(getItems));
    addInhtml(localStorage.getItem("person"));

    return localStorage.setItem("person", JSON.stringify(getItems));
}
function addInhtml(x) {
    document.body.innerHTML += "<p>" + x + "</p>";
};
// let showApi = document.getElementById('showApi').value

