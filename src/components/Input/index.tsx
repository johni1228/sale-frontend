import React from 'react'
import styled from 'styled-components'

interface InputProps {
  id?: string,
  name?: string,
  value?: string | number,
  type?: string,
  placeholder?: string,
  label?: string,
  onChange?: (v: any) => void,
  className?: string,
  checked?:boolean
}

export const Input = ({label, type, value, placeholder, id, name, checked, onChange, className }: InputProps) => {
  return (<>
    <div className={`${className}`}>
      <p className="">{label}</p>
      <input
       id={id || name }
       name={name}
       type={type}
       placeholder={placeholder}
       value = {value}
       onChange = {onChange}
       checked = {checked}
       className="border-2 border-gray-500 hover:border-red-200 focus:border-red-500 outline-none p-5 min-w-full focus:shadow rounded-md"/>
    </div>
  </>)
}

Input.defaultProps = {
  id: '',
  name: '',
  type: 'text',
  label: '',
  placeholder: '',
  onChange: () => { },
}