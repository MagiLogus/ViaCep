import styled from "styled-components";

const Container = styled.View`
flex: 1;
gap: 20px;
margin-top: 20px;
`;

const ContainerForm = ({ children }) => (
    <Container>
        {children}
    </Container>
);

export default ContainerForm;