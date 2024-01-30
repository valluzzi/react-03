
import './App.css';
import { MyCounter } from './MyCounter';
import { fireEvent } from './events';

const handleClick = () => {
  fireEvent('reset');
}


function App() {
  return <>
      <hr/>
      <MyCounter/>
      <hr/>
      <p>This is external button that change the internal state by firing an event</p>
      <button onClick={handleClick}>External Reset</button>
  </>;

}

export default App;
