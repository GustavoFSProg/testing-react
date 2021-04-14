import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import Header from '../Header'
import {
  Container,
  ContainerLista,
  Lista,
  BodyContainer,
  ContainerData,
  TextContainer,
} from './style'

function Home() {
  const [lista, setLista] = useState([])
  const history = useHistory()

  async function getAll() {
    const { data } = await api.get('/')

    setLista(data)

    console.log('Entrou!')

    console.log(`Lista: ${lista}`)

    return lista
  }

  function getById(id) {
    localStorage.setItem('ID', id)

    history.push('/profile')
  }

  useEffect(() => {
    getAll()
  })

  return (
    <>
      <Header />
      <Container>
        <BodyContainer>
          <TextContainer>
            <h2>Loja Virtual</h2>
            <br />
          </TextContainer>
          {lista.map((list) => {
            return (
              <>
                <ul key={list._id}>
                  <ContainerLista>
                    <div style={{ paddingTop: '18px' }} />

                    <ContainerData>
                      <Lista>
                        <img
                          width="15%"
                          height="12%"
                          src={`http://localhost:8000/files/${list.image}`}
                          alt="fotos"
                        />
                      </Lista>
                      <Lista>
                        <strong>Name: </strong>
                        {list.name}
                      </Lista>
                      <Lista>
                        <strong>Email: </strong>
                        {list.email}
                      </Lista>
                      <button type="button" onClick={() => getById(list._id)}>
                        Detalhes
                      </button>
                    </ContainerData>
                  </ContainerLista>
                </ul>
              </>
            )
          })}
        </BodyContainer>
      </Container>
    </>
  )
}

export default Home
