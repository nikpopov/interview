import React from 'react';
import { uuid } from 'uuidv4';
import './App.css';
import Header from './components/Header';
import TableList from './components/tableLayout/TableList';
import ButtonAbsolute from './components/ButtonAbsolute';
import Modal from './components/Modal/Modal';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      modalIsOpen: false,
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
      modalIsOpen: !this.state.modalIsOpen
    })
  }

  appendRecord = (data) => {
    if (data) {
      let obj = {};
      if (!data.id) {
        obj = { ...data, ...{id: uuid()}};
      } else {
        obj = {...data};
      }
      let item,
        index = 0,
        number = 0,
        newList = [];
      if (this.state.list.length && this.state.list.some(item => item.id.toString() === obj.id.toString())) {
        item = this.state.list.find(item => item.id.toString() === obj.id.toString());
        index = this.state.list.indexOf(item);
        newList = this.state.list.map(item => item);
        number = 1;
      } else {
        index = this.state.list.length;
        newList = [...this.state.list];
      }
      newList.splice(index, number, obj);
        this.setState({
          list: newList
        })
    }
  }

  onEditInterviewData = (data) => {
    if (data) {
      this.setState({
        record: data,
        modalIsOpen: true
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
      this.setState({
        record: {},
        modalIsOpen: false
      })
    }, 200);
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
      record: {}
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TableList
          list={this.state.list}
          modalIsOpen={this.state.modalIsOpen}
          onEditInterviewData={this.onEditInterviewData}
        />
        <Modal
          modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
          onValueChange={this.onValueChange}
          record={this.state.record}
          onSubmitForm={this.onSubmitForm}
        />
        <ButtonAbsolute modalIsOpen={this.state.modalIsOpen} toggleModal={this.toggleModal}/>
      </div>
    );
  }
}

export default App;
