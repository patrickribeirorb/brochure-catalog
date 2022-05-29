import React, { memo, useCallback } from "react";
import styled from "styled-components";
import SearchbarInput from "./SearchbarInput";

export function Searchbar() {
    const handleInputKeyUp = useCallback(() => {}, []);

    return (
        <>
            <Bar>
                <SearchbarInput onKeyUp={handleInputKeyUp} />
            </Bar>
        </>
    );
}

const Bar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
`;

export default memo(Searchbar);
