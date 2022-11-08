import React, { useState } from "react";

type StockData = {
    time: string,
    price: number,
    name: string,
    symbol: string
}

const App = () => {
    const [stockData, setStockData] = useState<StockData>({} as StockData);

    const submitForm = (event: React.FormEvent) => {
        const target = event.target as typeof event.target & {
            ticker: { value: string };
        };

        const fetchOptions = {
            method: "POST",
            header: "application-type/json",
            body: target.ticker.value,
        }

        fetch('/api', fetchOptions)
            .then((data) => data.json())
            .then()
            .catch((error) => {
                console.log('Error Encountered', error)
                throw new Error(error);
            })

        const a = target.ticker.value
        console.log(a)
    }

    const tempData: StockData = {
        time: new Date().toDateString(),
        price: 123,
        name: 'Hello',
        symbol: 'aapl'
    }

    return (
        <div>
            <h1>Stocks and Times</h1>
            <form onSubmit={(event) => {
                event.preventDefault()
                submitForm(event)
                setStockData(tempData)
            }}>
                <input type='text' name="ticker" placeholder={'Enter Symbol Here'}></input>
                <input type='submit' id="form-button" value={'Submit'}></input>
            </form>
            <div id="results">
                <p>Name: {stockData.name}</p>
                <p>Symbol: {stockData.symbol}</p>
                <p>Price: {stockData.price}</p>
                <p>Time: {stockData.time}</p>
            </div>
        </div>
    )
}

export default App;