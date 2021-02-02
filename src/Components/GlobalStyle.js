import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
		background: #111;
		padding-top: 65px;
		color: #fff;
	}
	a {
		display: block;
		text-decoration: none;
	}
`


export default GlobalStyle;