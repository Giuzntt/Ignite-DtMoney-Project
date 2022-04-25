import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --red: #e52e4d;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --text-title: #363f5f;
        --text-body:#969CB3;
        --shape: #FFFFFF;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-with: 1080px) {
            font-size: 93.75%;
        }
        @media (max-with: 720px){
            font-size: 87.5%;
        }
    }

    body{
        background: var(--background);
        -webkit-font-smmothing: antialiased;

    }
    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`