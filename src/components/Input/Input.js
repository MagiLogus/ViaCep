import styled from 'styled-components';

export const ContainerInput = styled.View`
align-items: start;
`

export const LabelInput = styled.Text`
color: #047CD3;
font-family: "Roboto_700Bold";
font-size: 18px;
font-style: normal;
font-weight: 700;
`

export const Input = styled.View`
width: 100%;
padding: 20px;
border-radius: 10px;
border: 2px solid #A1A1A1;
background: #F6F6F6;
`

export const ContainerState = styled(ContainerInput)`
width: 70%;
`

export const ContainerUf = styled(ContainerInput)`
width: 23%;
`

export const TextInput = styled.TextInput`
color: #A1A1A1;
font-family: "Roboto_500Medium";
font-size: 18px;
font-style: normal;
font-weight: 500;
`

const FullInput = ({ title, placeholder }) => (
  <ContainerInput>
    <LabelInput>{title}</LabelInput>
    <Input>
      <TextInput placeholder={placeholder}></TextInput>
    </Input>
  </ContainerInput>
);

const StateInput = ({ title, placeholder }) => (
  <ContainerState>
    <LabelInput>{title}</LabelInput>
    <Input>
      <TextInput placeholder={placeholder}></TextInput>
    </Input>
  </ContainerState>
);

const UfInput = ({ title, placeholder }) => (
  <ContainerInput>
    <LabelInput>{title}</LabelInput>
    <Input>
      <TextInput placeholder={placeholder}></TextInput>
    </Input>
  </ContainerInput>
);

export { FullInput, StateInput,UfInput };

