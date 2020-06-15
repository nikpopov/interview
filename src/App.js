import React from 'react';
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
      this.setState({
        list: this.state.list.push(data)
      })
      localStorage.setItem('list', JSON.stringify(this.state.list));
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TableList
          list={this.state.list}
          formIsOpen={this.state.formIsOpen}
        />
        {this.state.formIsOpen && <FormInput list={this.state.list} appendRecord={this.appendRecord}/>}
        <ButtonAbsolute formIsOpen={this.state.formIsOpen} toggleModal={this.toggleModal}/>
      </div>
    );
  }
}

export default App;
