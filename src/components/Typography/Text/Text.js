import React from "react";
import "./Text.scss";
import PropTypes from "prop-types";



const Text = (props)=>{
    const { children, className } = props;
    return(
        <p className={className}>
            {children}
        </p>
    );
};

Text.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string
};

export default Text;
