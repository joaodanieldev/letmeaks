
import {Home} from './pages/Home';
import { NewRoow } from "./pages/NewRoom";
import {BrowserRouter, Route} from 'react-router-dom';

import {AuthContextProvider} from './context/AuthContext'


function App() {
  return (  
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoow} />
      </AuthContextProvider>
    </BrowserRouter>
  
  );
}

export default App;
