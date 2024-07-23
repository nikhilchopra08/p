"use client"
import React, {useTransition , useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const AboutSection = () => {

    const TAB_DATA = [
        {
            title : "Skills",
            id : "skills", 
            content : (
                <ul className='list-disc pl-2'>
                    <li>Mern</li>
                    <li>Mern</li>
                    <li>Mern</li>
                    <li>Mern</li>
                    <li>Mern</li>
                    <li>Mern</li>
                </ul>
            )
        },
        {
            title : "Education",
            id : "education", 
            content : (
                <ul>
                    <li>Merndsf</li>
                    <li>Mern</li>
                    <li>Mern</li>
                    <li>Mern</li>
                    <li>Mern</li>
                    <li>Mern</li>
                </ul>
            )
        },
        {
            title : "Experience",
            id : "experience", 
            content : (
                <ul>
                    <li>Medjgn</li>
                    <li>Mern</li>
                    <li>Mern</li>
                    <li>Mern</li>
                    <li>Mern</li>
                    <li>Mern</li>
                </ul>
            )
        }
    ]

    const [tab , SetTabs] = useState("skills");
    const [isPending , startTransition ] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            SetTabs(id);
        })
    }

  return (
    <section className='text-white'>
    <div className='md:grid md:grid-cols-2 gap-8 items-center oy-8 px-4 xl:gap-16 sm:py:16'>
        <Image src="/Images/about.png" width={500} height={500} alt="About Me" />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4 '>About Me</h2>
            <p className='text-base lg:text-lg'>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur officiis, veniam quasi illo quisquam sapiente cupiditate eaque vero ab blanditiis ea, voluptatum id, maxime facilis vitae? Quasi quia ducimus pariatur?
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, doloribus. Incidunt iure ratione illo velit libero nulla, quaerat exercitationem, ex et, nobis numquam eum itaque doloribus doloremque corporis inventore ab?
</p>
            <div className='flex flex-row justify-start mt-8'>
                <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                    {" "}
                    Skills {" "}</TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                    {" "}
                    Education {" "}</TabButton>
                    <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
                    {" "}
                    Experience {" "}</TabButton>
            </div>
            <div className='my-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
    </div>
    </section>
  )
}

export default AboutSection