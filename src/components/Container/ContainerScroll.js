import styled from "styled-components";

const Container = styled.View`
flex-grow: 1;
justify-content: space-between;
align-items: center;
`;

const ContainerScroll = ({ children }) => (
    <Container>
        {children}
    </Container>
);

export default ContainerScroll;