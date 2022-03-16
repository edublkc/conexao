import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { RouterConfig } from './routes/Routes';
import { FirebaseAuthProvider } from './context/firebaseAuthContext';


function App() {
  return (
    <FirebaseAuthProvider>
      <BrowserRouter>
        <RouterConfig />
        <GlobalStyle />
      </BrowserRouter>
    </FirebaseAuthProvider>

  );
}

export default App;
