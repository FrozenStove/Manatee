import React, { useState } from "react";

type StockData = {
    time: string,
    price: number,
    percent: number,
    name: string,
    symbol: string,
    success: boolean,
}

const App = () => {
    // initialize state for the loading circle and the stock data
    const [stockData, setStockData] = useState<StockData>({success: true} as StockData);
    const [loading, setLoading] = useState<boolean>(false)

    // function to handle the onSubmit of the form
    const submitForm = (event: React.FormEvent) => {
        const target = event.target as typeof event.target & {
            ticker: { value: string };
        };

        // create object to help coordinate fetching options
        const fetchOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({symbol: target.ticker.value}),
        }

        // access data from our custome API
        fetch('/api/v1', fetchOptions)
            .then((data) => {
            // remove the loading circle here to ensure it is removed before any errors are caught
            setLoading(false)
            return data.json()
            })
            .then((data) => {
                // console.log('success', data)
                setStockData({
                    time: new Date().toLocaleTimeString(),
                    price: data.price,
                    percent: Math.round(data.percent * 100)/100,
                    name: data.name,
                    symbol: target.ticker.value,
                    success: true
                })                
            }) 
            .catch((error) => {
                setStockData({
                    time: 'No Data',
                    price: NaN,
                    percent: 0,
                    name: 'No Data',
                    symbol: target.ticker.value,
                    success: false
                })  
                throw new Error(error);
            })
    }

    return (
        <div>
            <h1>Stocks and Times</h1>
            <h3>Enter a symbol in all caps</h3>
            <form onSubmit={(event) => {
                event.preventDefault()
                submitForm(event)
                setLoading(true)
                setStockData({...stockData, success: true})
            }}>
                <input type='text' name="ticker" placeholder={'Enter Symbol Here'}></input>
                <input type='submit' id="form-button" value={'Submit'}></input>
            </form>
            <div id="results">
                <p>Name: {stockData.name}</p>
                <p>Symbol: {stockData.symbol}</p>
                <p>Price: {stockData.price}</p>
                <p>Percent Change: {stockData.percent}%</p>
                <p>Current Time: {stockData.time}</p>
            </div>
            {loading && <span><div className="loader"></div>Loading...</span>}
            {!stockData.success && <h1>No Data Received</h1>}
        </div>
    )
}

export default App;