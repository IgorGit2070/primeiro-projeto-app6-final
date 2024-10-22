// rafce
import React from 'react'
import { useState } from 'react';

//Importando o Form
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

//Importando o Alerta
import Alert from 'react-bootstrap/Alert';

//Importando o Botão
import Button from 'react-bootstrap/Button';

//Importando o NavLink
import Nav from 'react-bootstrap/Nav'

//Importando o Link
import { Link } from 'react-router-dom';

//Importando o Navigate
import { useNavigate } from 'react-router-dom';

//Importando a URL do server
const url = "http://localhost:5000/usuarios"

const Cadastro = () => {
    //Variaveis pro usuario
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmaSenha, setConfirmaSenha] = useState("")
    const [tipo, setTipo] = useState("Administrador")
    
    //Variaveis pro Alerta
    const [alertaClass, setAlertaClass] = useState("mb-3 d-none")
    const [alertaMensagem, setAlertaMensagem] = useState("")

    //
    const navigate = useNavigate()

    //Criando o método para cadastrar e ir para login
    const handleSubmit = async (e) => {
      e.preventDefault()

      if( !nome == "" ) {
        if( !email == "" ) {
          if( !senha == "" && !confirmaSenha == "" && senha === confirmaSenha ) {

            console.log("Entrei")
            const user = {nome, email, senha, tipo}
            const res = await fetch(url, {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify(user)
            })
            alert("Usuário cadastrado com sucesso")
            setNome("")
            setEmail("")
            setSenha("")
            setConfirmaSenha("")
            navigate("/login")
            setTipo("Administrador")

          } else {
            setAlertaClass("mb-3")
            setAlertaMensagem("As senhas não são iguais")
          }
        } else {
          setAlertaClass("mb-3")
          setAlertaMensagem("O campo email não pode ser vazio")
        }
      } else {
        setAlertaClass("mb-3")
        setAlertaMensagem("O campo nome não pode ser vazio")
      }
    }

  return (
    // <div>Cadastro</div>
    <div>
        <Container style={{padding: 20, backgroundColor: "red"}}>
        <span class="material-symbols-outlined" style={{ fontSize: "100px"}}>person_add</span>
            <form onSubmit={handleSubmit}>
            {/* caixinha do nome */}
        <FloatingLabel
        controlId="floatingInputName"
        label="Nome"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Digite seu nome" value={nome} onChange={ (e) => {setNome(e.target.value)}} />
      </FloatingLabel>

      {/* caixinha do email*/}
      <FloatingLabel
        controlId="floatingInputEmail"
        label="Email"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" value={email} onChange={ (e) => {setEmail(e.target.value)}} />
      </FloatingLabel>

      {/* caixinha da senha */}
      <FloatingLabel controlId="floatingPassword" label="Senha" className="mb-3">
        <Form.Control type="password" placeholder="Password" value={senha} onChange={ (e) => {setSenha(e.target.value)}} />
      </FloatingLabel>

      {/* caixinha da confirmação da senha */}
      <FloatingLabel controlId="floatingConfirmPassword" label="Confirme a senha" className="mb-3">
        <Form.Control type="password" placeholder="Password" value={confirmaSenha} onChange={ (e) => {setConfirmaSenha(e.target.value)}} />
      </FloatingLabel>

      {/* Alerta do erro */}
      <Alert key="danger" variant="danger" className={alertaClass}>
          {alertaMensagem}
        </Alert>

        <Button variant="primary" type='submit'>Cadastrar</Button>

        </form>

        <p>Já tem cadastro? <Nav.Link href="/login">Login</Nav.Link></p>

        <p>Já tem cadastro? <Link to="/login">Login</Link></p>

      </Container>
    </div>
  )
}

export default Cadastro