//1.registering service worker (which we done in html file with in script tags)

//create app version
var appVersion = 'v.0.3'

// files you want to save as cache
var files = [
    './',
    './practice.html',
    './login.js',
    './serviceWorker.js',
    `./welcomePage.html`,
    `https://jsonplaceholder.typicode.com/users`,
]
//2.install (we say service worker to start cache our files)
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(appVersion)
            .then(cache => {
                return cache.addAll(files)
                    .catch(err => {
                        console.error('error in cache files', err)
                    })
            })
    )
    console.info('sw installed successfully')
    self.skipWaiting()
})

//var url = `https://jsonplaceholder.typicode.com/users/1`

//2.Activate (we say service worker to keep current files in cache and delete else files)
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(cacheName => {
                return Promise.all(
                    cacheName.map(cache => {
                        if (cache !== appVersion) {
                            console.info('Deleting old cache', cache)
                            return caches.delete(cache)
                        }
                    })
                )
            })
    )
    return self.clients.claim()
})
// On the Service Worker side we have to listen to the message event

let getVersionPort;
let count = 0;
const fetchApiData = () => {
    return fetch(`https://jsonplaceholder.typicode.com/users`
        , {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
        .then(result => result.json())
        .then(data => {
            return userData = data;
        })
}
let userData = fetchApiData()

console.log(`userData`, userData)

self.addEventListener("message", event => {
    if (event.data && event.data.type === 'INIT_PORT') {
        getVersionPort = event.ports[0];
    }

    if (event.data && event.data.type === 'INCREASE_COUNT') {
        getVersionPort.postMessage({ payload: [++count, 'my counter', userData] });
    }
})



//fetch api data

self.addEventListener('fetch', event => {
    console.log(`event request url`, event.request.url)
    event.respondWith(
        caches.match(event.request)
            .then(res => {
                if (res) {
                    return res
                }
                else {
                    return fetch(event.request) && fetchApiData()
                }
            })
    )
})





















// function fetchApiData(lnk) {
//     debugger
//     var responce;
//     fetch(lnk, {
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         }
//     })
//         .then(res => res.json() )
//         .then(data => {
//              console.log(`data`, data)
//             return userData=data
//         })
//         .catch(err => { return console.log(`err`, err) })
//     console.log(`responce`, responce)
// }






  // self.addEventListener('message', (event) => {
//    // if (event.data && event.data.type === 'MESSAGE_IDENTIFIER') {
//     if (event.data) {
//         console.log(`event.data`, event.data)
//       // do something
//     }
//   });
// var linkarr =[
//     `${event.request}`,
//     `https://jsonplaceholder.typicode.com/users`
// ]