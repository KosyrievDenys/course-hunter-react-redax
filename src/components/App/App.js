import React, { useState } from "react";
import styles from './App.module.scss';
import TodoList from "../TodoList/TodoList";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import ItemAddForm from "../ItemAddForm/ItemAddForm";

// export default class App extends Component {
//   state = {
//     todoData: [
//       { label: 'Drink Coffee', important: false },
//       { label: 'Make Awesome App', important: false },
//       { label: 'Have a lunch', important: false },
//       { label: 'church', important: false },
//     ]
//   }
//
//   render() {
//     return (
//       <div>
//         <AppHeader toDo={1} done={3} />
//         <div className={styles.blockSearch}>
//           <SearchPanel />
//           <ItemStatusFilter />
//         </div>
//         <TodoList todos={this.state.todoData}
//                   onDeleted={(label) => {
//                     this.setState(({ todoData }) => {
//                       const idx = todoData.findIndex((el) => el.label === label);
//                       const newArray = [
//                         ...todoData.slice(0, idx),
//                         ...todoData.slice(idx + 1),
//                       ];
//                       return {
//                         todoData: newArray
//                       }
//                     })
//                   }}
//           // onToggleImportant={(label) => {
//           //   console.log('toggle imp', label)
//           // }}
//           // onToggleDone={(label) => {
//           //   console.log('toggle done', label)
//           // }}
//         />
//       </div>
//     )
//   }
// }

const App = () => {
  const createTodoItem = (label) => {
    return {
      label,
      important: false,
      done: false,
    }
  }
  const todoData = [
    createTodoItem('Drink Coffee'),
    createTodoItem('Make Awesome App'),
    createTodoItem('Have a lunch'),
    createTodoItem('church'),
  ]
  const [arrTodoData, setArrTodoData] = useState(todoData);
  const doneCount = arrTodoData.filter(el => el.done).length;
  const todoCount = arrTodoData.length - doneCount;
  const toggleProperty = (arr, label, propName) => {
    const idx = arr.findIndex((el) => el.label === label)
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    const newArr = [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1),
    ];
    return {newArr};
  }
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className={styles.blockSearch}>
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={arrTodoData}
                  onDeleted={(label) => {
                    const idx = arrTodoData.findIndex((el) => el.label === label);
                    const newArr = [
                      ...arrTodoData.slice(0, idx),
                      ...arrTodoData.slice(idx + 1),
                    ];
                    setArrTodoData(newArr);
                  }}
                  onToggleImportant={(label) => {
                    setArrTodoData(toggleProperty(arrTodoData, label, 'important'));
                  }}
                  onToggleDone={(label) => {
                    setArrTodoData(toggleProperty(arrTodoData, label, 'done'));
                  }} />
        <ItemAddForm onAddItem={(text) => {
          const newItem = createTodoItem(text);
          const newArr = [...arrTodoData, newItem];
          setArrTodoData(newArr);
        }} />
      </div>
    </div>
  );
}

export default App;
