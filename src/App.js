import './App.css';
import image from './shopping.webp'
import imageTwo from './man-.webp'
import { ShopList } from './ShopList';
function App() {
  return (
    <div className="app">
      <div className='container'>
      <img src={image} alt="shopping" width="200px"/>
     </div>
     <div className='container'>
      <h1>Shopping List</h1>
      </div>
      <ShopList />
      <div className='container'>
      <img src={imageTwo} alt="shopping" width="200px"/>
    </div>
    </div>
  );
}

export default App;
