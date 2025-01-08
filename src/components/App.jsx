import "./App.css"
import ButtonFilter from "./buttonFilter"
import data from "./../../public/data.json"
import InfoCoffe from "./InfoCoffe"
import { useState, useEffect } from "react"

export default function App() {

    const [infoCoffe, setInfoCoffe] = useState([]);
    const [buttonSelect, setButtonSelect] = useState(true);
    
    function changeBotton(btn) {
        if (btn === 1) {
            setButtonSelect(true);
            console.log("buttonSelect");
            
        } else if (btn === 2) {
            setButtonSelect(false);
        }
    }

    useEffect(() => {
        if (buttonSelect) {
            setInfoCoffe(data);
        } else {
            setInfoCoffe(data.filter((item) => item.available));
        }
    }, [buttonSelect]);


    return (
        <div className="appContainer">
            <div className="bgImg"></div>
            
            <div className="container">
                <div className="vector"></div>
                <div className="heading">
                    <h1>Our Colletion</h1>
                </div>
                <div className="body">
                    <p>Introducing our Coffee Collection, a selection of unique coffees
                    <br /> from different roast types and origins, expertly roasted in small <br /> batches and shipped fresh weekly.</p>
                </div>    

                <div className="labels">
                    <ButtonFilter labelText={"All Products"}  buttonId={1} bottonSwitch={changeBotton} isSelected={buttonSelect}/>
                    <ButtonFilter labelText={"Available Now"} buttonId={2} bottonSwitch={changeBotton} isSelected={!buttonSelect}/>
                </div>
                <div className="itemsContainer">
                    {infoCoffe.map((item) => {
                        return (
                            <InfoCoffe
                            key={item.id}
                            id={item.id}
                            url={item.image}
                            isPopular={item.popular}
                            name={item.name}
                            votes={item.votes}
                            price={item.price}
                            rate={item.rating}
                            isAvailable={item.available}
                            />
                        );
                        })}
                </div>


            </div>
            


        </div>
    )
}
