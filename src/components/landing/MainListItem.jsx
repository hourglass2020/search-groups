import React from 'react'
import { BsFillCaretLeftFill } from 'react-icons/bs'

function MainListItem() {
    return (
        <div className='d-flex justify-content-between align-items-center main-list-item'>
            <div className='d-flex align-items-center'>
                <img src="/images/telegram.png" alt="" height={50} />
                <div>
                    <h6>گروه</h6>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    </p>
                </div>
            </div>
            <div className='main-list-item-more'>
                <BsFillCaretLeftFill />
            </div>
        </div>
    )
}

export default MainListItem