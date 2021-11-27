import React, { useState } from 'react'
import Select from 'react-select';
import { data } from './data'

const SearchInput: React.FC = () => {
  const [selectedOption, setselectedOption] = useState(null)
  const handleChange = (selectedOption : any) => {
    setselectedOption(selectedOption)
  }
  return (
    <div className="msm:hidden sm:flex flex flex-row md:justify-around msm:justify-center w-700 lg:flex msm:text-15 md:20 items-center">
      <Select options={data} onChange={handleChange} value={selectedOption} className="lg:w-200 md:w-150 msm:hidden md:inline"/>
      <Select options={data} onChange={handleChange} value={selectedOption} className="lg:w-200 md:w-150 msm:hidden md:inline"/>
      <input type="text" placeholder="Search by name.." className="msm:h-20 sm:h-35 focus:border-blue-600 focus:outline-none focus:border-0 msm:px-5 md:px-10 md:py-5 msm:py-0 border-2 border-gray-400 rounded-lg msm:w-200 md:w-200"/>
      <button className="bg-blue-500 text-center rounded-lg ml-5 lg:px-5 msm:text-10 md:text-20 2xl:px-10 mlg:font-bold text-white border-4 border-blue-500 hover:border-blue-600 hover:bg-white hover:text-black">Filter</button>
    </div>
  )
}

export default SearchInput;