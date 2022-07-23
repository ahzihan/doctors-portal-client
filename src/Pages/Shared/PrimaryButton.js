import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button class="btn bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold border-0">{children}</button>
        </div>
    );
};

export default PrimaryButton;