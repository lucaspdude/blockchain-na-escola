import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../Button'
import TextArea from '../TextArea'
import TextInput from '../TextInput'

const ContactForm = () => {
  const ref = useRef<FormHandles>(null)

  const { t } = useTranslation('home')

  const handleSubmit = async (data: object) => {
    console.log(data)
  }
  return (
    <div>
      <Form ref={ref} onSubmit={handleSubmit}>
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
          placeholder={t('contato.formulario.mensagem')}
        />

        <div className="flex justify-end">
          <Button variant="default" onClick={() => ref.current?.submitForm()}>
            Enviar
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default ContactForm
