import React from "react";
import Header from "../../components/Header/Header";


const LayoutContainer = (props)=>{
    const { children } = props;
    return(
        <div className="layout">
            <Header/>
            <main className="main">
                {children}
            </main>
        </div>
    );
};

export default LayoutContainer;
