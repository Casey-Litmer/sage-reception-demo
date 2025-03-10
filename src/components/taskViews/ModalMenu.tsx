import { Divider } from '@mui/material';
import React, { CSSProperties } from 'react'



interface ModalMenuProps {
    children?: React.ReactNode;
    className?: string;
    style?: CSSProperties;
    show?: boolean;
}
const ModalMenu = (props: ModalMenuProps) => {
    const {children, className, style, show} = props;

    return (
    <>
        {show && 
        <div className={'BoxOutline flex flex-col rounded-lg fixed bg-background min-w-72 min-h-52 ' 
                        + className}
            style={style}
        >
            {children}
        </div>}
    </>
    );
};

//======================================================================================
const Header = (props: ModalMenuProps) => {
    const {children, className, style} = props;
    return (
        <>
        <div className={'w-full py-2 min-h-8 ' + className} 
            style={style}>
            {children}
        </div>
        <Divider sx={{width:'100%'}}/>
        </>
    );
};
const Body = (props: ModalMenuProps) => {
    const {children, className, style} = props;
    return (
        <>
        <div className={'w-full flex-grow items-center py-4 justify-center ' + className} 
            style={style}>
            {children}
        </div>
        <Divider sx={{width:'100%'}}/>
        </>
    );
};
const Footer = (props: ModalMenuProps) => {
    const {children, className, style} = props;
    return (
        <div className={'w-full flex py-4 items-center justify-center ' + className} 
            style={style}>
            {children}
        </div>
    );
};


//======================================================================================
ModalMenu.Header = Header;
ModalMenu.Body = Body;
ModalMenu.Footer = Footer;


export default ModalMenu;