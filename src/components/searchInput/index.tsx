import React, { useState } from 'react'
import Select from 'react-select';
import { data } from './data'

const SearchInput: React.FC = () => {
  const [selectedOption, setselectedOption] = useState(null)
  const handleChange = (selectedOption : any) => {
    setselectedOption(selectedOption)
  }
  return (
    <div className="flex flex-row justify-between w-700">
      <Select options={data} onChange={handleChange} value={selectedOption} className="w-200"/>
      <Select options={data} onChange={handleChange} value={selectedOption} className="w-200"/>
      <input type="text" placeholder="Search by name.." className="focus:border-blue-600 focus:outline-none focus:border-0 px-10 py-5 border-2 border-gray-400 rounded-lg"/>
      <button className="bg-blue-500 text-center rounded-lg px-10 font-bold text-white border-4 border-blue-500 hover:border-blue-600 hover:bg-white hover:text-black">Filter</button>
    </div>
  )
}

export default SearchInput;