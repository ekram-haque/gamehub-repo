import React from 'react';

const Container = ({children}) => {
    return (
        <div className='w-11/12 mx-auto py-1 px-1  '>
            {children}
        </div>
    );
};

export default Container;