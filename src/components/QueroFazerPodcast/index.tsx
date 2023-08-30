import * as S from './styles'
import React, { useRef, useState } from 'react'

function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef<HTMLInputElement>(null)
  const inputNome = useRef<HTMLInputElement>(null)
  const inputTelefone = useRef<HTMLInputElement>(null)
  const inputCidade = useRef<HTMLInputElement>(null)
  const inputUF = useRef<HTMLInputElement>(null)
  const inputAssunto = useRef<HTMLInputElement>(null)
  const inputIdeia = useRef<HTMLInputElement>(null)
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('')

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault()

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/quero-fazer-podcast', {
      body: JSON.stringify({
        nome: inputNome?.current?.value,
        email: inputEl?.current?.value,
        telefone: inputTelefone?.current?.value,
        cidade: inputCidade?.current?.value,
        uf: inputUF?.current?.value,
        assunto: inputAssunto?.current?.value,
        ideia: inputIdeia?.current?.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const { error } = await res.json()

    if (error) {
      // 4. If there was an error, update the message in state.
      if (error === 'Member Exists') {
        setMessage('Ops, você já nos mandou uma ideia.')
      } else {
        setMessage(error)
      }

      return
    }

    // 5. Clear the input value and show a success message.
    if (inputNome.current) {
      inputNome.current.value = ''
    }

    if (inputEl.current) {
      inputEl.current.value = ''
    }

    if (inputTelefone.current) {
      inputTelefone.current.value = ''
    }

    if (inputCidade.current) {
      inputCidade.current.value = ''
    }

    if (inputUF.current) {
      inputUF.current.value = ''
    }

    if (inputAssunto.current) {
      inputAssunto.current.value = ''
    }

    if (inputIdeia.current) {
      inputIdeia.current.value = ''
    }

    setMessage(
      'Já adianto que gostaremos da sua ideia! 🎉 Em breve entraremos contato .'
    )
  }

  return (
    <S.Wrapper>
      <form onSubmit={subscribe}>
        <label htmlFor="nome-input">{'Nome'}</label>
        <input
          id="nome-input"
          name="nome"
          placeholder="voce@maravilhoso.com"
          ref={inputNome}
          required
          type="text"
        />
        <br />
        <label htmlFor="email-input">{'Endereço de email'}</label>
        <input
          id="email-input"
          name="email"
          placeholder="voce@maravilhoso.com"
          ref={inputEl}
          required
          type="email"
        />
        <br />
        <label htmlFor="telefone-input">{'Telefone'}</label>
        <input
          id="telefone-input"
          name="telefone"
          placeholder="33882096"
          ref={inputTelefone}
          type="text"
        />
        <br />
        <label htmlFor="cidade-input">{'Cidade'}</label>
        <input id="cidade-input" name="cidade" ref={inputCidade} type="text" />
        <br />
        <label htmlFor="uf-input">{'UF'}</label>
        <input
          id="uf-input"
          name="uf"
          placeholder="DF"
          ref={inputUF}
          type="text"
        />
        <br />
        <label htmlFor="assunto-input">{'Assunto'}</label>
        <input
          id="assunto-input"
          name="assunto"
          placeholder="Assunto maneiro"
          ref={inputAssunto}
          required
          type="text"
        />
        <br />
        <label htmlFor="ideia-input">{'Ideia'}</label>
        <input
          id="ideia-input"
          name="ideia"
          placeholder="minha ideia muito boa"
          ref={inputIdeia}
          required
          type="textarea"
        />
        <div>{message ? message : `Prometemos que não enviaremos spam.`}</div>
        <button type="submit">{'✨ Inscreva-se 💌'}</button>
      </form>
    </S.Wrapper>
  )
}

export default Subscribe
