import './App.css';
import Fifth from './Components/Fifth';
import First from './Components/First';
import Footer from './Components/Footer';
import Fourth from './Components/Fourth';
import Header from './Components/Header';
import Second from './Components/Second';
import Third from './Components/Third';


function App() {
  return (
    <div className="App">
      <div className='font-sans'>
        <Header></Header>
        <First></First>
        <Second></Second>
        <Third></Third>
        <Fourth></Fourth>
        <Fifth></Fifth>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
