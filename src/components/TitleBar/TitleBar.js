import styled from 'styled-components';

const TitleBarContainer = styled.View`
width: 100%;
height: 201px;
border-radius: 0px 0px 15px 15px;
background: #FECC2B;
shadow-color: #000;
shadow-offset: 0px 4px;
shadow-opacity: 0.15;
shadow-radius: 15px;
elevation: 5;
`;

const TitleText = styled.Text`
margin-top: 82px;
font-family: "Roboto_400Regular";
color: #333E33;
text-align: center;
font-size: 24px;
font-style: normal;
font-weight: 500;  
`;

const TitleBar = () => (
    <TitleBarContainer>
        <TitleText>Consumo da API ViaCep</TitleText>
    </TitleBarContainer>
);

export default TitleBar;