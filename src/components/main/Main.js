import React from 'react'
import miPhone from '../../assets/imgs/96ce455a76281353ec29ce4d3d2d8fd2.jpg'
import './Main.css';

function Main() {
    return (
        <div>
            <div className='container'>
                <div className='text_content'>
                    <h2>Xiaomi Series</h2>
                    <p>A new era of exquisite design</p>
                    <div>
                        <button>More</button>
                    </div>
                </div>
                <div className='img_wrapper'>
                    <img src={miPhone} alt="" width={'1400'} height={'100%'} />
                    <div className='img_text_content'>
                        <h1>
                            Xiaomi 14 Ultra
                        </h1>
                        <p>Lens to legend</p>
                        <div>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;