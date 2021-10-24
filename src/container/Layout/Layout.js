import React from "react";


const LayoutContainer = (props)=>{
    const { children } = props;
    return(
        <div className="layout">
            <main className="main">
                {children}
            </main>
        </div>
    );
};

export default LayoutContainer;
