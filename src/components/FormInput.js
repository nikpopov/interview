import React from 'react';

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onValueChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value })
  }

  sendForm = () => {
    setTimeout(() => this.setState({}), 200);
  }

  render() {
    return (
      <div className='container'>
        <div className='col-12'>
          <form onSubmit={() => this.props.appendRecord(this.state)}>
            <div className='form-group row'>
              <label htmlFor='inputCompany' className='col-sm-2 col-form-label'>Company</label>
              <div className='col-sm-10'>
                <input
                  id='inputCompany'
                  name='inputCompany'
                  type='text'
                  className='form-control'
                  onChange={this.onValueChange}
                  />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='inputProject' className='col-sm-2 col-form-label'>Project Description</label>
              <div className='col-sm-10'>
                <input
                  id='inputProject'
                  name='inputProject'
                  type='text'
                  className='form-control'
                  onChange={this.onValueChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='inputPerson' className='col-sm-2 col-form-label'>Contact Person</label>
              <div className='col-sm-10'>
                <input
                  id='inputPerson'
                  name='inputPerson'
                  type='text'
                  className='form-control'
                  onChange={this.onValueChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='inputPhone' className='col-sm-2 col-form-label'>Contact phone</label>
              <div className='col-sm-10'>
                <input
                  id='inputPhone'
                  name='inputPhone'
                  type='text'
                  className='form-control'
                  onChange={this.onValueChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='inputDate' className='col-sm-2 col-form-label'>Interview Date</label>
              <div className='col-sm-10'>
                <input
                  id='inputDate'
                  name='inputDate'
                  type='text'
                  className='form-control'
                  onChange={this.onValueChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='inputTime' className='col-sm-2 col-form-label'>Interview Time</label>
              <div className='col-sm-10'>
                <input
                  id='inputTime'
                  name='inputTime'
                  type='text'
                  className='form-control'
                  onChange={this.onValueChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='inputImpression' className='col-sm-2 col-form-label'>Impression</label>
              <div className='col-sm-10'>
                <input
                  id='inputImpression'
                  name='inputImpression'
                  type='text'
                  className='form-control'
                  onChange={this.onValueChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <div className='col-sm-6'>
                <button
                  type='submit'
                  className='btn btn-primary'
                >
                  Cancel
                </button>
              </div>
              <div className='col-sm-6'>
                <button
                  type='submit'
                  className='btn btn-primary'
                  onClick={this.sendForm}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FormInput;
