import { StatusBar } from "expo-status-bar";
import styled from "styled-components";

const Container = styled.View`
flex: 1;
width: 100%;
height: 80%;
align-items: center;
justify-content: center;
`;

const ContainerScreen = ({ children }) => (
    <Container>
        <StatusBar barStyle="light-content" style="auto" />
        {children}
    </Container>
);

export default ContainerScreen;