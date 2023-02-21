import React, { useState } from 'react'

const PostScream = () => {
   const initialState = {title:'',link:'',description:'',skills:''}
   const [userScream, setUserScream] = useState(initialState) 
   const {title,link,description,skills} = userScream

   const handleChangeInput=(e)=>{
    const {name,value} = e.target;
    setUserScream({...userScream,[name]:value})
   }

   const handleSubmit=async (e)=>{
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/scream',{
        method: 'POST',
        body: JSON.stringify(userScream),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    if(response.status===400){
      alert("enter description");
    }
    else{
      
    }
   }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>
        <div className='heading'>Title</div>
          <input type="text" 
          name="title" 
          onChange={handleChangeInput} 
          value={title}
          />
        </label>
        <label>
        <div className='heading'>Link</div>
          <input type="text" 
          name="link" 
          onChange={handleChangeInput} 
          value={link}
          />
        </label>
        <label>
        <div className='heading'>Description</div>
          <textarea type="text" 
          name="description" 
          onChange={handleChangeInput} 
          value={description}
          />
        </label>
        <label>
        <div className='heading'>Required Skills :</div>
          <input
          type="text" 
          name="skills" 
          onChange={handleChangeInput} 
          value={skills}
          />
        </label>
        <button type="submit" value="Submit" onClick={handleSubmit}>Post Scream</button>
        </form>
    </div>
  )
}

export default PostScream