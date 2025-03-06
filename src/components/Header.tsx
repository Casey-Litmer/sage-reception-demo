import React from 'react';
import './Header.css';
import HamburgerMenu from './HamburgerMenu';
import { HEADER_HEIGHT } from '../GLOBALS';

export default function Header() {
    return (
        <div className='BoxOutline Header bg-background' style={{height: HEADER_HEIGHT}}>
            <HamburgerMenu/>
        </div>
    );
};
