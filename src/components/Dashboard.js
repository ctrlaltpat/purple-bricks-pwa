import React from 'react'
import { Grid } from 'semantic-ui-react';
import * as Charts from './charts'

export default class Dashboard extends React.Component {
    state = {

    }

    render(){
        return(
            <Grid columns={3}>
                <Grid.Row stretched>
                    <Grid.Column id="dialgraph">
                        <Charts.Dialgraph />
                    </Grid.Column>
                    <Grid.Column id="dialgraph">
                        <Charts.Dialgraph />
                    </Grid.Column>
                    <Grid.Column id="dialgraph">
                        <Charts.Dialgraph />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}