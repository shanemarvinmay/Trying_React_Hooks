import React, {useState} from 'react';

const BasicHook = (props) => {
    const [light, flipSwitch] = useState({'status':false});
    console.log(light['status']);
    return (
        <div>
            <button onClick={() => flipSwitch({"status":!light['status']})}>Status: {light['status'].toString()}</button>
        </div>
    );
};

export default BasicHook;