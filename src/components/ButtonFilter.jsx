import "./ButtonFilter.css"
import PropTypes from "prop-types"

export default function ButtonFilter(props) {

    return (
        <label htmlFor="">{props.labelText}</label>
    )
}

ButtonFilter.propTypes = {
    labelText: PropTypes.string,
    
}