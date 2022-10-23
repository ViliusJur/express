import React from 'react';
import CarForm from "../components/CarForm";
import FindForm from "../components/FindForm";

const IndexPage = () => {

    return (
        <div className="d-flex">
            <CarForm/>
            <FindForm/>
        </div>
    );
};

export default IndexPage;