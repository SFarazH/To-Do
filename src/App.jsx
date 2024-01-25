import React, { useState } from "react";
import Item from "./Item";

const App = () => {
  const [item, updateItem] = useState("");
  const [items, addItem] = useState([]);

  const onitemchange = (e) => {
    const val = e.target.value;
    updateItem(val);
  };

  const itemAdd = () => {
    addItem((prevItems) => {
      return [...prevItems, item];
    });
    updateItem("");
  };

  const deletefromArr = (id) => {
    addItem((oldArr) => {
      return oldArr.filter((value, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="mainDiv">
        <div className="todo">
          <input
            type="text"
            placeholder="To Do"
            name="todo"
            value={item}
            onChange={onitemchange}
          />
          <button onClick={itemAdd}>+</button>
          <ol>
            {items.map((item, index) => {
              return (
                <>
                  <Item
                    name={item}
                    id={index}
                    key={index}
                    onSelec={deletefromArr}
                  />
                </>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
