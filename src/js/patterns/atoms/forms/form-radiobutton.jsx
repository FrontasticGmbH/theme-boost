import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import FormInput from 'js/patterns/atoms/forms/form-input'

class FormRadiobutton extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);

        this.state = {
            checked: props.checked,
            diabled: props.disabled,
            required: props.required,
        }
    }
    
    onChange() {
        this.setState({
            checked: !this.state.checked
        });
    }

    render() {
        return (
            <div className='c-form-radio'>
                <FormInput
                    type='radio'
                    name='radio'
                    className='c-form-radio__input'
                    id={this.props.id}
                    onChange={this.onChange}
                    checked={this.state.checked}
                    disabled={this.state.disabled}
                    required={this.state.required}
                />
                <span className='c-form-radio__backdrop' />
            </div>
        )
    }
}

FormRadiobutton.propTypes = {
    id: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
}

FormRadiobutton.defaultProps = {
    id: undefined,
    checked: undefined,
    disabled: undefined,
    required: undefined,
}

export default ComponentInjector.return('FormRadiobutton', FormRadiobutton)
