import React from "react";
import styled from "styled-components";
import Searchbar from "../../components/Searchbar";

export default function Header(): JSX.Element {
    return (
        <header>
            <div>
                <Headline>
                    <Title>
                        Simple
                        <span style={{ color: "#ff5353" }}> Catalog</span>
                    </Title>
                </Headline>
                <Description>
                    Catalogue of anything product or service
                </Description>
                <Searchbar />
            </div>
        </header>
    );
}

const Headline = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #68727b;
    font-size: 2rem;
    padding-top: 4rem;
    font-family: MaisonNeue-Demi !important;
`;

const Title = styled.h1`
    color: rgb(193, 193, 193);
`;

const Description = styled.h3`
    margin-top: 2vh;
    color: #68727b;
    margin-left: 2rem;
    margin-right: 2rem;
    font-family: MaisonNeue-Medium;
`;
