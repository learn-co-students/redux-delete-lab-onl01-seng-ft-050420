import React, { Component } from 'react'
import Band from './Band'

export default class Bands extends Component {

   


    render() {
        debugger
        return (
            <div>
                <ul>
                    {this.props.bands.map((band) =>  <Band key={band.id} band={band} deleteBand={this.props.deleteBand}/>)}
                </ul>
            </div>
        )
    }
}
