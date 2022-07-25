import './App.css';
import Search from './Components/search/search';
import Currentweather from './Components/current-weather/current-weather';


function App() {

  const handleonSearchChange = (searchData) => {
    console.log(searchData);
  }
  return (
    <div className="container">
      <Search onSearchChange={handleonSearchChange}></Search>
      <Currentweather></Currentweather>
    </div>
    
  );
}

export default App;
