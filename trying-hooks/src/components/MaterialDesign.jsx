import React, {useState} from 'react';
import Button from '@material-ui/core/Button';

const MaterialDesign = (props) => {
    const [light, flipSwitch] = useState({'status':false});
    // console.log(light['status']);
    return (
        <div>
            {/* <button onClick={() => flipSwitch({"status":!light['status']})}>Status: {light['status'].toString()}</button> */}
            <Button variant="contained" color="primary">Cool Looking</Button>
        </div>
    );
};

export default MaterialDesign;