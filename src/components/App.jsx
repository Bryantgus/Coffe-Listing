import "./App.css"
import ButtonFilter from "./buttonFilter"
import data from "./../../public/data.json"
import InfoCoffe from "./InfoCoffe"
import { useState } from "react"

export default function App() {

    const [infoCoffe, setInfoCoffe] = useState({});

    return (
        <div className="appContainer">
            <div className="bgImg"></div>

            <div className="container">
                <div className="heading">
                    <h1>Our Colletion</h1>
                </div>
                <div className="body">
                    <p>Introducing our Coffee Collection, a selection of unique coffees
                    <br /> from different roast types and origins, expertly roasted in small <br /> batches and shipped fresh weekly.</p>
                </div>    

                <div className="labels">
                    <ButtonFilter labelText={"All Products"} />
                    <ButtonFilter labelText={"Available Now"} />
                </div>
                    
            </div>
            


        </div>
    )
}
