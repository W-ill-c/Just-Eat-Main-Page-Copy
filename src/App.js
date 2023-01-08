import './App.scss';
import MainBody from './components/mainBody/mainBody';
import WholeSearchSection from './components/search/search'
import './components/mainBody/mainBody.scss';
import './components/navBar/navBar.scss';
import './components/search/search.scss'


function App() {
  return (
    <div className="App">
      <MainBody />
      <WholeSearchSection />
      <footer className='footer'></footer>
    </div>
  );
}

export default App;
