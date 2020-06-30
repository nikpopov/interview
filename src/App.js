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
      this.updateStorage(this.state.list)
      this.setState({
        list: []
      })
    } else {
      this.updateStorage([])
    }
  }

  validateData(item) {
    //TODO Make validation if any prop = null or undefined or empty
    return item;
  }

  updateStorage(item) {
    const data = this.validateData(item);
    localStorage.setItem('list', JSON.stringify(data));
  }

  toggleModal = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    })
  }

  onCloseModal = () => {
    this.setState({
      modalIsOpen: false,
      record: {}
    });
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
      if (this.state.list.length && this.state.list.some(item => item.id === obj.id)) {
        item = this.state.list.find(item => item.id === obj.id);
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

  onRemoveRecord = (record) => {
    const newList = this.state.list.filter(item => item.id !== record.id);
    this.setState({
      list: newList
    });
    this.updateStorage(this.state.list);
  }

  onEditCompanyData = (data) => {
    if (data) {
      this.setState({
        record: data,
        modalIsOpen: true
      })
    }
  }

  onAddInterview = () => {
    const interview = [{
      type: '',
      date: '',
      time: '',
      interviewer: '',
      contact: ''
    }];
    const interviewList = this.state.record.interviewList ? this.state.record.interviewList.map(item => item) : [];
    this.setState({
      record: {...this.state.record, ...{interviewList: interviewList.concat(interview) }},
    })
  }

  onValueChange = (e, index = null) => {
    const name = e.target.name;
    const value = e.target.value;
    if (index === null) {
      this.setState({
        record: Object.assign({}, this.state.record, {[name]: value})
      });
    } else {
      const el = {...this.state.record.interviewList[index], ...{[name] : value}};
      const updatedList = this.state.record.interviewList.map(item => item);
      updatedList.splice(index, 1, el);
      this.setState({
        record: {...this.state.record, ...{interviewList: updatedList}}
      })
    }
  }

  onSubmitForm = () => {
    this.appendRecord(this.state.record);
    setTimeout(() => {
      this.updateStorage(this.state.list);
      this.setState({
        record: {},
        modalIsOpen: false
      })
    }, 200);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TableList
          list={this.state.list}
          modalIsOpen={this.state.modalIsOpen}
          onEditCompanyData={this.onEditCompanyData}
          onRemoveRecord={this.onRemoveRecord}
        />
        <Modal
          modalIsOpen={this.state.modalIsOpen}
          onCloseModal={this.onCloseModal}
          onValueChange={this.onValueChange}
          record={this.state.record}
          onSubmitForm={this.onSubmitForm}
          onAddInterview={this.onAddInterview}
        />
        <ButtonAbsolute
          modalIsOpen={this.state.modalIsOpen}
          toggleModal={this.toggleModal}
        />
      </div>
    );
  }
}

export default App;
