import React from 'react'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';

export const Home = () => {
  return (
    <div className=" w-full min-h-screen flex flex-col bg-[#0D1117]">
        <Navbar/>
        <div className=" mt-15 flex flex-row  h-full">
            <Sidebar/>
        </div>
    </div>
  )
}
export default Home;