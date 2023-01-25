import React, { useState} from 'react'
import Projs from './Projs';
import ProjItems from './ProjItems';





function Home({projLinkId, setProjLinkId, setProjects, projects, useref}) {
  
    console.log(useref)
  
  
  
    const viewAllProjects = projects.map(
      
      (proj)=><Projs
        projLinkId={projLinkId}
        setProjLinkId={setProjLinkId}
        key={proj.id}
        projName={proj.name} 
        projDescription={proj.description} 
        createdAt={proj.created_at} 
        updatedAt={proj.updated_at}
        projId ={proj.id}
        myProjects= {projects}
      />      
      )
  
  
  
    return (
      <div className="container mt-4 cols-2">
        <div className="row">
          <ProjItems/>
        </div>
        
        <div className="row">
            {viewAllProjects}
        </div>
      </div>
  
    );
  }
  
export default Home;
  