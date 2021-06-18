import './App.css';
import professionPhoto from './Images/Professional-Photo.jpg'

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <h2>My name is William Xiong, and this is me.</h2>
      <img src={professionPhoto} alt="professionalPhoto" />
    </div>
  );
}

export default App;
