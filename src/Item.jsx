import React from "react";

const Item = (props) => {
  return (
    <>
      <li className="todoItem" key={props.index}>
        <div className="todoDiv">
          {props.name}
          <button
            onClick={() => {
              return props.onSelec(props.id);
            }}
          >
            x
          </button>
        </div>
      </li>
    </>
  );
};
export default Item;
