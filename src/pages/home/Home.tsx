import Header from "../../components/header/Header";
import PageContents from "../../components/PageContents";
import HomeTextSection, { HomeCenterText, HomeSideText } from "../../components/textContainers/TextContainers";
import ClockButton from "../../components/ClockButton";
import { Footer } from "flowbite-react";
import {animated, useSpring} from '@react-spring/web';
import { useEffect, useRef, useState } from "react";
import FaqAccordion from "./faqAccordion";
import './Home.css';


const AnimatedDiv = animated("div");


export default function Home() {
    const [_, trigFirstSection] = useState(false);
    const [secondSection, trigSecondSection] = useState(false);
    const [thirdSection, trigThirdSection] = useState(false);
    const [fourthSection, trigFourthSection] = useState(false);
    
    const secondSectionObsRef = useRef<any>(null);
    const thirdSectionObsRef = useRef<any>(null);
    const fourthSectionObsRef = useRef<any>(null);

    //useSpring requires computed styles.  Do this to get value of css var
    const topColor = getComputedStyle(document.documentElement).getPropertyValue('--color-top');

    //=======================================================================================
    //Initial animation
    useEffect(() => trigFirstSection(true), []);

    //Intersection observers
    useEffect(() => {
        const secondSectionObs = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) trigSecondSection(true);});
        const thirdSectionObs = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) trigThirdSection(true);});
        const fourthSectionObs = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) trigFourthSection(true);});

        if (secondSectionObsRef.current) secondSectionObs.observe(secondSectionObsRef.current);
        if (thirdSectionObsRef.current) thirdSectionObs.observe(thirdSectionObsRef.current);
        if (fourthSectionObsRef.current) fourthSectionObs.observe(fourthSectionObsRef.current);

        return () => {
            if (secondSectionObsRef.current) secondSectionObs.unobserve(secondSectionObsRef.current);
            if (thirdSectionObsRef.current) thirdSectionObs.unobserve(thirdSectionObsRef.current);
            if (fourthSectionObsRef.current) fourthSectionObs.unobserve(fourthSectionObsRef.current);
        };
    }, [secondSectionObsRef, thirdSectionObsRef, fourthSectionObsRef]);

    //=======================================================================================
    const firstSectionSpring = useSpring({
            config: {duration: 1000},
            from: {background: `linear-gradient(to right, rgb(255,255,255) 0%, rgb(255,255,255) 100%)`},
            to: {background: `linear-gradient(to right, ${topColor} 100%, rgb(255,255,255) 100%)`}, 
        });
    const firstTextSpring = useSpring({
            config: {duration: 250},
            from: {scale: 0},
            to: {scale: 1}, 
        });
    const firstImageSpring = useSpring({
            config: {duration: 750},
            from: {transform:'translateX(1000px)'},
            to: {transform:'translateX(0)'}, 
        });
    const inLuckSpring = useSpring({
            config: {duration: 400},
            delay: 2000,
            from: {transform:'translateY(100px)', opacity: 0},
            to: {transform:'translateY(0)', opacity: 1}, 
        });
    const secondSectionSpring = useSpring({
            config: {duration: 250},
            scale: (secondSection) ? 1 : 0.75,
            transform: (secondSection) ? 'translateY(0px)' : 'translateY(100px)',
            opacity: (secondSection) ? 1 : 0 
        });
    const secondImageSpring = useSpring({
            config: {duration: 400},
            transform: (thirdSection) ? 'translateX(0px)' : 'translateX(-1000px)',
        });
    const secondTextSpring = useSpring({
            config: {duration: 400},
            transform: (thirdSection) ? 'translateX(0px)' : 'translateX(1000px)',
        });
    const fourthTextSpring = useSpring({
            config: {duration: 1200},
            delay: 150,
            opacity: (fourthSection) ? 1 : 0,
        });

    //=======================================================================================
    return (
        <div className='bg-background Home'>
            <Header />
            
            <PageContents>
                <h1 className="mb-12 mt-4">Who Am I?</h1>
                <HomeTextSection level="background" style={firstSectionSpring}>
                    <HomeSideText style={firstTextSpring}>
                        <h3>Never Again!</h3>
                        Have you ever been in the middle of servicing a client's car 
                        or repairing a kitchen sink, all while your texts pile up and
                        the need to switch between different apps or phones becomes a job
                        of its own?  
                    </HomeSideText>

                    <AnimatedDiv style={firstImageSpring}>
                        <img src='/confused3.png' className='mb-4' style={{width:'612px', height:'408px'}}/>
                    </AnimatedDiv>
                </HomeTextSection>
                
                <AnimatedDiv style={inLuckSpring}>
                    <h2>You're in luck!</h2>
                </AnimatedDiv>

                <HomeTextSection level="raised" style={secondSectionSpring}>
                    <HomeCenterText>
                        The Staged Reception App was created as a solution
                        to this problem, allowing users to recieve messages, enter them
                        on their calendar, and respond to petty grievances, all in one user interface!  See 
                        your customers' patience levels drain in real time so you can 
                        avoid losing business and get back to what you do best!
                    </HomeCenterText>
                </HomeTextSection>

                <div ref={secondSectionObsRef}/>

                <HomeTextSection level="background" style={{backgroundColor:'var(--color-background)'}}>
                    <AnimatedDiv style={secondImageSpring}>
                        <img src='/confused2.png' className='mt-8' style={{width:'600px', height:'400px'}}/>
                    </AnimatedDiv>

                    <div className='absolute' ref={thirdSectionObsRef}/>
                    
                    <HomeSideText style={{width:'512px', ...secondTextSpring}}>
                        <h3>Our Mission Statement</h3>
                        Since we do not have the budget for AI, we thought the best
                        alternative would be to lay out all of the essentials and just
                        let YOU do the rest!

                        Our philosophy is that manual data entry
                        puts hair on your chest and with Staged Reception, you can
                        do it even faster!
                    </HomeSideText>
                </HomeTextSection>


                <AnimatedDiv style={inLuckSpring}>
                    <h2>FAQ</h2>
                </AnimatedDiv>

                <HomeTextSection level="background">
                    <FaqAccordion/>
                </HomeTextSection>


                <HomeTextSection level="raised">
                    <HomeCenterText className='flex flex-row' style={{width:'100%', ...fourthTextSpring}}>
                        <h2>Just press</h2>
                        <ClockButton/>
                        <h2>to get started!</h2>
                    </HomeCenterText>
                </HomeTextSection>

                <div ref={fourthSectionObsRef}/>

            </PageContents>

            <Footer style={{backgroundColor:'var(--color-top)', borderRadius:0}} container>
                <Footer.Copyright href="#" by="Casey Litmer" year={2025} className="text-white" />
                <Footer.LinkGroup className="text-white">
                    <Footer.Link href="#">Not</Footer.Link>
                    <Footer.Link href="#">A</Footer.Link>
                    <Footer.Link href="#">Real</Footer.Link>
                    <Footer.Link href="#">Site</Footer.Link>
                </Footer.LinkGroup>
            </Footer>
        </div>
    );
};
