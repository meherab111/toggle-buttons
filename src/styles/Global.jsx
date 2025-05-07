import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    @import url("https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&family=Gruppo&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

/* base rule */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  -ms-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  background-color:  ${({ toggle1, theme }) =>
    toggle1 ? theme.colors.bgColorDark : theme.colors.bgColorLight};
}

p {
  font-size: 3.6rem;
}

/* layout */

.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-column {
  flex-direction: column;
}

`;
