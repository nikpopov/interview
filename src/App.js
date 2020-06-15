import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import TableList from './components/tableLayout/TableList';
import FormInput from './components/FormInput';
import ButtonAbsolute from './components/ButtonAbsolute';

function App() {
  let list = [];
  const [formIsOpen, toggleForm] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    list = localStorage.getItem('list') && JSON.parse(localStorage.getItem('list'));
    return () => {
      if (list && list.length > 0) {
        localStorage.setItem('list', JSON.stringify(list));
      } else {
        localStorage.setItem('list', JSON.stringify([]));
      }
    }
  }, [list])

  const toggleModal = () => {
    toggleForm(!formIsOpen)
  }

  const appendRecord = (data) => {
    if (data) {
      const arr = Object.entries(data);
      list.append(arr);
    }
  }

  return (
    <div className="App">
      <Header />
      <TableList list={list} formIsOpen={formIsOpen}/>
      {formIsOpen && <FormInput list={list} appendRecord={appendRecord}/>}
      <ButtonAbsolute formIsOpen={formIsOpen} toggleModal={toggleModal}/>
    </div>
  );
}

export default App;
