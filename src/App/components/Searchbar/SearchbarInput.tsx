import React from "react";
import styled from "styled-components";

interface SearchbarInputProps {
    onKeyUp?: React.KeyboardEventHandler;
}

export default function SearchbarInput({
    onKeyUp,
}: SearchbarInputProps): JSX.Element {
    return (
        <Wrapper>
            <Input
                type="text"
                id="location"
                name="lname"
                placeholder="Search with filters..."
                autoComplete="off"
                onKeyUp={onKeyUp}
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 40%;
    height: 2rem;
    border-radius: 0px;
    display: flex;
    background: #1f1e31;
    justify-content: space-between;
`;

const Input = styled.input`
    margin-left: 12px;
    height: 2rem;
    background: #1f1e31;
    outline: none;
    border: 0;
    width: 95%;
    box-shadow: 0 10px 35px rgb(0 0 0 / 10%);
    color: #6c757d;
    font-family: MaisonNeue-Light;
`;
