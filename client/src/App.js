import { Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing/Landing.jsx';
import Home from './components/Home/Home.jsx';
import CountryId from './components/CountryId/CountryId.jsx';
import Activity from './components/Activity/activity.jsx';

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={Landing}/>
      <Route exact path='/countries' component={Home}/>
      <Route exact path='/countries/:id' component={CountryId}/>
      <Route path='/activities' component={Activity}/>
    </div>
  );
}

export default App;
