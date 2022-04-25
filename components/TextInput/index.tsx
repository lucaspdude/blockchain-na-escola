import React, { useEffect, useRef, FunctionComponent, useState } from 'react'
import { useField } from '@unform/core'

interface TextInputProps {
  name: string
  label: string
  placeholder?: string
  type?: string
}
const TextInput: FunctionComponent<TextInputProps> = ({
  name,
  label,
  type = 'text',
  placeholder,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, registerField, error, clearError } =
    useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: (ref) => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  return (
    <div className={`flex flex-col my-3  `}>
      {label && type !== 'hidden' && (
        <label
          htmlFor={name}
          className="text-2xl text-zinc-800 dark:text-white uppercase"
        >
          {label}
        </label>
      )}

      <input
        ref={inputRef}
        name={name}
        id={name}
        defaultValue={defaultValue}
        className="py-3 px-6 rounded-lg shadow-md bg-gray-50/75 my-3 dark:bg-zinc-800/75"
        onFocus={clearError}
        type={type}
        placeholder={placeholder}
        {...rest}
      />

      {error && <div className="text-red-500">{error}</div>}
    </div>
  )
}

export default TextInput
