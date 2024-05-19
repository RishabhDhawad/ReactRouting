import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/rishabhdhawad')
    //     .then(Response => Response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className='text-center m-4 bg-white text-black p-4 text-3xl'> GitHub Followers: {data.followers}
        <div className='flex justify-center mt-4'>
            <img src={data.avatar_url} alt="Git picture" width={300}/>
        </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/rishabhdhawad')
    return response.json()
}