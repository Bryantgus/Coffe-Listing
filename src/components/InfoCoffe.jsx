import "./InfoCoffe.css"
import PropTypes from "prop-types"

export default function InfoCoffe() {
    return (
        <h1>component coffe</h1>    
    )
}

InfoCoffe.propTypes = {
    popular: PropTypes.string,
    urlImg: PropTypes.string,
    name: PropTypes.string,
    stars: PropTypes.string,
    votes: PropTypes.string,
    price: PropTypes.string,
}