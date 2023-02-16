import React from 'react'

function NotFoundPage() {
    return (

        <div className="h-100 d-flex flex-column justify-content-center align-items-center">
            <img
                src="/images/404.png"
                alt="404"
                height={304}
                className="mt-5"
            />
            <h4>صفحه موردنظر پیدا نشد.</h4>
        </div>
    );
}

export default NotFoundPage