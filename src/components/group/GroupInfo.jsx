import React from 'react'

function GroupInfo({ group }) {
    return (
        <div className="d-flex justify-content-start align-items-center">
            <img
                src="/images/telegram.png"
                alt="telegram"
                height={150}
                width={150}
            />
            <div>
                <h3>{group.name}</h3>
                <div className="d-flex mt-4">
                    <a href={group.link} target="_blank">
                        <button className="btn btn-outline-success">لینک کانال</button>
                    </a>
                    <a href={group.admin ? group.admin : "#"} target="_blank">
                        <button className="btn btn-outline-primary me-2">
                            ادمین کانال
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default GroupInfo