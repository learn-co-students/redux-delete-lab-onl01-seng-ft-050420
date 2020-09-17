import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  handleDelete = (id) => {
    this.props.deleteBand(id)
  }

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <div>{this.props.bands.map(band=> 
          <Band name={band.name} id={band.id} handleDelete={this.handleDelete}/>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({type: 'DELETE_BAND', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
