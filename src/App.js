import styled from "styled-components"
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: #f9f9f9
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;
function App() {
  return (
    <Container>
      <Menu />
      <Main>
        <NavBar />
        <Wrapper>

        </Wrapper>
      </Main>
    </Container>
  );
}

export default App;
