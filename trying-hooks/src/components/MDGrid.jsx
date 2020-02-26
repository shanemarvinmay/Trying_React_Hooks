import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const MDGrid = (props) => {
    const [light, flipSwitch] = useState({'status':false});
    // console.log(light['status']);
    return (
        <div>
            <Grid container spacing={3}>
                {/* full row */}
                <Grid item xs={12}>
                    <Paper>xs12</Paper>
                </Grid>
                {/* halfs */}
                <Grid item xs={6}>
                    <Paper>xs6</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper>xs6</Paper>
                </Grid>
                {/* quaters */}
                <Grid item xs={3}>
                    <Paper>xs3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>xs3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>xs3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>xs3</Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default MDGrid;