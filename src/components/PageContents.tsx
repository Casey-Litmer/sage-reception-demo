import React from 'react'

interface PageContentsProps {
    children?: React.ReactNode;
}

export default function PageContents(props: PageContentsProps) {
    const {children} = props;
  
    return (
        <div 
            className='items-center flex flex-1 flex-col w-full h-full pt-8'
            //style={{
            //    flex: 1, flexDirection: 'column', width: '100%', height: '100%',
            //    paddingTop: '32px', alignItems: 'center', justifyItems:'center'
            //}}
        >
            {children}
        </div>
  );
};
