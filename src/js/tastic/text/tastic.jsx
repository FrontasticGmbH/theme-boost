import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withTranslatedTasticData } from '../../component/withTranslatedTasticData'

class TextTastic extends Component {
    render () {
        const { text } = this.props.data
        return <div className='text'>{text}</div>
    }
}

TextTastic.propTypes = {
    data: PropTypes.object.isRequired,
}

export default withTranslatedTasticData(TextTastic)
