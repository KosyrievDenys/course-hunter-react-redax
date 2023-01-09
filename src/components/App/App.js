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
  const text = 'fff';
  const todoData = [
    { label: 'Drink Coffee', important: false },
    { label: 'Make Awesome App', important: false },
    { label: 'Have a lunch', important: false },
    { label: 'churu', important: false },
  ]
  const [arrTodoData, setArrTodoData] = useState(todoData);
  return (
    <div>
      <AppHeader toDo={1} done={3} />
      <div className={styles.blockSearch}>
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={arrTodoData}
                onDeleted={(label) => {
                  const idx = arrTodoData.findIndex((el) => el.label === label)
                  const newArr = [
                    ...arrTodoData.slice(0, idx),
                    ...arrTodoData.slice(idx + 1),
                  ];
                  setArrTodoData(newArr);
                }}
                onToggleImportant={(label) => {
                  console.log('toggle imp', label)
                }}
                onToggleDone={(label) => {
                  console.log('toggle done', label)
                }} />
      <ItemAddForm onAddItem={() => {
        const newItem = {
          label: text,
          important: false,
        }
        const newArr = [...arrTodoData, newItem]
        setArrTodoData(newArr);
      }} />
    </div>
  );
}

export default App;
