import React from 'react';

const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center '>
            <button type="button" className="text-secondary font-bold" disabled>
                <progress class="progress w-56"></progress>
                <p>Processing...</p>
            </button>
        </div>
    );
};

export default Loading;