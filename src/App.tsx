import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './styles/global';
import { RouterConfig } from './Routes/Routes';
import { Header } from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <RouterConfig />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
