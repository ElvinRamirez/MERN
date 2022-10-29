import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      //
      <PersonCard firstName={'Jane'} lastName={'Doe'} age={'45'} hairColor={'Black'}/>

      <PersonCard firstName={'Millard'} lastName={'Smith'} age={'88'} hairColor={'Brown'}/>

      <PersonCard firstName={'Elliot'} lastName={'Alderson'} age={'28'} hairColor={'Black'}/>

      <PersonCard firstName={'Tyrell'} lastName={'Wellick'} age={'35'} hairColor={'Blonde'}/>
    </div>
  );
}

export default App;
