import React, { useEffect, useState } from "react";
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
    createTodoItem('church'),]
  const [arrTodoData, setArrTodoData] = useState(todoData);
  const [term, setTerm] = useState('');
  const [stFilter, setStFilter] = useState('all');
  const [visibleItems, setVisibleItems] = useState([]);

  const toggleProperty = (arr, label, propName) => {
    const idx = arr.findIndex((el) => el.label === label)
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    const newArr = [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1),
    ];
    return [...newArr];
  }
  const onDeleted = (label) => {
    const idx = arrTodoData.findIndex((el) => el.label === label);
    const newArr = [
      ...arrTodoData.slice(0, idx),
      ...arrTodoData.slice(idx + 1),
    ];
    setArrTodoData(newArr);
  }
  const onSearchChange = (term) => {
    setTerm(term);
  }
  const onFilterChange = (filter) => {
    setStFilter(filter);
  }
  const search = (items, term) => {
    if (term.length === 0) {return items}
    return items.filter((item) => {
      return item.label
        .toLowerCase()
        .indexOf(term.toLowerCase()) > -1;
    })
  }
  // console.log(search())
  const filter = (items, stFilter) => {
    switch (stFilter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  useEffect(() => {
    // console.log(term)
    setVisibleItems(filter(search(arrTodoData, term), stFilter));
    // console.log(visibleItems)
  }, [arrTodoData, stFilter, term])

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <AppHeader arrTodoData={arrTodoData} />
        <div className={styles.blockSearch}>
          <SearchPanel
            onSearchChangeApp={onSearchChange} />
          <ItemStatusFilter
          stFilter={stFilter}
          onFilterChange={onFilterChange}/>
        </div>
        <TodoList todos={visibleItems}
                  onDeleted={(label) => onDeleted(label)}
                  onToggleImportant={(label) => {
                    setArrTodoData(toggleProperty(arrTodoData, label, 'important'));
                  }}
                  onToggleDone={(label) => {
                    const newTodo = toggleProperty(arrTodoData, label, 'done')
                    setArrTodoData([...newTodo]);

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
