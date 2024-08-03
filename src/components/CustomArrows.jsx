import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'grey', borderRadius: '50%', padding: '5px' }}
            onClick={onClick}
        >
            <FaArrowLeft color="white" />
        </div>
    );
};

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'grey', borderRadius: '50%', padding: '5px' }}
            onClick={onClick}
        >
            <FaArrowRight color="white" />
        </div>
    );
};

export { SamplePrevArrow, SampleNextArrow };
