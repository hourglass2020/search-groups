import React from 'react';

import SearchForm from './../navs/SearchForm';

function LandingSearch() {
    return (
        <div className="my-4 d-flex w-100 flex-column justify-content-end">
            <div className="col-12 h-25">
                <div className="row">
                    <h2 className="col-sm-5 col-12">جست و جو کنید:</h2>
                    <div className="col-sm-7 col-12">
                        <SearchForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingSearch