import React from 'react'
import Api from '../Api'
import { Input, Button } from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react'


export default class MapView extends React.Component {
    state = {
        postcode: null,
        location: { lat: null, lng: null },
    }

    handleSearch = (postcode) => {
        this.setState({ postcode: postcode.target.value })
    }

    handleClick = () => {
        Api.findTarget({ postcode: this.state.postcode, rooms: 1, property: "flat" })
        .then(resp => resp.json())
        .then(resp => this.setState({ location: { lat: resp.data.raw_data[0].lat, lng: resp.data.raw_data[0].lng}}))
    }

    render(){
        return(
            <React.Fragment>
                    <Input placeholder="Postcode" onChange={this.handleSearch}
                    action={<Button color="purple" icon="search" content="Search" onClick={this.handleClick} />} />
                <div style={{ height: "80%", width: "100%" }}>
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