import { createGlobalStyle } from "styled-components";
import fonts from "../assets/fonts";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'MaisonNeue-Thin';
        src: local('MaisonNeue-Thin'), url(${fonts.maisonNeueThin}) format('opentype');
    }
    @font-face {
        font-family: 'MaisonNeue-Medium';
        src: local('MaisonNeue-Medium'), url(${fonts.maisonNeueMedium}) format('opentype');
    }

    @font-face {
        font-family: 'MaisonNeue-Light';
        src: local('MaisonNeue-Light'), url(${fonts.maisonNeueLight}) format('opentype');
    }
    @font-face {
        font-family: 'MaisonNeue-Demi';
        src: local('MaisonNeue-Demi'), url(${fonts.maisonNeueDemi}) format('opentype');
    }
    @font-face {
        font-family: 'MaisonNeue-Book';
        src: local('MaisonNeue-Book'), url(${fonts.maisonNeueBook}) format('opentype');
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        width: 100%;
        height: 100%;
        background: #171624;
    }
`;
