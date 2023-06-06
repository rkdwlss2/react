import './App.css';
import { Route } from 'react-router-dom';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Route path='/' exact={true} component={ListPage} />
      <Route path='/write' exact={true} component={WritePage} />

    </div>
  );
}

export default App;
