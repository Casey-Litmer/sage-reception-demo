
import './Header.css';
import HamburgerMenu from '../footer/HamburgerMenu';
import { HEADER_HEIGHT } from '../../GLOBALS';

export default function Header() {
    return (
        <div className='BoxOutline Header bg-background' style={{height: HEADER_HEIGHT}}>
            <HamburgerMenu/>
        </div>
    );
};
