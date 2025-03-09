import {animated, useChain, useSpring, useSpringRef} from '@react-spring/web';
import './Dashboard.css';
import { CSSProperties, useEffect, useState } from 'react';
import ClockButton from '../../components/ClockButton';


const AnimatedDiv = animated("div");


export default function GameOverScreen() {
    const [_, trig] = useState(false);
    useEffect(() => trig(true), []);

    const backdropSpringRef = useSpringRef();
    const textSpring1Ref = useSpringRef();
    const textSpring2Ref = useSpringRef();
    const textSpring3Ref = useSpringRef();
    const textSpring4Ref = useSpringRef();
    const textSpring5Ref = useSpringRef();
    const clockOutSpringRef = useSpringRef();

    //===============================================================================
    const backdropSpring = useSpring({
        config: {duration: 1500},
        ref: backdropSpringRef,
        from: {opacity: 0},
        to: {opacity: 0.85}
    });
    const textSpring1 = useSpring({
        config: {duration: 750},
        ref: textSpring1Ref,
        from: {transform:'translateY(100px)', opacity: 0},
        to: {transform:'translateY(0px)', opacity: 1},
    });
    const textSpring2 = useSpring({
        config: {duration: 750},
        ref: textSpring2Ref,
        from: {transform:'translateY(100px)', opacity: 0},
        to: {transform:'translateY(0px)', opacity: 1},
    });
    const textSpring3 = useSpring({
        config: {duration: 750},
        ref: textSpring3Ref,
        from: {transform:'translateY(100px)', opacity: 0},
        to: {transform:'translateY(0px)', opacity: 1},
    });
    const textSpring4 = useSpring({
        config: {duration: 750},
        ref: textSpring4Ref,
        from: {transform:'translateY(100px)', opacity: 0},
        to: {transform:'translateY(0px)', opacity: 1},
    });
    const textSpring5 = useSpring({
        config: {duration: 750},
        ref: textSpring5Ref,
        from: {transform:'translateY(100px)', opacity: 0},
        to: {transform:'translateY(0px)', opacity: 1},
    });
    const clockOutSpring = useSpring({
        config: {duration: 1250},
        ref: clockOutSpringRef,
        from: {opacity: 0},
        to: {opacity: 1},
    });

    useChain([
        backdropSpringRef, 
        textSpring1Ref, 
        textSpring2Ref, 
        textSpring3Ref,
        textSpring4Ref,
        textSpring5Ref,
        clockOutSpringRef], [0, 2, 5, 8, 10, 12, 16]
    );

    //===============================================================================
    return (
        <AnimatedDiv style={backdropSpring} className='GameOverScreen'>
            <div className='relative color-white text-white flex flex-col'>
                <h1 className='font-bold mb-8 font-serif'>GAME OVER</h1>
                <TextContainer style={textSpring1}>
                    This game isn't very fun is it?
                </TextContainer>
                <TextContainer style={textSpring2}>
                    It would sure be great if a computer could do this job...
                </TextContainer>
                <TextContainer style={textSpring3}>
                    Luckily, there will be very soon!
                </TextContainer>
                <TextContainer style={textSpring4} className='text-3xl mb-8 mt-6'>
                    At <a href='https://www.sagereception.com' className='underline'>sagereception.com</a>
                </TextContainer>
                <TextContainer style={textSpring5} className='max-w-xl leading-relaxed '>
                   At which I would be honored to take part in developing a REAL user interface
                    in the final steps towards MVP and beyond!
                </TextContainer>
                <TextContainer style={clockOutSpring} className='mt-8'>
                    <ClockButton mode='out'/>
                </TextContainer>
            </div>       
        </AnimatedDiv>
    );
};

//===============================================================================
interface TextContainerProps {
    style?: CSSProperties | any;
    className?: string;
    children?: React.ReactNode;
}
const TextContainer = ({style, className, children}: TextContainerProps) => {
    return (
        <AnimatedDiv style={style} className={'my-3 mx-auto leading-snug ' + className}>
            {children}
        </AnimatedDiv>
    );
};