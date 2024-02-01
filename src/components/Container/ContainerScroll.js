import styled from "styled-components";

const Container = styled.ScrollView`
flex-grow: 1;
`;

const ContainerScroll = ({ children }) => (
    <Container>
        {children}
    </Container>
);

export default ContainerScroll;