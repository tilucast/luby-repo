import {createGlobalStyle} from 'styled-components'

const GlobalStyle =  createGlobalStyle`
:root{
    --dark: rgb(41, 41, 41);
    --yellow: rgb(255, 206, 0);
    --red: rgb(208, 52, 52);
    --white: rgb(255, 255, 255);
    --green: rgb(99, 191, 31);
    --dark-gray: rgb(56, 56, 56);
    --light-gray: rgb(201, 201, 201);
}

::selection{
  background-color: var(--yellow);
  color: var(--white);
}

#root{
  height: 90vh;
}

html{
    font-size: 62.5%;
}

@media (max-width: 800px){
  html{
    font-size: 50%;
  }
  
}

* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body, html{
  height: 100%;
  box-sizing: border-box;
  background-color: var(--dark);
  color: var(--white);
  width: 100%;
  font-family: 'Roboto', sans-serif;
}
`

export default GlobalStyle