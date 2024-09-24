

import { Container, NoteAndTitle, Markers, DeleteAndSave } from './style'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Marker } from '../../components/Marker'
import { ButtonPink } from '../../components/ButtonPink'
import { ButtonBlack } from '../../components/ButtonBlack'

import { Link } from 'react-router-dom'

export function New() {
    return(
        <Container>
            <Header/>
            <main>
                <form>
                    <Link to="/"> <ButtonText title="Voltar" /> </Link>

                    <h1>Novo filme</h1>
                    
                    <NoteAndTitle>
                        <Input placeholder="Título" />
                        <Input placeholder="Sua nota (de 0 a 5)" />
                    </NoteAndTitle>

                    <Textarea placeholder="Observações" />

                    <h2>Marcadores</h2>

                    <Markers>
                        <Marker value="Ficção científica" />
                        <Marker isNew placeholder="Novo marcador" />
                    </Markers>

                    <DeleteAndSave>
                        <Link to="/"> <ButtonBlack title="Excluir filme" /> </Link>
                        <Link to="/details/:id"> <ButtonPink title="Salvar alterações" /> </Link>
                    </DeleteAndSave>
                </form>
            </main>
        </Container>
    )
}