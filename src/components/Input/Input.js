import React from 'react'; 
import styled from 'styled-components'; 

const InputGroup = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

const Label = styled.Text`
  margin-bottom: 8px; // Espaço entre o rótulo e o input
  font-size: 16px; // Tamanho da fonte do rótulo
  color: #000; // Cor do texto do rótulo
`;

const Input = styled.TextInput`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #A1A1A1;
  background: #F6F6F6;
`;

// Componente funcional LabelInput
const LabelInput = ({ label, ...props }) => (
  <InputGroup>
    <Label>{label}</Label>
    <Input {...props} /> // Propaga todas as props recebidas para o componente Input
  </InputGroup>
);

export default LabelInput;

