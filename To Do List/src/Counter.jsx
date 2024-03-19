import React,{useState} from "react";
function Counter() {
    const [count,setCount] = useState(0);

    let incCountFunc = () => {
        setCount(count+1);
    }
    
    let decCountFunc = () => {
        setCount(count-1);
    }
    
    let resetCountFunc = () => {
        setCount(0);
    }

    return(
        <div className="counterContainer">
            <p className="counterDisplay">{count}</p>
            <button className="counterButton" onClick={decCountFunc}>--</button>
            <button className="counterButton" onClick={resetCountFunc}>O</button>
            <button className="counterButton" onClick={incCountFunc}>++</button>
        </div>
    );
}
export default Counter