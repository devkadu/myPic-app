import { Route } from 'react-router';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <Route exact path="/signup" component={Signup}/>
    </div>
  )
}

export default App;
