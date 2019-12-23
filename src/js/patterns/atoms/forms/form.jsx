import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import Input from 'js/patterns/atoms/forms/form-input'
import Checkbox from 'js/patterns/atoms/forms/form-checkbox'
import Radiobutton from 'js/patterns/atoms/forms/form-radiobutton'
import Select from 'js/patterns/atoms/forms/form-select'
import Textarea from 'js/patterns/atoms/forms/form-textarea'
import Fieldset from 'js/patterns/atoms/forms/form-fieldset'
import Label from 'js/patterns/atoms/forms/form-label'

class AtomsForms extends Component {
    render () {
        return (<div>
            <label>Input Text Placeholder</label>
            <Input placeholder='Text' />
            <br />
            <label>Input Number</label>
            <Input type='number' placeholder='Number' />
            <br />
            <label>Input Date</label>
            <Input type='date' placeholder='Date' />
            <br />
            <label>Input Color</label>
            <Input type='color' placeholder='Color' />
            <br />
            <label>Input Range</label>
            <Input type='range' min={0} max={100} value={90} step={10} />
            <br />
            <label>Input Text</label>
            <Input type='text' value='Value' />
            <br />
            <label>Input Tel</label>
            <Input type='tel' placeholder='Tel' />
            <br />
            <label>Input Mail</label>
            <Input type='email' placeholder='Email' />
            <br />
            <label>Input Mail Disabled</label>
            <Input type='email' value='Email Disabled' disabled={true} />
            <br />
            <label>Input Mail Required</label>
            <Input type='email' value='Email Required' required={true} />
            <br />
            <label>Input Mail Hidden</label>
            <Input type='email' value='Email hidden' hidden={true} />
            <br />
            <label>Input Password</label>
            <Input type='password' />
            <br />

            <label>Checkbox Default</label>
            <Checkbox value='VAL' />
            <br />
            <label>Checkbox Checked</label>
            <Checkbox value='VAL' checked={true} />
            <br />
            <label>Checkbox Disabled</label>
            <Checkbox value='VAL' disabled={true} />
            <br />
            <label>Checkbox Required</label>
            <Checkbox value='VAL' required={true} />
            <br />

            <label>Radio Default</label>
            <Radiobutton value='val' />
            <br />
            <label>Radio Checked</label>
            <Radiobutton value='val' checked={true} />
            <br />
            <label>Radio Disabled</label>
            <Radiobutton value='val' disabled={true} />
            <br />
            <label>Radio Required</label>
            <Radiobutton value='val' required={true} />

            <br />
            <label>Select</label>
            <Select name='select_1' options={[
                    {value: 'none', label: '-- Bitte wählen --'},
                    {value: 'val_1', label: 'Value 1'},
                    {value: 'val_2', label: 'Value 2'},
                    {value: 'val_3', label: 'Value 3'},
                    {value: 'val_4', label: 'Value 4'}
                ]} />

            <br />
            <label>Select Multiple</label>
            <Select name='select_2' multiple={true} options={[
                    {value: 'val_1', label: 'Value 1'},
                    {value: 'val_2', label: 'Value 2'},
                    {value: 'val_3', label: 'Value 3'},
                    {value: 'val_4', label: 'Value 4'}
                ]} />

            <br />
            <label>Textarea</label>
            <Textarea name='myText' />

            <br />
            <Label value='Test-Label' />

            <br />
            <label>Fieldset</label>
            <Fieldset legend='Fieldset-Legend'>
                <Input placeholder='Vorname' />
                <Input placeholder='Nachname' />
            </Fieldset>

        </div>)
    }
}

AtomsForms.propTypes = {
}

AtomsForms.defaultProps = {
}

export default ComponentInjector.return('AtomsForms', AtomsForms)
