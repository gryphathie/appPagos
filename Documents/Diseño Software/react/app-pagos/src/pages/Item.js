import React from 'react';

export function Item({ todo, borrarElemento }){
  const {id, date, time, note, quantity, category, completed} = todo;

  const handleTodoClick = () => {
    borrarElemento(id);
  }

  return (
    <>
    <tr>
      <td>{date}</td>
      <td>{time}</td>
      <td>{note}</td>
      <td>{quantity}</td>
      <td>{category}</td>
      <td><input type="checkbox" className="align-center" checked={completed} onChange={handleTodoClick}/></td>
    </tr>
    </>
  )
}
