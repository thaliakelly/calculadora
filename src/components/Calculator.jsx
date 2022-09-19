import React  from "react";
import { useState } from "react";
import './Calculator.css'



const Calculator= () =>{
    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operador, setOperador] = useState();

    function inputNum({target}){
        const input = target.value;
        if(num === 0){
            setNum(input);
        }else{
            setNum(num + input);
        }
    }

    function clear(){
        setNum(0);
    }

    function porcentagem(){
        setNum(num / 100);
    }

    function maisMenos(){
        if(num > 0){
            setNum(-num);
        }else{
            setNum(Math.abs(num));
        }
    }

    function hendler({target}){
        const OperadorInput = target.value;
        setOperador(OperadorInput);
        setOldNum(num);
        setNum(0);
    }

    function calcula(){
        if(operador === '/'){
            setNum(Number(oldNum) / Number(num))
        }else if(operador === 'X'){
            setNum(Number(oldNum) * Number(num))
        }else if(operador === '-'){
            setNum(Number(oldNum) - Number(num))
        }else if(operador === '+'){
            setNum(Number(oldNum) + Number(num))
        }
    }



       
    return (
        

        <div >
            <div className="wrapper">
            
            <h1 className="res">{num}</h1>
            <button onClick={clear}>AC</button>
            <button onClick={maisMenos}>+/-</button>
            <button onClick={porcentagem}>%</button>
            <button className="orage" onClick={hendler} value='/'>/</button>
            <button className="gray" onClick={inputNum} value={7} >7</button>
            <button className="gray" onClick={inputNum} value={8}>8</button>
            <button className="gray" onClick={inputNum} value={9}>9</button>
            <button className="orage" onClick={hendler} value='X'>X</button>
            <button className="gray" onClick={inputNum} value={4}>4</button>
            <button className="gray" onClick={inputNum} value={5}>5</button>
            <button className="gray" onClick={inputNum} value={6}>6</button>
            <button className="orage" onClick={hendler} value='-'>-</button>
            <button className="gray" onClick={inputNum} value={1}>1</button>
            <button className="gray" onClick={inputNum} value={2}>2</button>
            <button className="gray" onClick={inputNum} value={3}>3</button>
            <button className="orage" onClick={hendler} value='+'>+</button>
            <button className="gray" onClick={inputNum} value={0}>0</button>
            <button className="gray" onClick={inputNum} value={','}>,</button>
            <button className="gray-hidden">,</button>
            <button className="orage" onClick={calcula}>=</button>
            </div>
        </div>
    )

    
}

export default Calculator