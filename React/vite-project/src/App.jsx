import './App.css'
import ProductTab from "./ProductTab.jsx";
import MessageBox from './MessageBox.jsx';
import Ludoboard from './Ludoboard.jsx';
import TodoApp from './TodoApp.jsx';
import LotteryGame from './LotteryGame.jsx';
import Ticket from './Ticket.jsx';
// import { sumArr } from './helper.js';
import Form from './Form.jsx';
import CommentsForm from './CommentsForm.jsx';
import CommentsTab from './Allcomments.jsx';
import Joke from './Joke.jsx';

// function App() {
//   return (
//     <>
//       <MessageBox username="Srijana" textcolor="red"/>
//       <ProductTab/>
//     </>
//   )
// }

//-----------Ludo board----------------
// function App(){
//   return (
//     <>
//       <h3>Ludo Game Board</h3>
//       <Ludoboard />
//     </>
//   )
// }


//-----------------To do App-------------------
// function App(){
//   return (
//     <>
//       <h3>Todo List</h3>
//       <hr/>
//       <TodoApp/>
//     </>
//   )
// }

//------------Lottery Game------------
// function App(){
//   let wincondition= (ticket)=>{
//     return sumArr(ticket) == 15
//   }
//   return (
//     <>
//       <h2>Lottery Game , this is your chance to win big !!</h2>
//       <LotteryGame n={3} wincondition={wincondition}/>
//     </>
//   )
// }

//---------------Forms in React --------------
// function App(){
//   return (
//     <>
//       <Form/>
    
//     </>
//   )
// }

// function App(){
//   return (
//     <>
//       <div>
//           <h2>Comment your thoughts on this movie.</h2>
//           <CommentsTab/>
//       </div>
//     </>
//   )
// }

//------------ useEffect() in React ---------
function App(){
  return (
    <>
      <h2>Jokes !</h2>
      <Joke/>
    </>
  )
}

export default App
