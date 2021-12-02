import './App.css';
import background from './background.jpg';

import Main from './components/main/Main';

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Main />
    </div>
  );
}

export default App;
