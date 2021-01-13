import React from 'react';
import AddTodo from '../containers/addTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';

import './style.css'

const App = () => (
  <div className="mainPage">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;