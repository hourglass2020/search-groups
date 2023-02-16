import React from "react";

function LandingHeader() {
    return (
        <section className="my-5 d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex align-items-center ">
                <img src="/images/logo.png" alt="logo" height={150} />
                <h1 className="mx-4">گروه یاب</h1>
            </div>
            <h5 className="text-center">
                سایت جست و جو و یافتن گروه های تکنولوژی در تلگرام
            </h5>
        </section>
    );
}

export default LandingHeader;
