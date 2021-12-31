let fname = document.getElementById('fname') 
let age = document.getElementById('age') 
let lname = document.getElementById('lname') 
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
            <div id="showApiData" ></div>
            <script>
            var showApi =document.getElementById('showApi')
            var showApiData = document.getElementById('showApiData')
            showApi.addEventListener('click',function(){
                showApiData.innerText = "hello" +" " + event.data.payload[2]
            })
            </script>
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