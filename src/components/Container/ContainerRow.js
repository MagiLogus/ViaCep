import styled from "styled-components";

const Container = styled.View`
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