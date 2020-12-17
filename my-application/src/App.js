
import './App.css';
import BarChart from './components/BarChart';
import MonthlyBar from './components/MonthlyBarChart';
import Threemonth from './components/ThreeMonthsChart';

function App() {
  return (
    <div className="App">
<BarChart/>
<MonthlyBar/>
<Threemonth/>
    </div>
  );
}

export default App;
