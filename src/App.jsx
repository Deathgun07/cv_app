// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ModelSelectionPage from './selectModele';
import View from './viewpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ModelSelectionPage />} />
        <Route path="/cv-view/:model" element={<View />} />
      </Routes>
    </Router>
  );
}

export default App;
