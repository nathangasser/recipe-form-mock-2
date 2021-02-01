import React, { useState } from 'react';

const UnitInput = ({ id, value, handleFocus, focus }) => {
  const [text, setText] = useState(value);

  return (
    <div className="col-2 gx-1">
      <input
        className={focus ? "form-control" : "form-control-plaintext px-2"}
        list="unitOpts"
        placeholder="unit"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onFocus={() => {
          handleFocus(id);
        }}
      />
      <datalist id="unitOpts">
        <option value="ea" />
        <option value="Tbsp" />
        <option value="tsp" />
        <option value="oz" />
        <option value="fl oz" />
        <option value="cup(s)" />
        <option value="lb" />
        <option value="g" />
        <option value="mL" />
        <option value="L" />
      </datalist>
    </div>
  );
};

export default UnitInput;