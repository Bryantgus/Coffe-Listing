import "./InfoCoffe.css"
import PropTypes from "prop-types"
import starImage from "../assets/Star.svg"
export default function InfoCoffe(props) {
    return (
        <div className="ItemcoffeContainer" id={props.id}>
            <div
            className="imgCoffe"
            style={{
                backgroundImage: `url(${props.url})`,
            }}>
            {props.isPopular && <span>Popular</span>}
            </div>
            <div className="info">
                <div className="namePrice">
                    <span>{props.name}</span>
                    <span>{props.price}</span>
                </div>
                <div className="rateVotes">
                    <div>
                        <img src={starImage} alt="Star" />
                        <span>{props.rate}</span>
                        <span>(Votes{props.votes})</span>
                    </div>

                    <div>    
                        {!props.isAvailable && <span>Sold Out</span> }
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

InfoCoffe.propTypes = {
    url: PropTypes.string,
    isPopular: PropTypes.bool,
    name: PropTypes.string,
    votes: PropTypes.number,
    rate: PropTypes.number,
    price: PropTypes.string,
    isAvailable: PropTypes.bool
}