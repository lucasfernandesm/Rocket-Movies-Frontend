

import { Container, Form, Background } from './style';
import { FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { ButtonPink } from '../../components/ButtonPink';

import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useState } from 'react';


export function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signIn } = useAuth();

    function handleSignIn(event) {
        event.preventDefault();
        signIn({ email, password });
    }

    return(
        <Container>
            <Form onSubmit={handleSignIn}>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Faça seu login</h2>

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

                <ButtonPink title="Entrar" type="submit" />

                <Link to="signup">Criar conta</Link>
            </Form>
            <Background />
        </Container>
    )
}