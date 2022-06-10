import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import ServiceFilter from './components/ServiceFilter';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <ServiceFilter />
        <ServiceAdd />
        <ServiceList />
      </div>
    </div>
  );
}

export default App;
