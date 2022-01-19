/* src/components/GreetingPage/greetingPage.js */

import React from 'react';

const GreetingPage = () => {
    return (
        <div style={{ paddingLiftRight: '80px' }}>
            <div style={{ textAlign: 'center' }}>
                <h1>Chao moi nguoi den voi the gioi Linux</h1>
                <h1 style={{ color: 'blue' }}>Minh la: Nguyen Tien ANh</h1>
                <h1 style={{ color: 'red' }}>HỌC PWA_STUDIO MAGENTO</h1>
            </div>
            <img
                src="https://maytinhvui.com/wp-content/uploads/2020/11/hinh-nen-may-tinh-4k-game-min.jpg"
                style={{
                    width: '60%',
                    height: '300px',
                    margin: 'auto',
                    marginBottom: '30px'
                }}
            />
        </div>
    );
};

export default GreetingPage;
