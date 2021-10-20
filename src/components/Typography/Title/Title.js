import React from "react";
import "./Title.scss";


const Title = (props)=>{
    const {children} = props;
    return(
        <h5 className="title">{children}</h5>
    );
};

export default Title;
