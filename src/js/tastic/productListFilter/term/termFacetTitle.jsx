import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

class TermFacetTitle extends Component {
    render () {
        return (
            <Fragment>
                {this.props.name || this.props.facet.key}
                {this.props.facet.selected
                    ? ' (' + this.renderSelectionPreview(this.props.facet.terms) + ')'
                    : null
                }
            </Fragment>
        )
    }

    renderSelectionPreview = (terms) => {
        let selectedTermNames = _.map(_.filter(terms, 'selected'), (term) => {
            return term.name
        })

        return _.slice(selectedTermNames, 0, 3).join(', ') +
            (selectedTermNames.length > 3 ? ', …' : '')
    }
}

TermFacetTitle.propTypes = {
    facet: PropTypes.object.isRequired,
    name: PropTypes.node,
}

TermFacetTitle.defaultProps = {}

export default TermFacetTitle
