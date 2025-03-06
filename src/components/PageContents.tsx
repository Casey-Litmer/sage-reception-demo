import React from 'react'

interface PageContentsProps {
    children?: React.ReactNode;
}

export default function PageContents(props: PageContentsProps) {
    const {children} = props;
  
    return (
        <div style={{
            //alignItems:'center',
            justifyContent:'center',
            display: 'flex',
            flexDirection:'row',
            width: '100%',
            height: '100%',
            paddingTop: '64px',

        }}>
            {children}
        </div>
  );
};
