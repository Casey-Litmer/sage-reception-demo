import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router';

interface ClockButtonProps {
    mode?: 'in' | 'out';
};
export default function ClockButton(props:ClockButtonProps) {
    const {mode = 'in'} = props;
    const navigate = useNavigate();

    const handleClick = () => navigate(
        (mode === 'in') ? '/Dashboard' : '/'
    );

    const label = (mode === 'in') ? 'Clock In' : 'Clock Out';

    return (
        <Button 
        onClick={handleClick}
        className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 
                   focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 
                     dark:focus:ring-red-900 items-center h-16 mt-3 mx-4'
        >
            {label}
        </Button>
    );
};
