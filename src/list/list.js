import React from 'react'
import ListItem from '../list-item/list-item'

const List = ({data, changeStatus, remove}) => {
  return(
    <ul className={"list"}> {
      (data.length > 0) ?
        data.map(el => {
          const { id, ...item } = el;
          return(
          <ListItem
          key={id}
          item={item}
          remove={() => remove(id)}
          changeStatus={(name) => changeStatus(id, name)} />
          )
        }) :
      <span>The list is empty</span>
    }</ul>
  );
};

export default List  