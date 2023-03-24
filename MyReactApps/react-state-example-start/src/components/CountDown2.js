import { useState, useEffect } from 'react';

const CountDown2 = (props) => {
    let [count, setCount] = useState(props.startValue);

    useEffect(() => {
       const timerID = setInterval(() => {
            setCount(count - 1);
        }, 1000);

        if(!count){
            clearInterval(timerID);
        }
        
        return () => {
            clearInterval(timerID);
        }
    }, [count]);

    // useEffect(() => {});

    if(count > 0){
        return <h1>Time remaining: {count} seconds </h1>
    }
    else {
       // clearInterval(this.timerID);
        return <h1>Time is up</h1>
    }

    return <h1>Hi from CountDown 2: {count}</h1>
};

export default CountDown2;