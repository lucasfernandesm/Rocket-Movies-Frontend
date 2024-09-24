

import { Container, Form, Background } from './style'

import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { ButtonPink } from '../../components/ButtonPink'

import { Link } from 'react-router-dom'

export function SignIn() {
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Faça seu login</h2>

                <Input type="text" placeholder="E-mail" icon={FiMail} />
                <Input type="password" placeholder="Senha" icon={FiLock} />

                <ButtonPink title="Entrar" />

                <Link to="signup">Criar conta</Link>
            </Form>
            <Background />
        </Container>
    )
}