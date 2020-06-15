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
    this.props.appendRecord(this.state);
    setTimeout(() => this.setState({}), 200);
  }

  render() {
    return (
      <div className='container'>
        <div className='col-12'>
          <form>
            <div className='form-group row'>
              <label htmlFor='company' className='col-sm-2 col-form-label'>Company</label>
              <div className='col-sm-10'>
                <input
                  id='company'
                  name='company'
                  type='text'
                  className='form-control'
                  onChange={this.onValueChange}
                  />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='project' className='col-sm-2 col-form-label'>Project Description</label>
              <div className='col-sm-10'>
                <input
                  id='project'
                  name='project'
                  type='text'
                  className='form-control'
                  onChange={this.onValueChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='contactPerson' className='col-sm-2 col-form-label'>Contact Person</label>
              <div className='col-sm-10'>
                <input
                  id='contactPerson'
                  name='contactPerson'
                  type='text'
                  className='form-control'
                  onChange={this.onValueChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='contactPhone' className='col-sm-2 col-form-label'>Contact phone</label>
              <div className='col-sm-10'>
                <input
                  id='contactPhone'
                  name='contactPhone'
                  type='text'
                  className='form-control'
                  onChange={this.onValueChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='date' className='col-sm-2 col-form-label'>Interview Date</label>
              <div className='col-sm-10'>
                <input
                  id='date'
                  name='date'
                  type='text'
                  className='form-control'
                  onChange={this.onValueChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='time' className='col-sm-2 col-form-label'>Interview Time</label>
              <div className='col-sm-10'>
                <input
                  id='time'
                  name='time'
                  type='text'
                  className='form-control'
                  onChange={this.onValueChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='impression' className='col-sm-2 col-form-label'>Impression</label>
              <div className='col-sm-10'>
                <input
                  id='impression'
                  name='impression'
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
