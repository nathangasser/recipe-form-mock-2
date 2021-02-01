import React, { useState } from 'react';

const AmountInput = ({ id, value, handleTyping, handleKeyDown, handleFocus, focus }) => {
  const [text, setText] = useState(value);

  return (
    <div className="col-2 gx-1">
      <input
        type="text"
        className={focus ? "form-control" : "form-control-plaintext px-2"}
        placeholder="amt"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          handleTyping(id, "amount", e.target.value);
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

export default AmountInput;