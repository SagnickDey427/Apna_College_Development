import { useState } from "react";


function Ludoboard(){
    let [moves,setMoves] = useState({blue:0,red:0,green:0,yellow:0});

    let blueMoves =()=>{
        setMoves(()=>{
            return {...moves, blue:moves.blue+1}
        })
        console.log(`blue moves =${moves.blue}`);
    }
    let redMoves =()=>{
        setMoves(()=>{
            return {...moves, red:moves.red+1}
        })
        console.log(`red moves =${moves.red}`);
    }
    let yellowMoves =()=>{
        setMoves(()=>{
            return {...moves, yellow:moves.yellow+1}
        })
        console.log(`yellow moves =${moves.yellow}`);
    }
    let greenMoves =()=>{
        setMoves(()=>{
            return {...moves, green:moves.green+1}
        })
        console.log(`green moves =${moves.green}`);
    }

    return (
        <div className="ludo-board">
            <p>Blue moves: {moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={blueMoves}>+1</button>
            <p>Yellow moves: {moves.yellow}</p>
            <button style={{backgroundColor:"yellow"}} onClick={yellowMoves}>+1</button>
            <p>Red moves: {moves.red}</p>
            <button style={{backgroundColor:"red"}} onClick={redMoves}>+1</button>
            <p>Green moves: {moves.green}</p>
            <button style={{backgroundColor:"green"}} onClick={greenMoves}>+1</button>
        </div>
    )
}

export default Ludoboard;