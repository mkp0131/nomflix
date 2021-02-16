import Router from "Components/Router";
import GlobalStyle from "./GlobalStyle";
import { HelmetProvider } from 'react-helmet-async';

function App() {	
  return (
		<>
		<HelmetProvider>

			<Router />
      <GlobalStyle />
		</HelmetProvider>
		</>
  );
}

export default App;
