import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import styles from './TodoList.module.scss';

const TodoList = ({
                    todos,
                    onDeleted,
                    onToggleImportant,
                    onToggleDone,
                  }) => {
  const elements = todos.map((item) => {
    // const {label, ...labelProps} = item; для видалення кожного одинакового елементу з кожного об.екту
    return (
      <li key={item.label}>
        <TodoListItem
          {...item}
          onDeleted={() => onDeleted(item.label)}
          onToggleImportant={() => onToggleImportant(item.label)}
          onToggleDone={() => onToggleDone(item.label)}
        />
      </li>
    )
  })
  return (
    <ul className={styles.todoList}>
      {elements}
    </ul>
  )
}

export default TodoList;
//
// {isOpenList1 && <ul className={styles.list1}>
//   <li><h2>Search Filters</h2></li>
//   {arrItemsList.map((el) => {
//     return (
//       <li
//         key={el}
//         onClick={() => {
//           // console.log('1')
//           setStItemValue(el);
//           setIsOpenList1(false);
//           setIsOpenList2(true);
//         }}>
//         <span>{el}</span>
//       </li>
//     )
//   })}
// </ul>}
// {isOpenList2 && <ul className={styles.list2}>
//   <li>Use:"{stItemValue}"</li>
//   <li><h2>Operators</h2></li>
//   {arrItemsSymbol.map((el, id) => {
//     return (
//       <li
//         key={el}
//         onClick={() => {
//           // console.log('2')
//           setStItemValue(`${stItemValue} ${el}`);
//           // setStItemSymbol(arrItemsSigns[id])
//           // setIsOpenList1(true);
//           setIsOpenList2(false);
//         }}>
//         <div><span className={styles.title}>{stItemValue}</span><span>{el}</span></div>
//         <span className={styles.description}>{arrItemsTitle[id]}</span>
//       </li>
//     )
//   })}
// </ul>}