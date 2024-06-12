import React from 'react'

const HomePage = () => {
  return (
    <div>
        <h1 className='text-4xl font-bold italic text-gray-950 text-center'>HOME</h1>
        <div className='border-black rounded-lg border-2 flex justify-end'>
        <form action="Submit" className='justify-items-start'>
        <h1 className='font-bold italic text-gray-950 text-center'>Input details for appointment</h1>
            <div className='flex justify-end '>
            <label>First-Name:</label>
                <input type="text" class="form-input rounded-full"/>
            </div>
            <br />
            <div className='flex justify-end '>
            <label>Second-Name:</label>
                <input type="text" class="form-input rounded-full"/>
            </div>
            <br />
            <div className='flex justify-end '>
            <label>Phone-Number:</label>
                <input type="number" class="form-input rounded-full"/>
            </div>
            <br />
            <div className='flex justify-end '>
            <label>Location:</label>
                <input type="text" class="form-input rounded-full"/>
            </div>
            <br />
            <div className='flex justify-end'>
            <label>Date:</label>
                <input type="date" className='flex-initial w-44 form-input rounded-full'/>
            </div>
            <br />
            <div className='flex justify-end'>
            <label>Time:</label>
                <input type="time" className='flex-initial w-44 form-input rounded-full'/>
            </div>
        </form>
        </div>
    </div>
  )
}

export default HomePage