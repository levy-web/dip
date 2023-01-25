import React,{useState} from "react";

const ACCESS_TOCKEN = "94781d929c701bcb36ea5dbce4ba9e599cc23d3abdbe63689fa97a9c3701f4c2"


function UpdateItem({
    projName,
    projDescription,
    createdAt, 
    updatedAt,
    projId,
    projLinkId,
    setProjLinkId,
    myProjects,
    deleteFunction
}){
    const [descriptionUpdate, setDescriptionUpdate] = useState(projDescription)

    console.log(deleteFunction)

    function handleUpdateProject(){

        const upDatedData = {description:`${descriptionUpdate}`}
        console.log(upDatedData)
        
        fetch(`https://api.dribbble.com/v2/projects/${projLinkId}?access_token=${ACCESS_TOCKEN}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(upDatedData)
        }).then((res)=>console.log(res)).then((data)=>console.log(data))
          

    }

    function handleDeleteProject(){
        deleteFunction(projId)

    }

    function handleInputChange(e){
        setDescriptionUpdate(e.target.value)
        console.log(descriptionUpdate)

    }


    



    return(
        <div id = {projId} className="col-12">
            <div className="card">
                <button onClick={handleDeleteProject} type="button" className="btn btn-danger p-2 me-2 mt-2 ms-auto">delete project</button>
                <div className="card-body">
                    <h5 className="card-title">{projName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">project Description</h6>
                    <textarea className="form-control" id="descriptionFormControlTextarea1" onChange={handleInputChange} value={descriptionUpdate} rows="15"></textarea>
                    
                </div>
                <button onClick={handleUpdateProject} type="button" className="btn btn-success mb-2 p-2 m-auto">update project</button>
            </div>
        </div>
    )
}
 export default UpdateItem;