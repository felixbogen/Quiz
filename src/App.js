
import react from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import auth from './components/Auth/Auth';
class App extends react.Component {
 render() {
   return (
     <div className="app">
       <h1>Welcome to My Quiz</h1>
       <Router>
         <Switch>
           <Route exact path="/" component={auth}/>
           <Route path="*">
            <Redirect to="/"/>
           </Route>
         </Switch>
       </Router>
     </div>
   )
 }
}

export default App;
