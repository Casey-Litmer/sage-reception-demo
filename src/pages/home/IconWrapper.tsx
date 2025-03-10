import React from 'react'
import { ICON_SIZE_STD } from '../../GLOBALS';



interface IconWrapperProps {
    Icon: any;
    children?: React.ReactNode;
};
export default function IconWrapper({Icon, children}: IconWrapperProps) {
    return (
        <div className='flex flex-col items-center'>
            <Icon size={ICON_SIZE_STD} color='var(--color-middle)'/>
            <div className='w-32 mt-4 text-sm font-sans2'>
                {children}
            </div>
        </div>
    );
};
