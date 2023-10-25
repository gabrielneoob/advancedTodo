import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: Arial, Helvetica, sans-serif;
  }

  html {
    height: 100vh;
  }
`

export const TodoContainer = styled.div`
  background-color: #eee;
  width: 450px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 1.4rem;
  border-radius: 5px;
`

export const Header = styled.header`
  h1 {
    text-align: center;
  }
  border-bottom: 1px solid #aaa;
  padding: 0 1rem 1rem;
`