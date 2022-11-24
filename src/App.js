import { Fragment } from 'react';
import './App.css';

// - - - - - -   C O M P O N E N T S   - - - - - -
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  )
}

export default App;
