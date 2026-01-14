import TicketNum from "./TicketNum";
import "./Ticket.css";

export default function Ticket({ticket}){
    return (
        <div className="ticket-container">
            <p>Your ticket number</p>
            {ticket.map((num,idx)=>{
                return <TicketNum num={num} key={idx}/>
            })}
        </div>
    )
}