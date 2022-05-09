import React, {useState} from 'react'

function Zadtwo(){
    
    const [sum, setSum ]=useState(0);
    const [inp, setInp ] = useState(0);
    const hPlus = () => {
        setSum(sum+1);
    }
    const hMinus = () => {
        setSum(sum-1);
    }
    const holder = (event) => {
        event.preventDefault();
        
        setInp(event.target.value);
    }
    const hSubmit=(event)=>{
        event.preventDefault();
        setSum(inp);
    }
    const hReset=()=> {
        setSum(0);
    }
    return(
        <div>
            <button onClick={hPlus}>+</button>
            <button onClick={hMinus}>-</button>

            <form onSubmit={hSubmit}>
                <input placeholder="number" name="number"           type="number" onChange={holder}></input>
                <button type='submit' value="Submit" >Zmień</button>
                
            </form>

            <h4>stan licznika: {sum}</h4>

            <button  onClick={hReset}>Reset</button>
        </div>
    )
}
export default Zadtwo;