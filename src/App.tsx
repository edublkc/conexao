import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { RouterConfig } from './routes/Routes';
import { FirebaseAuthProvider } from './context/firebaseAuthContext';
import { PlatformsContextProvider } from './context/platformsContext'

function App() {
  return (
    <PlatformsContextProvider>
      <FirebaseAuthProvider>
        <BrowserRouter>
          <RouterConfig />
          <GlobalStyle />
        </BrowserRouter>
      </FirebaseAuthProvider>
    </PlatformsContextProvider>

  );
}

export default App;
