import styled from "styled-components";

const Container = styled.View`
flex: 1;
width: 100%;
justify-content: space-between;
flex-direction: row;
`;

const ContainerRow = ({ children }) => (
    <Container>
        {children}
    </Container>
);

export default ContainerRow;