import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        {props.categories.map(category => (
            <li>
                <a onClick={()=>props.setCategory(category)}> {category}</a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default sideDrawer;