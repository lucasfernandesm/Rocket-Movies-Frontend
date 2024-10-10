

import { useState } from "react";
import { api } from '../../services/api';

import { Container, Form, Background } from './style';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { ButtonPink } from '../../components/ButtonPink';

import { useNavigate } from 'react-router-dom';

export function SignUp() {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if(!name || !email || !password) {
            return alert("Preencha todos os dados!");
        }

        api.post("/users", { name, email, password })
        .then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        })
        .catch(error => {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível cadastrar");
            }
        })
    }

    function handleBack() {
        navigate("/");
    }
    
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>

                <Input 
                    type="text" 
                    placeholder="Nome" 
                    icon={FiUser}
                    onChange={e => setName(e.target.value)} 
                />

                <Input 
                    type="text" 
                    placeholder="E-mail" 
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}  
                />

                <Input 
                    type="password" 
                    placeholder="Senha" 
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}  
                />

                <ButtonPink title="Cadastrar" onClick={handleSignUp} />

                <button onClick={handleBack}>Voltar para o login</button>
            </Form>
            <Background />
        </Container>
    )
}