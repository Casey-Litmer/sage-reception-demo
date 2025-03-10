import Header from "../../components/header/Header";
import PageContents from "../../components/PageContents";
import HomeTextSection, { HomeCenterText, HomeSideText } from "../../components/textContainers/TextContainers";
import ClockButton from "../../components/ClockButton";
import { ButtonGroup, Footer } from "flowbite-react";
import {animated, useSpring} from '@react-spring/web';
import { useEffect, useRef, useState } from "react";
import FaqAccordion from "./FaqAccordion";
import './Home.css';
import { FaPaperPlane, FaRegCalendarAlt } from "react-icons/fa";
import { IoMdWarning } from "react-icons/io";
import IconWrapper from "./IconWrapper";




const AnimatedDiv = animated("div");


export default function Home() {
    const [_, trigFirstSection] = useState(false);
    const [secondSection, trigSecondSection] = useState(false);
    const [thirdSection, trigThirdSection] = useState(false);
    const [FAQ, trigFAQ] = useState(false);
    const [fourthSection, trigFourthSection] = useState(false);
    
    const secondSectionObsRef = useRef<any>(null);
    const thirdSectionObsRef = useRef<any>(null);
    const FAQObsRef = useRef<any>(null);
    const fourthSectionObsRef = useRef<any>(null);

    //useSpring requires computed styles.  Do this to get value of css var
    const topColor = getComputedStyle(document.documentElement).getPropertyValue('--color-top');

    //=======================================================================================
    //Initial animation
    useEffect(() => trigFirstSection(true), []);

    //Intersection observers
    useEffect(() => {
        const secondSectionObs = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) trigSecondSection(true);}, {root: null, rootMargin: '50px'});
        const thirdSectionObs = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) trigThirdSection(true);});
        const FAQObs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) trigFAQ(true);});
        const fourthSectionObs = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) trigFourthSection(true);}, {root: null, rootMargin: '50px'});

        if (secondSectionObsRef.current) secondSectionObs.observe(secondSectionObsRef.current);
        if (thirdSectionObsRef.current) thirdSectionObs.observe(thirdSectionObsRef.current);
        if (FAQObsRef.current) FAQObs.observe(FAQObsRef.current);
        if (fourthSectionObsRef.current) fourthSectionObs.observe(fourthSectionObsRef.current);
        
        return () => {
            if (secondSectionObsRef.current) secondSectionObs.unobserve(secondSectionObsRef.current);
            if (thirdSectionObsRef.current) thirdSectionObs.unobserve(thirdSectionObsRef.current);
            if (FAQObsRef.current) FAQObs.unobserve(FAQObsRef.current);
            if (fourthSectionObsRef.current) fourthSectionObs.unobserve(fourthSectionObsRef.current);
        };
    }, [secondSectionObsRef, thirdSectionObsRef, fourthSectionObsRef, FAQObsRef]);

    //=======================================================================================
    const firstSectionSpring = useSpring({
            config: {duration: 1000},
            from: {background: `linear-gradient(90deg, ${topColor} 0%, rgb(255,255,255) 100%)`},
            to: {background: `linear-gradient(90deg, ${topColor} 100%, rgb(255,255,255) 100%)`}
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
    const FAQSpring = useSpring({
            config: {duration: 700},
            delay: 300,
            opacity: (FAQ) ? 1 : 0,
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
                <HomeTextSection level="background" className="lg:pl-16" style={firstSectionSpring}>
                    <HomeSideText style={firstTextSpring}>
                        <h3>Never Again!</h3>
                        <p className="font-sans2">
                            Have you ever been in the middle of servicing a client's car 
                            or repairing a kitchen sink, all while your texts pile up and
                            the need to switch between different apps or phones becomes a job
                            of its own?  
                        </p>
                    </HomeSideText>

                    <AnimatedDiv style={firstImageSpring}>
                        <img src='/confused3.png' className='mb-4' style={{width:'100%', height:'auto'}}/>
                    </AnimatedDiv>
                </HomeTextSection>
                
                <AnimatedDiv style={inLuckSpring}>
                    <h2>You're in luck!</h2>
                </AnimatedDiv>

                <HomeTextSection level="raised" style={{flexDirection:'column', ...secondSectionSpring}}>
                    <HomeCenterText className="font-sans2">
                        The Staged Reception App was created as a solution
                        to this problem, allowing users to recieve messages, enter them
                        on their calendar, and respond to petty grievances, all in one user interface!  See 
                        your customers' patience levels drain in real time so you can 
                        avoid losing business and get back to what you do best!
                    </HomeCenterText>

                    <ButtonGroup className='lg:space-x-32 md:space-x-16 sm:space-x-0'>
                        <IconWrapper Icon={FaRegCalendarAlt}>
                            Enter your schedule on the calendar!
                        </IconWrapper>
                        <IconWrapper Icon={FaPaperPlane}>
                            Reply to your customers!
                        </IconWrapper>
                        <IconWrapper Icon={IoMdWarning}>
                            Deal with urgent messages before it's too late!
                        </IconWrapper>
                    </ButtonGroup>

                </HomeTextSection>

                <div ref={secondSectionObsRef}/>

                <HomeTextSection level="background">
                    <AnimatedDiv style={secondImageSpring}>
                        <img src='/confused2.png' className='mt-8' style={{width:'100%', height:'auto'}}/>
                    </AnimatedDiv>

                    <div className='absolute' ref={thirdSectionObsRef}/>
                    
                    <HomeSideText style={{width:'512px', ...secondTextSpring}}>
                        <h3>Our Mission Statement</h3>
                        <p className="font-sans2">
                            Since we do not have the budget for AI, we thought the best
                            alternative would be to lay out all of the essentials and just
                            let YOU do the rest!

                            Our philosophy is that manual data entry
                            puts hair on your chest and with Staged Reception, you can
                            do it even faster!
                        </p>
                    </HomeSideText>
                </HomeTextSection>

                <AnimatedDiv style={FAQSpring} ref={FAQObsRef}>
                    <h2>FAQ</h2>
                </AnimatedDiv>

                <FaqAccordion/>
           
                <HomeTextSection level="raised" >
                    <HomeCenterText className='flex md:flex-row flex-col' style={{width:'100%', ...fourthTextSpring}}>
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
