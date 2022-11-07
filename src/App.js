import styled from "styled-components"
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Video from "./pages/Video";
import Home from "./pages/Home";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: #f9f9f9
`;
const Wrapper = styled.div`
  padding: 10px 16px;
`;
function App() {
  return (
    <Container>

      <Menu />
      <Main>
        <NavBar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/video" element={<Video />} ></Route>
            <Route path="/video/:id" element={<Video />} />
          </Routes>
        </Wrapper>
      </Main>

    </Container>
  );
}

export default App;
