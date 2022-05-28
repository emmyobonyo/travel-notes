import './App.css';
import Header from './header/Header';
import Item from './items/Item';
import data from './items/data';

function App() {
  return (
    <div className="App">
      <Header />
      { data.map((data) => (
        <Item data={data} />
      ))}
    </div>
  );
}

export default App;
