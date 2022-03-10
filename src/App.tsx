import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { RouterConfig } from './Routes/Routes';


function App() {
  return (
    <BrowserRouter>
      <RouterConfig />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
