import React, { useEffect, useState } from 'react'
import './App.css';
import Home from './components/Home';
import Updating from './components/Updating';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const ACCESS_TOCKEN = "94781d929c701bcb36ea5dbce4ba9e599cc23d3abdbe63689fa97a9c3701f4c2"
const API= `https://api.dribbble.com/v2/user/projects?access_token=${ACCESS_TOCKEN}`


function App() {
  const [projLinkId, setProjLinkId] = useState(null)
  console.log({projLinkId, setProjLinkId})
  const [projects, setProjects] = useState([])
  console.log(projects)


  useEffect(()=>{
    fetch(API)
    .then(response=> response.json())
    .then(data=>setProjects(data))

  },[])

  function deleteProject(projLinkId){
    fetch(`https://api.dribbble.com/v2/projects/${projLinkId}?access_token=${ACCESS_TOCKEN}`,{
      method:"DELETE"
    }).then((res)=>console.log(res)).then((data)=>console.log(data))
  }


  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home 
        projLinkId={projLinkId} 
        setProjLinkId={setProjLinkId}
        projects={projects}
        setProjects={setProjects}
        />}
        
        >
          
        </Route>

        <Route path={`/${projLinkId}`} element={<Updating 
        projects={projects}
        setProjects={setProjects}
        projLinkId={projLinkId}
        deleteFunction={deleteProject}
        />}>
          
        </Route>

      </Routes>
    </BrowserRouter>


  );
}

export default App;
