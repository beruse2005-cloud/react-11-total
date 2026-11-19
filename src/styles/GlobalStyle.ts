import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        background-color: #f4f6f8;
        color: #2c3e50;
        font-family: "Pretendard", sans-serif;
    }
    a {
        color: inherit;          // inherit : 부모 색상을 물려받는다
        text-decoration: none;
    }
`;

export default GlobalStyle;
