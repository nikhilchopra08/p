"use client";
import React from 'react'
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic (
  ()=> {return import("react-animated-numbers");
},
{ssr:false}
);

const AchievementList = [
  {
    metric: "Projects",
    value: "100",
    postfix : "+"
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100",
  },
  {
    metric: "Awards",
    value: "79",
  },
  {
    metric: "Years",
    value: "25",
    postfix : "+"
  },
]

const AchievementSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm-py-16 xl:px-16'>
      <div className='sm:border-[#33353F] sm:border rounder-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between'>
        {AchievementList.map((achievement , index) => {
          return (
            <div key={index} className='flex flex-col item-center justify-center mx-4 my-4 sm:my-0'>
              <h2 className='text-white text-4xl font-bold flex flex-row'>{achievement.prefix}
                <AnimatedNumbers includeComma animateToNumber={parseInt(achievement.value)} locale='en-US' className='text-white font-bold text-4xl' config={(_ , index ) => {
                  return{
                    mass:1,
                    friction : 100, 
                    tension : 140 * (index + 1 ),
                  };
                }}/>{achievement.postfix}
              </h2>
              <p className='text-[#ADB7BE] text-base'>{achievement.metric}</p>
            </div>
          )
        })}
        </div>
        </div>
  )
}

export default AchievementSection