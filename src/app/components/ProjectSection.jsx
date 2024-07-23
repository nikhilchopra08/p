"use client"
import React , {useState , useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView} from 'framer-motion'

const projectData = [
  {
    id: 1,
    title: "n",
    description : "nikhil",
    image : "/Images/about.png",
    tag : ["All" , "Web"],
    gitUrl : "/",
    previewUrl : "/"
  },
  {
    id: 2,
    title: "n",
    description : "nikhil",
    image : "/Images/about.png",
    tag : ["All" , "Web"],
    gitUrl : "/",
    previewUrl : "/"
  },
  {
    id: 3,
    title: "n",
    description : "nikhil",
    image : "/Images/about.png",
    tag : ["All" , "Web"],
    gitUrl : "/",
    previewUrl : "/"
  },
  {
    id: 4,
    title: "n",
    description : "nikhil",
    image : "/Images/about.png",
    tag : ["All" , "Web"],
    gitUrl : "/",
    previewUrl : "/"
  },
  {
    id: 5,
    title: "n",
    description : "nikhil",
    image : "/Images/about.png",
    tag : ["All" , "Web"],
    gitUrl : "/",
    previewUrl : "/"
  },
  {
    id: 6,
    title: "jkfdng n",
    description : "nikhil",
    image : "/Images/about.png",
    tag : ["All" , "Mobile"],
    gitUrl : "/",
    previewUrl : "/"
  }
]

const ProjectSection = () => {

  const [tag , setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref , {once: true});

  const handleTagChange = (newTag) => {
    setTag(newTag);
  }
  
  const filteredProjects = projectData.filter((project) => 
    project.tag.includes(tag)
  );

  const cardVarients = {
    initial : {y : 50 , opacity : 0},
    animate : {y: 0 , opacity : 1}, 
  }

  return (
    <section>
    <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8'>My Projects</h2>
    <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
      <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
      <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
    </div>
    <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
      {filteredProjects.map((project , index) =>
      <motion.li key={index} variants={cardVarients} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ duration: 0.3,  delay: index * 0.4}}>
       <ProjectCard
        key={project.id} imgUrl = {project.image} title={project.title} description={project.description} gitUrl={project.gitUrl} previewUrl={project.previewUrl}/>
          </motion.li>
      )}
       </ul>
    </section>
  )
}

export default ProjectSection