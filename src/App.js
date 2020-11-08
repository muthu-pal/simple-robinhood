import React,  { useState} from 'react';
import './App.css';
import './stockView';
import StockView from './stockView';


function App() {
  //create state that holds ticker data
  const [tickers, setTickers] = useState([
    {name: 'GOOG', price: 5.10},
    {name: 'AAPL', price: 8.53},
    {name: 'AMZN', price: 10.40},
    {name: 'TWTR', price: 4.05},
    {name: 'JPM', price: 3.52},
   ]);


  function round(value) {
    return Number(Math.round(value+'e'+2)+'e-'+2);
   }  
  function changePrice(original){
    const possiblePrice = [original+0.05*original, original-0.05*original]
    return round(possiblePrice[Math.floor(Math.random() * 2)])
  }

  const tickerView = tickers.map((ticker)=> 
    <StockView name={ticker.name} price={ticker.price} key={ticker.name}/>
  ); 


function buttonChange() {
  let newPrices = tickers.map(
    ticker => 
    {
      return {
      ...ticker,
      price: changePrice(ticker.price)
      }
    })
    setTickers(newPrices);

}

  return (
    <div className="App">
      {tickerView}
      <button onClick={buttonChange}>
      click to refresh price</button>
    </div>
  );
}

export default App;
