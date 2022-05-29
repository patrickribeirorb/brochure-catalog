import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "./GlobalStyle";

import Home from "./Home";
import Header from "./Layouts/Header";

export default function App(): JSX.Element {
    return (
        <Container>
            <GlobalStyles />
            <Header />
            <Home />
        </Container>
    );
}

const Container = styled.div`
    font-family: sans-serif;
    text-align: center;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
`;
