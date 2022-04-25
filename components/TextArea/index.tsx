import React, { useEffect, useRef, FunctionComponent, useState } from 'react'
import { useField } from '@unform/core'

interface TextAreaProps {
  name: string
  label: string
  placeholder?: string
}
const TextArea: FunctionComponent<TextAreaProps> = ({
  name,
  label,
  placeholder,
  ...rest
}) => {
  const inputRef = useRef(null)
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
    <div className={`flex flex-col  `}>
      {label && (
        <label
          htmlFor={name}
          className="text-2xl text-zinc-800 dark:text-white uppercase"
        >
          {label}
        </label>
      )}

      <textarea
        ref={inputRef}
        name={name}
        id={name}
        defaultValue={defaultValue}
        className="py-3 px-6 rounded-lg shadow-md bg-gray-50/75 my-3 dark:bg-zinc-800/75"
        onFocus={clearError}
        rows={5}
        {...rest}
      ></textarea>

      {error && <div className="text-red-500">{error}</div>}
    </div>
  )
}

export default TextArea
