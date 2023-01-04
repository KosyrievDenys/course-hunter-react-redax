import React, { Component } from "react";
import styles from './App.module.scss';
import TodoList from "../TodoList/TodoList";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';

export default class App extends Component {
  state = {
    todoDate: [
      { label: 'Drink Coffee', important: false },
      { label: 'Make Awesome App', important: true },
      { label: 'Have a lunch', important: false },
    ]
  };

  // const [todoDate, setTodoDate] = useState([
  //     { label: 'Drink Coffee', important: false },
  //     { label: 'Make Awesome App', important: true },
  //     { label: 'Have a lunch', important: false },
  //   ]
  // );
  // console.log(todoDate)
  // const deleteItem = (label) => {
  //   setTodoDate((todoDate) => {
  //     const idx = todoDate.findIndex((el) => el.label === label)
  //     console.log(idx)
  //   })
  // }
  // deleteItem({ todoDate })
  render() {
    return (
      <div>
        <AppHeader toDo={1} done={3} />
        <div className={styles.blockSearch}>
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={todoDate}
                  onDeleted={({ label }) => console.log('del', label)} />
      </div>
    );
  }

  // function App() {
  // return (
  //   <div>
  //     <AppHeader toDo={1} done={3} />
  //     <div className={styles.blockSearch}>
  //       <SearchPanel />
  //       <ItemStatusFilter />
  //     </div>
  //     <TodoList todos={todoDate}
  //               onDeleted={({ label }) => console.log('del', label)} />
  //   </div>
  // );
  // }
}

// export default App;
