import { StatusBar } from "expo-status-bar";
import styled from "styled-components";

const Container = styled.SafeAreaView`
flex: 1;
`;

const ContainerScreen = ({ children }) => (
    <Container>
        <StatusBar barStyle="light-content" />
        {children}
    </Container>
);

export default ContainerScreen;