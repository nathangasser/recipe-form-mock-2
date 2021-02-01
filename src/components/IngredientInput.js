import React, { useState } from 'react';

const IngredientInput = ({ id, value, handleTyping, handleKeyDown, handleFocus, focus }) => {
  const [text, setText] = useState(value);

  return (
    <div className="col-8 gx-1">
      <input
        type="text"
        className={focus ? "form-control" : "form-control-plaintext px-2"}
        placeholder="ingredient"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          handleTyping(id, 'ingredient', e.target.value);
        }}
        onKeyDown={(e) => {
          handleKeyDown(e, id);
        }}
        onFocus={() => {
          handleFocus(id);
        }}
      />
    </div>
  );
};

export default IngredientInput;