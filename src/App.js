import './App.css';
import logo from './logo.svg';
import { format } from 'date-fns';


function App() {
  console.log("awerawe")
  const today = format(new Date(), 'dd.MM.yyyy HH:mm');
  // dd.MM.yyyy HH:mm 

  return (
    <>
    <div id='nav'>  
      <div id='obj'>
        <img id='logo' src={logo} alt='logo'></img>
        <input id='input'></input>
      </div>
      <h4 id='date'> {today} </h4>
    </div>
    <div id="main">
        <div className='block'>
          <img className='img' src='https://source.unsplash.com/gYl-UtwNg_I/1500x1500' alt='tau'></img>
          <h3 className='text'> HEY </h3>
        </div>
        <div className='block'>
          <img className='img' src='https://source.unsplash.com/rFKUFzjPYiQ/1500x1500' alt='tau'></img>
          <h3 className='text'> LET'S </h3>
        </div>
        <div className='block'>
          <img className='img' src='https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d' alt='tau'></img>
          <h3 className='text'> GIVE </h3>
        </div>
        <div className='block'>
          <img className='img' src='https://source.unsplash.com/ITjiVXcwVng/1500x1500' alt='tau'></img>
          <h3 className='text'> ALL </h3>
        </div>
        <div className='block'>
          <img className='img' src='https://source.unsplash.com/3MNzGlQM7qs/1500x1500' alt='tau'></img>
          <h3 className='text'> YOU CAN  </h3>
        </div>
    </div>
    </>
  );
}

export default App;
