import { createContext, useContext, useState } from 'react'
import userProfile from '../Profile/user'
 

export const GlobalContext = createContext({})


export default function GlobalContextProvider({children}){

    const [headerPosition, setHeaderPosition] = useState(0)
    const [aboutPosition, setAboutPosition] = useState(0)
    const [experiencesPosition, setExperiencesPosition] = useState(0)
    const [projectsPosition, setProjectsPosition] = useState(0)
    const [footerPosition, setFooterPosition] = useState(0)
    const [knowledgePosition, setKnowledgePosition] = useState(0)
 
    const [displayLoading, setDisplayLoading] = useState('flex')

    const [profile, setProfile] = useState(userProfile)

    return(
        <GlobalContext.Provider value={{           
            setDisplayLoading,         
     
            setHeaderPosition,
            setAboutPosition,
            setExperiencesPosition,
            setProjectsPosition,
            setFooterPosition,
            setKnowledgePosition,
            setProfile,

            profile,
            knowledgePosition,
 
            displayLoading,
            headerPosition,
            aboutPosition,
            experiencesPosition,
            projectsPosition,
            footerPosition
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext =()=>{
    return useContext(GlobalContext)
}