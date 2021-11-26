import React from 'react';
import {
  QuantityView,
  DcereaseQuantityButton,
  DcereaseQuantityText,
  QuantityButton,
  QuantityText,
  IncreaseQuantityButton,
  IncreaseQuantityText,
} from '../styles/cart';
const StepperInput = ({value = 1, onAdd, onMinus}) => {
  return (
    <QuantityView>
      <DcereaseQuantityButton onPress={onMinus}>
        <DcereaseQuantityText>-</DcereaseQuantityText>
      </DcereaseQuantityButton>
      <QuantityButton>
        <QuantityText>{value}</QuantityText>
      </QuantityButton>
      <IncreaseQuantityButton onPress={onAdd}>
        <IncreaseQuantityText>+</IncreaseQuantityText>
      </IncreaseQuantityButton>
    </QuantityView>
  );
};

export default StepperInput;
