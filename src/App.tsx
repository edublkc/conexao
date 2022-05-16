import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { RouterConfig } from './routes/Routes';
import { FirebaseAuthProvider } from './context/firebaseAuthContext';
import { BroadcastInformationsContextProvider } from './context/broadcastInformationsContext'
import { CanvasContextProvider } from "./context/canvasContext";
   
function App() {
  return (

    <CanvasContextProvider>
      <BroadcastInformationsContextProvider>
        <FirebaseAuthProvider>
          <BrowserRouter>
            <RouterConfig />
            <GlobalStyle />
          </BrowserRouter>
        </FirebaseAuthProvider>
      </BroadcastInformationsContextProvider>
    </CanvasContextProvider>


  );
}

export default App;
