import Provider from './context/Provider';
import './App.css';
import MaindPage from './page';

function App() {
  return (
    <Provider>
      <div className="App">
        <MaindPage />
      </div>
    </Provider>
  );
}

export default App;
