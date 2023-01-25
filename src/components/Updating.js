import React from "react";
import UpdateItem from "./UpdateItems";

function Updating({
    projects,
    setProjects,
    projLinkId,
    deleteFunction
    }){

        const eachProject = projects.map((eachItem)=>{
            console.log(eachItem.id)
            if( eachItem.id.toString() ===projLinkId ){
                return <UpdateItem
                key={eachItem.id}
                projName={eachItem.name} 
                projDescription={eachItem.description} 
                createdAt={eachItem.created_at} 
                updatedAt={eachItem.updated_at}
                projId ={eachItem.id}
                deleteFunction= {deleteFunction}
                projLinkId={projLinkId}
              />
            }
        })

    
    return(
        <div className="container mt-4 cols-2">
        <div className="row">
          {eachProject}
        </div>
        </div>
    )

}

export default Updating;