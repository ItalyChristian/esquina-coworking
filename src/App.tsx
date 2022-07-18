import './App.css';

import MySlider from './components/Slider';
import Differentials from './components/Differentials';
import DinamicalCards from './components/DinamicalCards';
import Advantages from './components/Advantages';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <MySlider id="gallery"/>
      <Differentials />
      <DinamicalCards id="services"/>
      <Advantages />
      <Footer id="contact"/>
    </div>
  );
}

export default App;
