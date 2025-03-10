import React from 'react'

interface PageContentsProps {
    children?: React.ReactNode;
}

export default function PageContents(props: PageContentsProps) {
    const {children} = props;
  
    return (
        <div className='items-center flex flex-col w-full h-full pt-8'>
            {children}
        </div>
  );
};
