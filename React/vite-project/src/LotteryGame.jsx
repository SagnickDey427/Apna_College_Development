import { useState } from "react";
import Ticket from "./Ticket";
import { genArray} from "./helper";
import "./LotteryGame.css";

export default function LotteryGame({n,wincondition}){
    let [ticket,setTicket] = useState(genArray(n));
    let isWinner = wincondition(ticket);
    let generateTicket = ()=>{
        setTicket(genArray(n));
    }
    return (
        <div>
            <h2>Vegas mega lottery is here !</h2>
            <button onClick={generateTicket} className="design-btn">Generate Ticket</button>
            <Ticket ticket={ticket}/>
            {isWinner ? <p className="show-winner">Congrats You have won the lottery 🎉</p> : null}
        </div>
    )
}