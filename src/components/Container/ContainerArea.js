import styled from "styled-components";

const Container = styled.View`
flex: 1;
align-items: center;
justify-content: center;
width: 90%;
height: 80%;
`;

const ContainerArea = ({ children }) => (
    <Container>
        {children}
    </Container>
);

export default ContainerArea;