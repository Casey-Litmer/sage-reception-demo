import { useSpring, animated } from '@react-spring/web';



const AnimatedDiv = animated("div");

interface PatienceBarProps {
    timerBarPercent: number;
}
export default function PatienceBar(props: PatienceBarProps) {
    const {timerBarPercent} = props;

    const barSpring = useSpring({
        config: {duration: 1000},
        to:{width:`${timerBarPercent}%`}
    });

    return (
        <div className='h-2.1 w-full bg-background' style={{
            borderTop: 1, borderBottom:1, 
            borderStyle:'solid', borderColor: 'var(--color-top)'
        }}>
            <AnimatedDiv className='bg-middle h-2' id='TimerBar'
                style={barSpring}/>
        </div>
    );
};
