import React, {useState} from "react"

const ACCESS_TOCKEN = "94781d929c701bcb36ea5dbce4ba9e599cc23d3abdbe63689fa97a9c3701f4c2"
const API_POST= `https://api.dribbble.com/v2/projects?access_token=${ACCESS_TOCKEN}`


function ProjItems(){
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        const projectData = {name, description}
        console.log(projectData)
        fetch(API_POST,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(projectData)
        }).then((resp)=>(console.log(resp)))


    }
    function getProjectNameInput(e){
        console.log(e.target.value)
        setName(e.target.value)

    }

    function getProjectDescriptionInput(e){
        console.log(e.target.value)
        setDescription(e.target.value)

    }



    return(
        
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="InputName" className="form-label">{`Name`}</label>
                <input type="text" value={name} onChange={getProjectNameInput} className="form-control" id="InputName"></input>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">{`Enter Project description`}</label>
                <textarea value={description} className="form-control" onChange={getProjectDescriptionInput} id="descriptionFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">{`submit`}</button>
        </form>
        
    )
}

export default ProjItems