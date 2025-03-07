import React, { CSSProperties } from 'react'


interface HomeTextSectionProps {
    children?: React.ReactNode;
    level: 'background' | 'raised';
    style?: CSSProperties;
}
export default function HomeTextSection(props: HomeTextSectionProps) {
    const {children, level, style} = props;

    const levelStyles = (level === 'raised') ? {
            backgroundColor:'#EEEEEE', marginBottom: 0, marginTop: 32,
            borderTopRightRadius:48, borderTopLeftRadius:48
        } : {}

    return (
        <div className='w-full min-h-32 mb-8 py-8  overflow-x-hidden
                        flex flex-col lg:flex-row justify-center items-center
                        lg:space-x-16 space-y-8 lg:space-y-0' 
            style={{...levelStyles, ...style}}>
            {children}
        </div>
    );
}

//===================================================================================
interface HomeSideTextProps {
    children?: React.ReactNode;
    style?: CSSProperties;
}
export function HomeSideText(props: HomeSideTextProps) {
    const {children, style} = props;
        
    return (
        <div className='w-96 p-8 justify-center leading-loose' style={style}>
            {children}
        </div>
    );
};

//===================================================================================
interface HomeCenterTextProps {
    children?: React.ReactNode;
    style?: CSSProperties;
}
export function HomeCenterText(props: HomeCenterTextProps) {
    const {children, style} = props;
        
    return (
        <div className='p-8 justify-center leading-loose' style={{width:'50vw', ...style}}>
            {children}
        </div>
    );
};
