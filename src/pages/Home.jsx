// rafce
import React from 'react'
//
import { useState, useEffect } from 'react';
//
import Container from 'react-bootstrap/esm/Container';
//
import Button from 'react-bootstrap/Button';
//
import Table from 'react-bootstrap/Table';
//
import ButtonGroup from 'react-bootstrap/ButtonGroup';
//Importando o Componente Modal Cadastrar
import ModalCadastrar from '../components/ModalCadastrar';

//Importando a URL do server
const url = "http://localhost:5000/usuarios"

const Home = () => {
  //Lista de usuarios
  const [usuarios, setUsuarios] = useState([])

  //ModalShow para ativar o buton
  const [modalCadastrar, setModalCadastrar] = useState(false);

  //Resgate de dados da API
  useEffect( () => {
    async function fetchData() {
      try {
        const res = await fetch(url)
        const users = await res.json()
        setUsuarios(users)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchData()
    console.log(usuarios)

  }, [])

  return (
    // <div>Home</div>
    <div>
      <Container>
        <h1>Lista de algo</h1>
        <div className='d-grid col-2 gap-2'>
        <Button variant="primary" size='lg' className='mb-3 d-inline-flex justify-content-center' onClick={() => {setModalCadastrar(true)}}><span class="material-symbols-outlined flex" style={{ fontSize: "100px"}}>add_circle</span>Cadastrar</Button>
        </div>

        <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
          {/* <th>Senha</th> */}
          <th>Tipo</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.nome}</td>
          <td>{user.email}</td>
          {/* <td>{user.senha}</td> */}
          <td>{user.tipo}</td>
          <td><ButtonGroup size='sm'>
      <Button variant="info">Editar</Button>
      <Button variant="danger" onClick={async () => {
        const res = await fetch(`http://localhost:5000/usuarios/${user.id}`, {
          method: "DELETE",
          headers: {"Content-Type": "application/json"},
          })

          const funcionarioRemovido = await res.json()
          alert(`Usuário ${funcionarioRemovido.nome} foi excluído`)
      }}>Excluir</Button>
      </ButtonGroup></td>
        </tr>
        ))}
      </tbody>
    </Table>

    <ModalCadastrar show={modalCadastrar} onHide={ () => { setModalCadastrar(false)}}/>

      </Container>
    </div>
  )
}

export default Home