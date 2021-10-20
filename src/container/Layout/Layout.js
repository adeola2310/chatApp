import React from "react";
import Header from "../../components/Header/Header";


const LayoutContainer = (props)=>{
    const { children } = props;
    return(
        <>
            <Header/>
            <main className="main">
                {children}
            </main>
        </>
    );
};

export default LayoutContainer;
