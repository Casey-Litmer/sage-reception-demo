import React from 'react'

interface PageContentsProps {
    children?: React.ReactNode;
}

export default function PageContents(props: PageContentsProps) {
    const {children} = props;
  
    return (
        <div style={{
            alignItems:'center',
            //justifyContent:'center',
            display: 'flex',
            flex: 1,
            flexDirection:'column',
            width: '100%',
            height: '100%',
            paddingTop: '32px',
        }}>
            {children}
        </div>
  );
};
