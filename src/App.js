import qrcode from './images/image-qr-code.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='component'>
        <img src={qrcode} alt="QR code"/>
        <h1>Improve your front-end skills by building projects</h1>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  );
}

export default App;
