// import {createRoot} from "react-dom/client"
// //1. create a root
// const root = createRoot(document.getElementById('root'))
// //2. render some markup to the root
// root.render(<h1>Hello, react</h1>)

// import {createRoot} from "react-dom/client"
// const root = createRoot(document.getElementById('root'))
// root.render(
//   <ul>
//     <li>Super popular js library</li>
//     <li> COOL logo</li>
//     <li> Valuable skill</li>
//   </ul>
// )

//components basics
// import {createRoot} from "react-dom/client"
// const root = createRoot(document.getElementById('root'))
// function MainContent(){
//   return (<h1>React is great!</h1>)
// }
// root.render(
//   <div>
//     <MainContent/>
//   </div>
// )

// imperative coding(opposite of react)
// const h1 = document.createElement('h1')
// h1.textContent = "This is imperative coding"
// h1.className = "header"
// document.getElementById('root').appendChild(h1)


// import {createRoot} from "react-dom/client"
// import reactLogo from './assets/react.svg';
// const root = createRoot(document.getElementById('root'))
// root.render(
//   <div>
//   <img src = {reactLogo}>
//   </img>
//   <h1> This is another element</h1>
//   </div>
// )//only one parent eleemt should be their in render 


// import {createRoot} from "react-dom/client"
// import reactLogo from './assets/react.svg';
// const root = createRoot(document.getElementById('root'))
// root.render(
//   <main>
//     <img src={reactLogo} width="40px" alt="React logo"></img>
//     <h1>Fun facts about React!</h1>
//     <ul>
//       <li>Was first realeased in 2013</li>
//       <li>Maintained by META</li>
//       <li>COOOOOLLLL</li>
//       <li>POOPPP</li>
//       <li>rad</li>
//     </ul>
//   </main>
// )


//Components
// function TemporaryName(){
//    return (<main>
//     <img src={reactLogo} width="40px" alt="React logo"></img>
//     <h1>Fun facts about React!</h1>
//     <ul>
//       <li>Was first realeased in 2013</li>
//       <li>Maintained by META</li>
//       <li>COOOOOLLLL</li>
//       <li>POOPPP</li>
//       <li>rad</li>
//     </ul>
//   </main>
//    )
// }

// import {createRoot} from "react-dom/client"
// import reactLogo from './assets/react.svg';
// const root = createRoot(document.getElementById('root'))
// root.render(
//   <TemporaryName/>
// )


// import {createRoot} from "react-dom/client"
// import Header from './header.jsx'
// import MainContent from "./Maincontent.jsx";

// const root = createRoot(document.getElementById('root'));

// function Page(){
//   return(
//     <>
//     <Header/>
//     <MainContent/>
//     <Footer/>
//     </>
//   )
// }
// root.render(
//   <Page/>
// )

import {createRoot} from "react-dom/client"
import App from "./App.jsx"
const root = createRoot(document.getElementById('root'))

root.render(
  <App/>
)