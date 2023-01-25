import React,{useRef} from "react";
import ProjItems from "./ProjItems";

import { NavLink } from "react-router-dom"

function Projs({
    projName,
    projDescription,
    createdAt, 
    updatedAt,
    projId,
    projLinkId,
    setProjLinkId,
    myProjects
}){

    const eachProject = useRef()

    function handleClick(){
        const div = eachProject.current
        setProjLinkId(div.id)

    }

    



    return(
        
        <div id = {projId} ref={eachProject} onClick={handleClick} className="col-3">
            <NavLink to={`/${projId}`}>
            <div className="card bg-danger">
                <div className="card-body">
                    <h5 className="card-title">{projName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">project Description</h6>
                    <p className="card-text">{projDescription}</p>
                </div>
            </div>
            </NavLink>
        </div>
        


    )
}
 export default Projs;