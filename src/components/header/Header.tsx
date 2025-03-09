import './Header.css';
import { HEADER_HEIGHT } from '../../GLOBALS';
import ClockButton from '../ClockButton';
import Logo from './Logo';


interface HeaderProps {
    clockButtonMode?: 'in' | 'out';
};
export default function Header(props: HeaderProps) {
    const {clockButtonMode = 'in'} = props;

    return (
        <div className='BoxOutline Header bg-background' style={{height: HEADER_HEIGHT}}>
           <Logo/>
            <div className='pt-1'>
                <ClockButton mode={clockButtonMode}/>
            </div>
        </div>
    );
};
