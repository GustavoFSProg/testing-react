import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../Header'
import api from '../services/api'
import { Container } from './style'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage] = useState([])

  const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const data = new FormData()

      data.append('name', name)
      data.append('email', email)
      data.append('password', password)
      data.append('image', image)

      await api.post('/register', data)

      console.log('Entrou')

      alert('Cadastro realizado com sucesso!')
      return history.push('/')
    } catch (error) {
      console.log(error)

      return alert(`Deu erro no front ${error}`)
    }
  }

  return (
    <>
      <Header />
      <Container>
        <form onSubmit={handleSubmit} className="janela">
          <div className="profile-container">
            <fieldset>
              <legend>Cadastrar Usuários</legend>

              <div className="input-block">
                <label htmlFor="name">Nome</label>
                <br />
                <input
                  style={{
                    width: '95%',
                    height: '27px',
                    border: '2px solid lightblue',
                    borderRadius: '10px',
                    marginBottom: '18px',
                  }}
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="input-block">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  style={{
                    width: '95%',
                    height: '27px',
                    border: '2px solid lightblue',
                    borderRadius: '10px',
                    marginBottom: '18px',
                  }}
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-block">
                <label htmlFor="name">Senha</label>
                <br />
                <input
                  style={{
                    width: '95%',
                    height: '27px',
                    border: '2px solid lightblue',
                    borderRadius: '10px',
                    marginBottom: '18px',
                  }}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <br />

              <div className="input-block">
                <input
                  type="file"
                  id="image"
                  className="botao-imagem"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <br />
              <div className="input-block">
                <button
                  style={{
                    width: '60%',
                    height: '30px',
                    background: 'lightblue',
                    borderRadius: '10px',
                  }}
                  className="confirm-button"
                  type="submit"
                >
                  Cadastrar
                </button>
              </div>
            </fieldset>
          </div>
        </form>
      </Container>
    </>
  )
}
