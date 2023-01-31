
import './App.css';
import CreditCard from './components/CreditCard/CreditCard';
import LinkedinCard from './components/LinkedinCard/LinkedinCard';
import {people} from './people.js'

function App() {
  // const infoCards = [
  //   {
  //     type:'visa',
  //     number: 1111222233334444,
  //     expirationMonth: 10,
  //     expirationYear: 2025,
  //     bank:'BNP',
  //     owner: 'Miguel Rocha',
  //     cssClass: 'first'
  //   },
  //   {
  //     type:'mastercard',
  //     number: 5555666677778888,
  //     expirationMonth: 11,
  //     expirationYear: 2030,
  //     bank:'N26',
  //     owner: 'Millard Dos Santos',
  //     cssClass: 'second'
  //   },
  //   {
  //     type:'visa',
  //     number: 9999888855552222,
  //     expirationMonth: 1,
  //     expirationYear: 2027,
  //     bank:'SAB',
  //     owner: 'Martin Balverde',
  //     cssClass: 'third'
  //   }
  // ]





  return (<>

    
    {
      people.map((e,i) => <LinkedinCard key={i} people={e}/>)
    }
  </>);
}

export default App;
