import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom'
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

function Profile() {
  const [lista, setLista] = useState([])

  async function getById(id) {
    const { data } = await api.get(`/${id}`)

    setLista(data)

    console.log('Entrou!')

    console.log(`Lista: ${lista}`)

    return lista
  }
  // const history = useHistory()

  async function getAll() {
    const id = localStorage.getItem('ID')

    const { data } = await api.get(`/${id}`)

    setLista(data)

    console.log('Entrou!')

    console.log(`Lista: ${lista}`)

    return lista
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

          <ul key={lista._id}>
            <ContainerLista>
              <div style={{ paddingTop: '18px' }} />

              <ContainerData>
                <Lista>
                  <img
                    width="15%"
                    height="12%"
                    src={`http://localhost:8000/files/${lista.image}`}
                    alt="fotos"
                  />
                </Lista>
                <Lista>
                  <strong>Name: </strong>
                  {lista.name}
                </Lista>
                <Lista>
                  <strong>Email: </strong>
                  {lista.email}
                </Lista>
              </ContainerData>
            </ContainerLista>
          </ul>
        </BodyContainer>
      </Container>
    </>
  )
}

export default Profile
