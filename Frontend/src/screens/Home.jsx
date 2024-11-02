import React from 'react'
import Navbar from '../Components/Navigation.jsx'
import HeroImage from "../assets/Model.png"
import Button from '../Components/button.jsx'
import OutlineButton from '../Components/outlineButton.jsx'
import ModelImage from "../assets/Model.png"
import ModelHappyCard from '../Components/ModelHappyCard.jsx'
import Card from '../Components/Card.jsx'
import CardIcon1 from "../assets/cardIcons/CardIcons (1).png"
import CardIcon2 from "../assets/cardIcons/CardIcons (2).png"
import CardIcon3 from "../assets/cardIcons/CardIcons (3).png"
import CardIcon4 from "../assets/cardIcons/CardIcons (4).png"
import CardIcon5 from "../assets/cardIcons/CardIcons (5).png"
import CardIcon6 from "../assets/cardIcons/CardIcons (6).png"
import FeatureModelImage from "../assets/FeatureModel.png"
import learningResources from "../assets/learningResrouces.png"
import MentorFeatureCard from "../Components/mentorFeatureCard.jsx";
import SemiCircle from "../assets/SemiCircle.png"
import MentorMatching from "../assets/mentorMatching.png"


function Home() {
    return (
        <>
            {/* Header */}
            <div id='Hero' className='bg-lightPink  rounded-bl-[8.5rem] font-roboto text-[20px] tracking-wide '>
                <Navbar />


                {/* Hero Section */}

                <section id='heroSection' className='flex md:pt-0 pt-8 gap-6 md:gap-0 md:flex-row flex-col justify-between items-center md:px-20 px-10 pb-10 '>
                    <div className=''>
                        <h1 className='xl:w-[500px] text-center md:text-left md:w-[350px] text-heroText font-montserrat font-bold text-4xl xl:text-5xl'>
                            Find your perfect <h1 className='inline text-pinkButton'>mentor</h1> and level up your <h1 className='inline text-pinkButton'>career</h1>
                        </h1>
                        <div className='pt-7 text-[17px] text-center md:text-left'>MentorMagic: Connect, Learn, Grow</div>
                        <div className='flex flex-col xl:flex-row gap-3 xl:gap-6 md:pt-4 pt-7'>
                            <Button text="Find a Mentor"></Button>
                            <OutlineButton text="Become a Mentor"></OutlineButton>
                        </div>
                    </div>


                    {/* Character Image */}
                    <div className='relative font-montserrat'>

                        <div className='xl:w-[580px] w-[330px] '>
                            <img src={ModelImage} alt="" />
                        </div>
                        <div className='border-pinkButton xl:border-[7px] xl:h-16 xl:w-16 border-[5px]  h-10 w-10 absolute left-5 top-28 xl:left-8 xl:top-40  rounded-full '>
                        </div>

                        <div className='border-pinkButton xl:border-[2px] xl:h-8 xl:w-8  border-[2px] h-7 w-7 left-14 top-16 absolute xl:left-28 xl:top-28  rounded-full '>
                            <ModelHappyCard />
                        </div>
                    </div>
                </section>

            </div>
            {/* Mentor Categories Section */}
            <section id='Categories' className='my-20 '>

                <h1 className='font-montserrat text-4xl font-extrabold text-center'><h1 className='text-pinkButton inline'>Expert Mentors</h1> Categories</h1>
                <p id="para" className='text-md font-montserrat text-center my-4 mx-auto max-w-[300px] md:max-w-full '>Find the perfect mentor to guide your career journey.</p>

                <div id="categoriesContainer" className='w-3/4 mx-auto grid md:grid-rows-3 md:grid-cols-2 xl:grid-rows-2 xl:grid-cols-3 sm:grid-rows-1 sm:grid-cols-1  gap-x-7 md:gap-y-10 gap-y-0 py-0 md:py-20'>
                    <Card content="Mentors who can guide you through programming languages" heading="Development" src={CardIcon1}></Card>
                    <Card content="Mentors who can guide you through programming languages" heading="Development" src={CardIcon2}></Card>
                    <Card content="Mentors who can guide you through programming languages" heading="Development" src={CardIcon3}></Card>
                    <Card content="Mentors who can guide you through programming languages" heading="Development" src={CardIcon4}></Card>
                    <Card content="Mentors who can guide you through programming languages" heading="Development" src={CardIcon5}></Card>
                    <Card content="Mentors who can guide you through programming languages" heading="Development" src={CardIcon6}></Card>
                </div>
                <p className='text-center font-montserrat text-[20px] pt-10 md:pt-0'>and Many More ...</p>
            </section>
            <section id='featured' className='flex relative justify-between bg-lightPink font-montserrat w-full pt-20 '>

                {/*Model Image  */}

                <div className=''>
                    <div className='relative bottom-0'>
                        <img src={FeatureModelImage} className='w-96' alt="" />
                        <div className='absolute w-[70px] h-[70px] rounded-full border-[7px] border-pinkButton left-[440px] top-[280px]'></div>
                        <div className='absolute w-[40px] h-[40px] rounded-full border-[3px] border-pinkButton left-[400px] top-[350px]'></div>
                    </div>
                </div>
                <div className='pr-12'>
                    <h1 className='font-bold font-montserrat text-4xl max-w-[500px]'>Unleash Your Potential Our Key Feature</h1>
                    <p className='max-w-[500px] pt-4'>Our advanced algorithm connects you with mentors who can provide the most relevant guidance.</p>
                    <MentorFeatureCard src={learningResources} heading="Personalized Mentor Matching" description="Find your ideal mentor based on your career goals, interests, and experience level."/>
                    <MentorFeatureCard src={MentorMatching} heading="Free, Personalized Learning Resources" description="Get personalized Learning Resources recommendations based on your career goals and interests."/>
                </div>
            <div className='absolute right-0 z-0 top-0'>
                <img src={SemiCircle} alt="" />
            </div>
            </section>

<section id='topMentors' className='mt-12'>
    <div id="heading" className='font-montserrat flex fle font-bold text-2xl text-center'>

    <h1>Our <h1 className='text-pinkButton inline'>Top</h1> Performing <h1 className='text-pinkButton inline'>Mentors</h1></h1>
    </div>
    <div className='max-w-[500px] text-center'>
    Meet our exceptional mentors who have helped countless students achieve their career goals.
    </div>
</section>
        </>
    )
}

export default Home