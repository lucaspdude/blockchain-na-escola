import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../Button'
import TextArea from '../TextArea'
import TextInput from '../TextInput'

import axios from 'axios'
import successPigeon from '../../assets/images/success.gif'

import * as Yup from 'yup'
import Image from 'next/image'

const ContactForm = () => {
  const formRef = useRef<FormHandles>(null)

  const { t } = useTranslation('home')
  const [hasSuccess, setHasSuccess] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = async (data: unknown) => {
    if (isLoading) return
    setIsLoading(true)
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatório'),
        email: Yup.string()
          .required('Campo obrigatório')
          .email('Informe um email válido'),
        message: Yup.string().required('Campo obrigatorio'),
      })

      await schema.validate(data, {
        abortEarly: false,
      })

      console.log('validated', data)

      axios
        .post('/api/email', data)
        .then((response) => {
          console.log(response)
          setIsLoading(false)
          setHasSuccess(true)
        })
        .catch((error) => {
          console.log(error)
          setIsLoading(false)
        })
    } catch (err) {
      console.log(err)
      const validationErrors: any = {}

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          if (typeof error.path !== 'undefined') {
            validationErrors[error.path] = error.message
          }
        })
        console.log(validationErrors)
        setIsLoading(false)
        formRef?.current?.setErrors(validationErrors)
      }
      console.log(validationErrors)
    }
  }
  return (
    <div>
      <Form ref={formRef} onSubmit={handleSubmit}>
        {hasSuccess ? (
          <div className="flex flex-col items-center">
            <p className="text-2xl text-white py-3 ">
              🎉 Sua mensagem foi recebida!🎉
            </p>
            <Image src={successPigeon} width={320} height={200} />
          </div>
        ) : (
          <>
            <TextInput
              name="name"
              label={t('contato.formulario.nome')}
              placeholder={t('contato.formulario.placeholder_nome')}
            />
            <TextInput
              name="email"
              label={t('contato.formulario.email')}
              placeholder={t('contato.formulario.placeholder_email')}
              type="email"
            />
            <TextArea
              name="message"
              label={t('contato.formulario.mensagem')}
              placeholder={t('contato.formulario.placeholder_mensagem')}
            />

            <div className="flex justify-end">
              <Button
                variant="default"
                onClick={() => formRef.current?.submitForm()}
                isLoading={isLoading}
                label={t('contato.formulario.enviar')}
              >  
              </Button>
            </div>
          </>
        )}
      </Form>
    </div>
  )
}

export default ContactForm
