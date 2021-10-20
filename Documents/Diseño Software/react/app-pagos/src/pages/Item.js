import React from 'react';

export function Item({ todo }){
  const {id, date, time, note, quantity, category} = todo;
  return (
    <>
    <tr>
      <td>{date}</td>
      <td>{time}</td>
      <td>{note}</td>
      <td>{quantity}</td>
      <td>{category}</td>
    </tr>
    </>
  )
}
