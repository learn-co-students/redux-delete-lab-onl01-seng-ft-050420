import React from 'react'
import Band from './Band.js'

class Bands extends React.Component {

    renderBands(){
        return this.props.bands.map( band => {
            return <Band band={band} key={band.id} deleteBand={this.props.deleteBand}/>
        })
    }

    render(){
        return <ul>{this.renderBands()}</ul>
    }
}

export default Bands