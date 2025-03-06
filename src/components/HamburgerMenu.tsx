import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { HEADER_HEIGHT } from '../GLOBALS';

export default function HamburgerMenu() {

    const [open, setOpen] = useState(false);

    const handleClick = () => {setOpen(o => !o)};

    return (
        <>
            <IconButton sx={{
                scale:2, 
                position: 'absolute',
                top:'36px',
                right:'32px'
                }}
                onClick={handleClick}    
            >
                <MenuIcon/>
            </IconButton>
            {open && 
                <div style={{
                    position:'absolute',
                    right:'0px',
                    top: HEADER_HEIGHT,
                    width: '96px',
                    height: 100,
                    backgroundColor:'var(--color-background)',
                    border: '1px',
                    borderStyle: 'solid',
                    borderColor: 'var(--color-middle)'
                }}>
                    poop        
                </div>
            }

        </>
    );
};
