import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Views/Home';

function App() {
  return (
    <Router>
      <Route component={Home} path={'/home'} />
    </Router>
  );
}

export default App;
