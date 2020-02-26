import React, {useState, useEffect} from 'react';

const UseEffect = (props) => {
    const [time, getTime] = useState({'time':new Date()});
    useEffect( () => {
        console.log(`Time is now:${new Date()}`);
    });
    // console.log(light['status']);
    return (
        <div>
            <p>{time["time"].toString()}</p>
            <button onClick={() => getTime({"time":new Date()})}>
                Get Time!
            </button>
        </div>
    );
};

export default UseEffect;