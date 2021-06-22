import {Home} from './pages/Home'
import { NewRoow } from "./pages/NewRoom";
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
  //  <Home />
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" component={NewRoow} />
    </BrowserRouter>
  
  );
}

export default App;
