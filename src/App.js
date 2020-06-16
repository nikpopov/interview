import React from 'react';
import { uuid } from 'uuidv4';
import './App.css';
import Header from './components/Header';
import TableList from './components/tableLayout/TableList';
import FormInput from './components/FormInput';
import ButtonAbsolute from './components/ButtonAbsolute';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      formIsOpen: false,
      record: {}
    }
  }

  componentDidMount() {
    const list = localStorage.getItem('list') && JSON.parse(localStorage.getItem('list'));
    this.setState({
      list: list ? list : []
    })
  }

  componentUnMount() {
    if (this.state.list.length > 0) {
      localStorage.setItem('list', JSON.stringify(this.state.list));
      this.setState({
        list: []
      })
    } else {
      localStorage.setItem('list', JSON.stringify([]));
    }
  }

  toggleModal = () => {
    this.setState({
      formIsOpen: !this.state.formIsOpen
    })
  }

  appendRecord = (data) => {
    if (data) {
      debugger;
      let obj = {};
      if (!data.id) {
        obj = Object.assign({}, data, { id: uuid() })
      } else {
        obj = Object.assign({}, data);
      }
      if (this.state.list.some(item => item.id.toString() === obj.id.toString())) {
        const item = this.state.list.find(item => item.id.toString() === obj.id.toString());
        const index = this.state.list.indexOf(item);
        const newList = this.state.list.map(item => item);
        newList.splice(index, 1, obj);
        this.setState({
          list: newList
        })
      } else {
        this.setState({
          list: this.state.list.push(obj)
        })
      }
    }
  }

  onEditInterviewData = (data) => {
    if (data) {
      this.setState({
        record: data,
        formIsOpen: true
      })
    }
  }

  onValueChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      record: Object.assign({}, this.state.record, {[name]: value})
    });
  }

  onSubmitForm = () => {
    this.appendRecord(this.state.record);
    setTimeout(() => {
      localStorage.setItem('list', JSON.stringify(this.state.list));
      this.setState({ record: {}})
    }, 200);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TableList
          list={this.state.list}
          formIsOpen={this.state.formIsOpen}
          onEditInterviewData={this.onEditInterviewData}
        />
        {this.state.formIsOpen
        ? <FormInput
            record={this.state.record}
            onValueChange={this.onValueChange}
            onSubmitForm={this.onSubmitForm}
          />
        : null}
        <ButtonAbsolute formIsOpen={this.state.formIsOpen} toggleModal={this.toggleModal}/>
      </div>
    );
  }
}

export default App;
