import './App.css';
import { Routes, Route } from 'react-router-dom';
import Herosection from './pages/Herosection';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MantineProvider><Herosection /></MantineProvider>} />
      </Routes>
    </>
  );
}

export default App;
