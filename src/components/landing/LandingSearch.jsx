import React from 'react';

import SearchForm from './../navs/SearchForm';

function LandingSearch() {
    return (
        <div className="my-4 d-flex w-100 flex-column justify-content-end">
            <div className="col-12 h-25">
                <h2 className='text-center mb-2'>جست و جو کنید:</h2>
                <SearchForm />
            </div>
        </div>
    )
}

export default LandingSearch