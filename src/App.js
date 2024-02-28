import './App.css';
import HellWord from './components/HelloWord';
import SayMyName from './components/SayMyName';

function App() {

  const name = 'Calculadora que soma: ';
  const url = 'https://via.placeholder.com/150'
  const nome = 'Jefferson'
  

  function soma(a,b) {
    return a+b;
  }

  return (
    <div className="Login">
      <SayMyName nome = "Anderson"/>
      <SayMyName nome = "Amanda"/>
      <SayMyName nome = {nome}/>
      <HellWord/>
    </div>
  );  
}

export default App;
