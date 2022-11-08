import React, { useState } from "react";


interface FormElements extends HTMLFormControlsCollection {
    // target:,
    target: HTMLInputElement
}

type StockData = {
    time: Date,
    price: number,
    name: string
}

const App = () => {
    const [stockData, setStockData] = useState<StockData>({} as StockData);

    const submitForm = (event: React.FormEvent) => {

        console.log('form submitted')
        // event.preventDefault();
        // if(event.target?['ticker']?.value){
        // }

        const a = event.target['ticker'].value

        console.log(a)
    }

    const tempData: StockData = {
        time: new Date(),
        price: 123,
        name: 'Hello'
    }

    return (
        <div>
            <h1>Stocks and Times</h1>
            <form onSubmit={(event) => {
                event.preventDefault()
                submitForm(event)
                setStockData(tempData)
            }}>
                <input type='text' id="ticker" placeholder={'Enter Symbol Here'}></input>
                <input type='submit' id="form-button" value={'Submit'}></input>
            </form>
            {/* {price} */}
        </div>
    )
}

export default App;