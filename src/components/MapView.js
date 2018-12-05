import React from 'react'
import Api from '../Api'
import { Input, Button, Card } from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react'

const mapStyles = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#263c3f"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#6b9a76"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#B6B8D6"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#212a37"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9ca5b3"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#6F58C9"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#1f2835"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#f3d19c"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#2f3948"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#515c6d"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    }
  ]

export default class MapView extends React.Component {
    state = {
        postcode: null,
        location: { lat: 51.5287718, lng: -0.2416815 },
        info: null,
        card: false
    }

    handleSearch = (postcode) => {
        this.setState({ postcode: postcode.target.value })
    }

    createTarget = () => {
        Api.setTarget({ target: parseInt(this.state.info.data.average) * 0.25, saving: this.props.saving, postcode: this.state.postcode, rooms: 1, property: "flat" })
    }

    handleClick = () => {
        Api.findTarget({ postcode: this.state.postcode, rooms: 1, property: "flat" })
        .then(resp => resp.json())
        .then(resp => this.setState({ location: { lat: resp.data.raw_data[0].lat, lng: resp.data.raw_data[0].lng}, card:true, info: resp}))
    }

    renderMarkers(map, maps) {
        if (this.state.card) {
            let marker = new maps.Marker({
                position: this.state.location,
                map
            })}
    }

    render(){
        const mapOptions = {
            panControl: false,
            mapTypeControl: false,
            scrollwheel: false,
            fullscreenControl: false,
            styles: mapStyles
        };
        return(
            <div className="mapview-container">
                <div className="search-bar">
                    <Input placeholder="Postcode" onChange={this.handleSearch}
                    action={<Button color="purple" icon="search" content="Search" onClick={this.handleClick} />} />
                    <br/>
                </div>
                <GoogleMapReact
                options = {mapOptions}
                bootstrapURLKeys= {{ key: "AIzaSyBPzd82GVcFxlG_y97-IJmgAujkqCB0Fqs" }}
                center = {this.state.location}
                defaultZoom={12}
                onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
                yesIWantToUseGoogleMapApiInternals
                />
                {this.state.card 
                ? <Card>
                <Card.Content>
                    <Card.Header>
                        {this.state.info.postcode}
                    </Card.Header>
                    <Card.Meta>
                        Average Cost: <span>£{this.state.info.data.average}</span>
                    </Card.Meta>
                    <Card.Meta>
                        Estimated Deposit: <span>£{parseInt(this.state.info.data.average) * 0.25}</span>
                    </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <Button icon="heart" color="purple" onClick={this.createTarget} />
                </Card.Content>
            </Card>
            : null
            
        }
                
            </div>
            
        )
    }
}