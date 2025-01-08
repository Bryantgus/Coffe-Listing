import "./ButtonFilter.css"
import PropTypes from "prop-types"

export default function ButtonFilter(props) {

    return (
        <label htmlFor="" 
        className={`label ${props.isSelected ? "labelSelected": ""}`}
        onClick={() => props.bottonSwitch(props.buttonId)}
        
        >{props.labelText}</label>
    )
}

ButtonFilter.propTypes = {
    labelText: PropTypes.string,
    key: PropTypes.string,
}