import React from 'react'
import Api from '../Api'
import { Input, Button } from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react'


export default class MapView extends React.Component {
    state = {
        postcode: null,
        location: { long: null, lat: null },
    }

    handleSearch = (postcode) => {
        this.setState({ postcode })
    }

    handleClick = () => {
        Api.findTarget({ location: this.state.postcode, rooms: 1, property: "flat" })
    }

    render(){
        return(
            <React.Fragment>
                <div>
                    <Input placeholder="Postcode" onChange={this.handleSearch}
                    action={<Button color="purple" icon="search" content="Search" onClick={this.handleClick} />} />
                </div>
                <div style={{ height: "100vh", width: "100%" }}>
                    <GoogleMapReact 
                    bootstrapURLKeys= {{ key: "AIzaSyBPzd82GVcFxlG_y97-IJmgAujkqCB0Fqs" }}
                    defaultCenter= {this.state.location}
                    defaultZoom={11}
                    />
                </div>
            </React.Fragment>
        )
    }
}