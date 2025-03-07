import Header from "../../components/header/Header";
import PageContents from "../../components/PageContents";
import HomeTextSection, { HomeCenterText, HomeSideText } from "../../components/textContainers/TextContainers";
import { animated, useSpring } from '@react-spring/web';
import './Home.css';
import ClockButton from "../../components/ClockButton";
import { Footer } from "flowbite-react";



export default function Home() {

    return (
        <div className='bg-background Home'>
            <Header />
            
            <PageContents>
                <h1 className="mb-16">Who Am I?</h1>
                <HomeTextSection level="background" style={{backgroundColor:'var(--color-top)'}}>
                    <HomeSideText>
                        <h3>Never Again!</h3>
                        Have you ever been in the middle of servicing a client's car 
                        or repairing a kitchen sink, all while your texts pile up and
                        the need to switch between different apps or phones becomes a job
                        of its own?  
                    </HomeSideText>
                    <img src='/confused1.png' style={{width:'612px', height:'408px'}}/>
                </HomeTextSection>
                
                <h2>You're in luck!</h2>

                <HomeTextSection level="raised">
                    <HomeCenterText>
                        The Staged Reception App was created as a solution
                        to this problem, allowing users to recieve messages, enter them
                        on their calendar, and respond to petty grievances, all in one user interface!  See 
                        your customers' patience levels drain in real time so you can 
                        avoid losing business and get back to what you do best!
                    </HomeCenterText>
                </HomeTextSection>

                <HomeTextSection level="background" style={{backgroundColor:'var(--color-background)'}}>
                    <img src='/confused2.png' style={{width:'600px', height:'400px'}}/>
                    <HomeSideText style={{width:'512px'}}>
                        <h3>Our Mission Statement</h3>
                        Since I do not have the budget for AI, I thought the best
                        alternative would be to lay out all of the essentials and just
                        let YOU do the rest!

                        My philosophy is that manual data entry
                        puts hair on your chest and with Staged Reception, you can
                        do it even faster!
                    </HomeSideText>
                </HomeTextSection>


                <HomeTextSection level="raised">
                    <HomeCenterText 
                        style={{flexDirection:'row', display:'flex', width:'100%'}}>
                        <h2>Just press </h2>
                        <ClockButton/>
                        <h2>to get started!</h2>
                    </HomeCenterText>
                </HomeTextSection>
            </PageContents>

            <Footer style={{backgroundColor:'var(--color-top)', borderRadius:0}} className="text-black" container>
                <Footer.Copyright href="#" by="Casey Litmer" year={2025} />
                <Footer.LinkGroup>
                    <Footer.Link href="#">Not</Footer.Link>
                    <Footer.Link href="#">A</Footer.Link>
                    <Footer.Link href="#">Real</Footer.Link>
                    <Footer.Link href="#">Site</Footer.Link>
                </Footer.LinkGroup>
            </Footer>
        </div>
    );
};
