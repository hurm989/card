import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Card from './card';
// import Button from './button';
function App() {
  const [arr, setArray] = useState([
    {
      id: 0,
      title: "Mobile Cover",
      product: "Readmi10",
      price: 300,
      quantity: 5,
      img: "https://www.pngall.com/wp-content/uploads/9/Mobile-Cover-PNG-Images.png"
    },
    {
      id: 1,
      title: "Mobile Cover",
      product: "Readmi5",
      price: 200,
      quantity: 5,
      img: "https://toppng.com/uploads/preview/virat-kohli-18-phone-cover-mobile-phone-case-11563428873i1ibcsdjrg.png"
    },
    {
      id: 2,
      title: "Mobile Cover",
      product: "Readmi6",
      price: 350,
      quantity: 5,
      img: "data:image/jpeg;base64,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"
    },
    {
      id: 3,
      title: "Mobile Cover",
      product: "Samsung",
      price: 350,
      quantity: 5,
      img: "https://www.pngmart.com/files/7/Mobile-Cover-PNG-Transparent.png"
    },
  ])
  let add = (i) => {
    let myProduct = arr.filter(function (e) {
      if (e.id == i) {
        return e
      }
    })
    console.log(myProduct)
    alert("ADDED")
  }
  return (
    <div className="App">
      <header className="App-header">
        <h4>Choose Your Product</h4>
        {
          arr.map((e, i) => {
            // key
            return <> <Card index={i} id={e.id} action={() => { add(i) }} imgsrc={e.img} title={e.title} product={e.product} price={e.price} quantity={e.quantity} />
            </>
          })
        }
      </header>
    </div>
  );
}

export default App;
