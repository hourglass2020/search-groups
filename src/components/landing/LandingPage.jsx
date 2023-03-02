import React, { useContext } from "react";

import LandingHeader from "./LandingHeader";
import LandingGroups from "./LandingGroups";
import LandingSearch from "./LandingSearch";

function LandingPage() {
    return (
        <div className="d-flex flex-column justify-content-center">
            <LandingHeader />
            <section className="d-flex flex-column justify-content-center align-items-center">
                <LandingSearch />
                <LandingGroups />
            </section>
        </div>
    );
}

export default LandingPage;
