import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import ComponentInjector from '../../../app/injector'

class AtomsButton extends Component {
    render () {
        const Component = this.props.component

        return (<Component
            {..._.omit(this.props, ['children', 'component', 'className', 'type', 'ghost', 'outline', 'rounded', 'full', 'htmlType'])}
            type={this.props.htmlType}
            className={classnames(
                'c-button',
                this.props.className,
                (this.props.type ? 'c-button--' + this.props.type : null),
                (this.props.size ? 'c-button--' + this.props.size : null),
                {
                    'c-button--ghost': this.props.ghost,
                    'c-button--outline': this.props.outline,
                    'c-button--rounded': this.props.rounded,
                    'c-button--full': this.props.full,
                }
            )}>
            {this.props.children}
        </Component>)
    }
}

AtomsButton.propTypes = {
    children: PropTypes.node.isRequired,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    className: PropTypes.string,
    type: PropTypes.oneOf([null, 'primary', 'secondary']),
    size: PropTypes.oneOf([null, 'small', 'large']),
    htmlType: PropTypes.string,
    ghost: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    full: PropTypes.bool,
}

AtomsButton.defaultProps = {
    component: 'button',
    className: '',
    type: null,
    htmlType: null,
    ghost: false,
    outline: false,
    rounded: false,
    full: false,
}

// These are just default props for the pattern library
AtomsButton.testProps = {
    children: 'Button',
    type: 'primary',
    full: true,
}

export default ComponentInjector.return('AtomsButton', AtomsButton)
