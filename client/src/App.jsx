import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import DataCard from './Components/DataCard';
import CardForm from './Components/CardForm';

function App() {
  const[data,setData]=useState([]);
  const[newAuthor,setNewAuthor]=useState("")
  const[newTitle,setNewTitle]=useState("")
  const[newDesc,setNewDesc]=useState("")

  const urlWithProxy='/api/v1/';
 
  var getData=async()=>{
    await axios.get(urlWithProxy)
    .then(
      (res)=>{var newData=res.data
      setData(newData)
      console.log("Current Data Set" + data)
      }).catch((err)=>console.log(err))
  }

  useEffect(
    ()=>{
      getData()
      
      },[]
  )

  /*Handlers Below */
  //handle submit
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Posting: "+newAuthor+" " + newTitle + " " + newDesc)

    axios.post(urlWithProxy,{
      author:newAuthor,
      title:newTitle,
      desc:newDesc
    })
    .then((res)=>{
      console.log("handle submit success?");
      getData()
    })
  }

  const handleAuthor=(auth)=>{setNewAuthor(auth)
  }

  const handleDesc=(description)=>{setNewDesc(description)
  }

  const handleTitle=(tit)=>{setNewTitle(tit)
  }
  
  //For Display Card Data
  var cardDisplay=()=>data.map((myData)=>(
    <DataCard
    key={myData.id}
    author={myData.author}
    title={myData.title}
    desc={myData.desc}
    />
  ))
  

  return (
    <>
      <div className="App">
        <CardForm
        handleAuthor={handleAuthor}
        handleDesc={handleDesc}
        handleSubmit={handleSubmit}
        handleTitle={handleTitle}
        author={newAuthor}
        title={newTitle}
        />
        {cardDisplay()}
      
      </div>
    </>
  )
}

export default App


 //For Buton implimentation testing
  // function getDataFromServer(){
  //  return axios
  //     .get(urlWithProxy)
  //     .then((res)=>{
  //       console.log(res.data)
  //       // setData(res.data)})
  //       var exampleCard=res.data[0]
  //       setData("Successful")})
  //     .catch((err)=>{
  //       console.error(err);
  //     })
  // }