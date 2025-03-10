import React, { CSSProperties } from 'react';
import {animated} from '@react-spring/web';


const AnimatedDiv = animated("div");

//=======================================================================================
interface HomeTextSectionProps {
    children?: React.ReactNode;
    level: 'background' | 'raised';
    style?: CSSProperties | any;
    className?: string;
}
export default function HomeTextSection(props: HomeTextSectionProps) {
    const {children, level, style, className} = props;

    const levelStyles = (level === 'raised') ? {
            backgroundColor:'var(--color-grey2)', marginBottom: 0, marginTop: 32,
            borderTopRightRadius:32, borderTopLeftRadius:32
        } : {marginBottom: 64}

    return (
        <AnimatedDiv 
            className={'w-full py-8 overflow-x-hidden min-h-32 \
                flex flex-col lg:flex-row justify-center items-center \
                lg:space-x-16 space-y-8 lg:space-y-0 shadow-lg ' + className}
            style={{...levelStyles, ...style}}>
            {children}
        </AnimatedDiv>
    );
}

//=======================================================================================
interface HomeSideTextProps {
    children?: React.ReactNode;
    style?: CSSProperties | any;
    className?: string;
}
export function HomeSideText(props: HomeSideTextProps) {
    const {children, style, className} = props;
        
    return (
        <AnimatedDiv className={'w-96 p-8 justify-center leading-loose ' + className} style={style}>
            {children}
        </AnimatedDiv>
    );
};

//=========================================================================================
interface HomeCenterTextProps {
    children?: React.ReactNode;
    style?: CSSProperties | any;
    className?: string;
}
export function HomeCenterText(props: HomeCenterTextProps) {
    const {children, style, className} = props;
        
    return (
        <AnimatedDiv className={'p-8 justify-center items-center leading-loose ' + className} style={{width:'50vw', ...style}}>
            {children}
        </AnimatedDiv>
    );
};
