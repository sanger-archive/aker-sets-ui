import React from 'react';
import Select from 'react-select';
import { Async } from 'react-select';

class SetSelector extends React.Component {

  state = {
    selectedOption: null
  }

  constructor(props) {
    super()
    this.onOpenOptions = props.onOpenOptions
    this.onCloseOptions = props.onCloseOptions
    this.onChange = props.onChange
    this.onChangeOption = this.onChangeOption.bind(this)
    this.getOptions = this.getOptions.bind(this)
  }

  convertOpts(json) {
    const selectedOption = this.state.selectedOption
    if (!json.data) {
      return [selectedOption]
    }
    return json.data.map((o)=>{ 
      const label = o.attributes.name
      const value = o.id
      return {
        label, value
      }
    })
  }

  onChangeOption(selectedOption) {
    this.setState({ selectedOption })
    this.onChange(selectedOption)
  }

  getOptions(value) {
    return fetch(`/sets_service/sets?filter[search_by_name]=${value}`)
      .then((response) => {
        return response.json()
      }).then((json) => {
        return { options: this.convertOpts(json) }
      })
  }

  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;
    const options = selectedOption ? [selectedOption] : []

    return(
      <Async 
        value={value}
        options={options}
        onBlurResetsInput={false}
        onOpen={this.onOpenOptions}
        onClose={this.onCloseOptions}
        loadOptions={this.getOptions} onChange={this.onChangeOption} />
    )
  }
}

class SelectDisablingSurroundingButtons extends React.Component {
  constructor(props) {
    super()
    this.props=props
  }
  onCloseOptions(e) {
    setTimeout(function() { $('#add-remove-materials-from-set button').attr('disabled', false) }, 100)
  }

  onOpenOptions(e) {
    $('#add-remove-materials-from-set button').attr('disabled', true)
  }

  render() {
    return(
      <SetSelector {...this.props} onOpenOptions={this.onOpenOptions} onCloseOptions={this.onCloseOptions} />
    )
  }
}

export { SelectDisablingSurroundingButtons, SetSelector }

export default SetSelector;