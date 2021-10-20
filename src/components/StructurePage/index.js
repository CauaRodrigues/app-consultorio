import React from "react";
import Header from '../Header';
import Footer from '../Footer';

const StructurePage = ( props ) => {
    return(
        <section>
            <Header />
                {props.children}
            <Footer />
        </section>
    );
}

export default StructurePage;