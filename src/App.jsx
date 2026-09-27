import { useState } from 'react';
import Counter from './components/Counter.jsx';
import './index.css'
import TitleBar from './components/TitleBar.jsx';

const App = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <div className="app" data-theme={theme}>
      <TitleBar
        theme={theme}
        onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      <main id="main" className="app-main">
        <Counter />
      </main>
    </div>
  );
};

export default App;