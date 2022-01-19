import React from 'react';
import { useParams } from 'react-router-dom';

const hi = {
    textAlign: 'center',
    margin: '1rem'
};
const wave = {
    ...hi,
    fontSize: '5rem'
};

const SlidePage = () => {
    const { who = 'nobody' } = useParams();
    return (
        <div>
            <h1 style={hi}>Hello, {who}!</h1>
            <h1 style={wave}>{'\uD83D\uDC4B'}</h1>
            <img
                src="https://recmiennam.com/wp-content/uploads/2020/10/tong-hop-nhung-hinh-anh-dep-nhat-the-gioi-6.jpg"
                style={{ width: '80%', height: '100%', margin: 'auto' }}
            />
        </div>
    );
};

export default SlidePage;
