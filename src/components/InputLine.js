import React from 'react';
import AmountInput from './AmountInput';
import UnitInput from './UnitInput';
import IngredientInput from './IngredientInput';

const InputLine = ({ data, handleTyping, handleKeyDown, handleFocus, focus }) => {

  return (
    <div className="row py-1">
      <AmountInput
        id={data.id}
        value={data.amount}
        handleTyping={handleTyping}
        handleKeyDown={handleKeyDown}
        handleFocus={handleFocus}
        focus={focus}
      />
      <UnitInput id={data.id} value={data.unit} handleFocus={handleFocus} focus={focus} />
      <IngredientInput
        id={data.id}
        value={data.ingredient}
        handleTyping={handleTyping}
        handleKeyDown={handleKeyDown}
        handleFocus={handleFocus}
        focus={focus}
      />
    </div>
  );
};

export default InputLine;