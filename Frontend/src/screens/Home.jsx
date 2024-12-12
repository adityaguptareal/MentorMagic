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
import MentorFeatureCard from "../Components/MentorFeatureCard.jsx";
import SemiCircle from "../assets/SemiCircle.png"
import MentorMatching from "../assets/mentorMatching.png"
import PopularMentorCard from '../Components/PopularMentorCard.jsx'
import AnshMehra from "../assets/AnshMehra.png"
import SwatiCahudhry from "../assets/SwatiCahudhry.png"
import Vanshikagupta from "../assets/Vanshikagupta.png"
import MenteeReviewCard from '../Components/MenteeReviewCard.jsx'
import AnshikaPatel from "../assets/menteeReviewImages/AnshikaPatel.png"
import MeeraRao from "../assets/menteeReviewImages/MeeraRao.png"
import PriyaGupta from "../assets/menteeReviewImages/PriyaGupta.png"
import RohanSharma from "../assets/menteeReviewImages/RohanSharma.png"

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
                    <Card content="Mentors who can help students understand financial concepts and accounting principles" heading="Finance" src={CardIcon2}></Card>
                    <Card content="Mentors who can teach foreign languages or provide language learning tips." heading="Language Learning " src={CardIcon3}></Card>
                    <Card content="who can guide you through user interface design principles, user experience research," heading="Ui/UX" src={CardIcon4}></Card>
                    <Card content="Mentors who can guide aspiring entrepreneurs through the startup process" heading="Business" src={CardIcon5}></Card>
                    <Card content="Mentors who can provide guidance on sales techniques, marketing, and business development." heading="Sales and Marketing" src={CardIcon6}></Card>
                </div>
                <p className='text-center font-montserrat text-[20px] pt-10 md:pt-0'>and Many More ...</p>
            </section>
            <section id='featured' className='flex  justify-between bg-lightPink font-montserrat w-full pt-20 pb-20 relative'>

                {/*Model Image  */}

                <div className=''>
                    <div className=' absolute bottom-0'>
                        <img src={FeatureModelImage} className='w-96' alt="" />
                        <div className='absolute w-[70px] h-[70px] rounded-full border-[7px] border-pinkButton left-[440px] top-[280px]'></div>
                        <div className='absolute w-[40px] h-[40px] rounded-full border-[3px] border-pinkButton left-[400px] top-[350px]'></div>
                    </div>
                </div>
                <div className='pr-12'>
                    <h1 className='font-bold font-montserrat text-4xl max-w-[500px]'>Unleash Your Potential Our Key Feature</h1>
                    <p className='max-w-[500px] pt-4'>Our advanced algorithm connects you with mentors who can provide the most relevant guidance.</p>
                    <MentorFeatureCard src={learningResources} heading="Personalized Mentor Matching" description="Find your ideal mentor based on your career goals, interests, and experience level." />
                    <MentorFeatureCard src={MentorMatching} heading="Free, Personalized Learning Resources" description="Get personalized Learning Resources recommendations based on your career goals and interests." />
                </div>
                <div className='absolute right-0 z-0 top-0'>
                    <img src={SemiCircle} alt="" />
                </div>
            </section>

            <section id='topMentors' className='mt-12'>
                <h1 className='text-gray-800 text-center text-4xl font-montserrat font-bold'>Our <h1 className='inline text-pinkButton'>Top</h1> Performing <h1 className='inline text-pinkButton'>Mentors</h1></h1>
                <div id="desrciption" className='flex justify-center items-center mt-5 text-center max-w-[550px] mx-auto text-[18px] font-montserrat'>
                    Meet our exceptional mentors who have helped countless students achieve their career goals.
                </div>

                {/* Cards */}
                <div className='px-10 flex justify-center items-center gap-40 mt-14'>

                    <PopularMentorCard src={AnshMehra} name="Ansh Mehra" description="Transform your designs with help of our  expert mentors" position="UI/UX Designer" bgColor='bg-purple-200'></PopularMentorCard>

                    <PopularMentorCard src={SwatiCahudhry} name="Swati Chaudhary" description="Build a strong foundation in software development with expert guidance" position="Software Egnineer" bgColor="bg-orange-200 "></PopularMentorCard>

                    <PopularMentorCard src={Vanshikagupta} name="Vanshika Gupta" description="Gain a deep understanding of financial concepts and strategies." position="Finance Expert" bgColor="bg-green-300"></PopularMentorCard>
                </div>
            </section>

            {/* Mentee Reviews Cards */}
            <section id='reviewSection' className='my-32'>
                <div id="textContent" className='flex flex-col justify-center items-center gap-3'>
                    <h1 className='text-[40px] font-montserrat font-extrabold text-pinkButton inline'>Mentees <h1 className='inline text-gray-800'>Review</h1></h1>
                    <div className='max-w-[500px] text-center font-montserrat text-[18px]'>Hear what our mentees have to say about their experience with MentorMagic</div>
                </div>

                <section id='Review cards' className='grid grid-rows-2 grid-cols-2  gap-11 w-3/4 mx-auto my-20 '>

                    <MenteeReviewCard  rating="⭐⭐⭐⭐" title="A Guiding Light for My Career" review="MentorMagic was instrumental in helping me clarify my career goals. My mentor provided invaluable advice and support, and I'm now confident in my chosen path." userImg={AnshikaPatel} username=" Anika Patel" date="September 15, 2024"/>

                    <MenteeReviewCard  rating="⭐⭐⭐⭐" title="A Guiding Light for My Career" review="MentorMagic was instrumental in helping me clarify my career goals. My mentor provided invaluable advice and support, and I'm now confident in my chosen path." userImg={AnshikaPatel} username=" Anika Patel" date="September 15, 2024"/>

                    <MenteeReviewCard  rating="⭐⭐⭐⭐" title="A Guiding Light for My Career" review="MentorMagic was instrumental in helping me clarify my career goals. My mentor provided invaluable advice and support, and I'm now confident in my chosen path." userImg={AnshikaPatel} username=" Anika Patel" date="September 15, 2024"/>
                    
                    <MenteeReviewCard  rating="⭐⭐⭐⭐" title="A Guiding Light for My Career" review="MentorMagic was instrumental in helping me clarify my career goals. My mentor provided invaluable advice and support, and I'm now confident in my chosen path." userImg={AnshikaPatel} username=" Anika Patel" date="September 15, 2024"/>

                </section>
            </section>
        </>
    )
}

export default Home