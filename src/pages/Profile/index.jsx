

import { Container, Form, Avatar } from './style'

import { FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'

import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { ButtonPink } from '../../components/ButtonPink'

import { Link } from 'react-router-dom'

export function Profile() {
    return(
        <Container>
            <header>
                <Link to="/"> <ButtonText title="Voltar"/> </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/lucasfernandesm.png" alt="Foto do usuário" />
                    <label htmlFor="avatar">
                        < FiCamera />
                        <input type="file" id="avatar" />    
                    </label>
                </Avatar>

                <Input placeholder="Nome" type="text" icon={FiUser} />
                <Input placeholder="E-mail" type="text" icon={FiMail} />
                <Input placeholder="Senha atual" type="password" icon={FiLock} />
                <Input placeholder="Nova senha" type="password" icon={FiLock} />

                <Link to="/"> <ButtonPink title="Salvar" /> </Link>
            </Form>
        </Container>
    )
}