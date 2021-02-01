import React, { useState, useEffect } from 'react';
import InputLine from './InputLine';

const InputField = ({ data }) => {
  const [items, setItems] = useState(data);
  const [output, setOutput] = useState([]);
  const [focusInputs, setFocusInputs] = useState([]);
  
  // run once on load
  useEffect(() => {
    setOutput(renderInputs(items, focusInputs));
    const focusToEdit = items.map((item) => {
      return false;
    })
    focusToEdit[focusToEdit.length - 1] = true;
    setFocusInputs(focusToEdit);
  },[]);

  useEffect(() => {
    setOutput(renderInputs(items, focusInputs));
  },[items, focusInputs]);

  const deleteEmptyInputs = (arrInputs) => {
    if (!arrInputs[arrInputs.length - 1].amount &&
      !arrInputs[arrInputs.length - 1].ingredient &&
      !arrInputs[arrInputs.length - 2].amount &&
      !arrInputs[arrInputs.length - 2].ingredient) {
      
      arrInputs.pop();
      return deleteEmptyInputs(arrInputs);
    } else {
      return arrInputs;
    }
  };

  const handleTyping = (id, field, value) => {
    const itemsToEdit = [...items];
    itemsToEdit[id - 1][field] = value;
    // add a new input line at bottom
    if (id === itemsToEdit.length) {
      itemsToEdit.push({
        id: itemsToEdit.length + 1,
        amount: "",
        unit: "",
        ingredient: "",
      });
    }
    // remove an input line from the bottom
    if (id === itemsToEdit.length - 1 &&
      !value &&
      !itemsToEdit[itemsToEdit.length - 2].amount &&
      !itemsToEdit[itemsToEdit.length - 2].ingredient) {
      itemsToEdit.pop();
    }
    setItems(deleteEmptyInputs(itemsToEdit));
  };

  const handleKeyDown = (event, id) => {
    if (event.key === "Enter") {
      console.log("enter!");
    }
  };

  const handleFocus = (id) => {
    const focusToEdit = [...focusInputs];
    focusToEdit.fill(false);
    focusToEdit[id - 1] = true;
    setFocusInputs(focusToEdit);
  }

  const renderInputs = (itemArr, focusArr) => {
    return (
      itemArr.map((item) => {
        return (
          <InputLine
            data={item}
            handleTyping={handleTyping}
            handleKeyDown={handleKeyDown}
            handleFocus={handleFocus}
            focus={focusArr[item.id - 1]}
          />);
      })
    )
  };

  return (
    <div>{output}</div>
  );
};

export default InputField;