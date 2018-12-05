import React from 'react'
import Api from '../Api'
import { Input, Button } from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react'


export default class MapView extends React.Component {
    state = {
        postcode: null,
        location: { lat: 51.5287718, lng: -0.2416815 },
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
            <div className="mapview-container">
                <div className="search-bar">
                    <Input placeholder="Postcode" onChange={this.handleSearch}
                    action={<Button color="purple" icon="search" content="Search" onClick={this.handleClick} />} />
                    <br/>
                </div>
                <GoogleMapReact 
                bootstrapURLKeys= {{ key: "AIzaSyBPzd82GVcFxlG_y97-IJmgAujkqCB0Fqs" }}
                defaultCenter= {this.state.location}
                defaultZoom={11}
                />
            </div>
        )
    }
}