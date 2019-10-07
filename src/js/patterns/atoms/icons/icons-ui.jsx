import React, { Component, Fragment } from 'react'

import ComponentInjector from '../../../app/injector'

import AtomsIcon from './icon'

class AtomsIconUi extends Component {
    render () {
        return (<Fragment>
            <AtomsIcon icon='arrow-left' iconSize='xl' />
            <AtomsIcon icon='bag' iconSize='xl' />
            <AtomsIcon icon='check' iconSize='xl' />
            <AtomsIcon icon='chevron-down' iconSize='xl' />
            <AtomsIcon icon='chevron-left' iconSize='xl' />
            <AtomsIcon icon='chevron-right' iconSize='xl' />
            <AtomsIcon icon='chevron-up' iconSize='xl' />
            <AtomsIcon icon='cross' iconSize='xl' />
            <AtomsIcon icon='filter' iconSize='xl' />
            <AtomsIcon icon='sliders' iconSize='xl' />
            <AtomsIcon icon='menu' iconSize='xl' />
            <AtomsIcon icon='search' iconSize='xl' />
        </Fragment>)
    }
}

AtomsIconUi.propTypes = {
}

AtomsIconUi.defaultProps = {
}

export default ComponentInjector.return('AtomsIconUi', AtomsIconUi)
