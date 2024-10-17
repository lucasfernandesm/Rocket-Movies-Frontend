

import { Container, NoteAndTitle, Markers, DeleteAndSave } from './style';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Marker } from '../../components/Marker';
import { ButtonPink } from '../../components/ButtonPink';
import { ButtonBlack } from '../../components/ButtonBlack';

import { Link } from 'react-router-dom';
import { useState } from 'react';

export function New() {
    const [markers, setMarkers] = useState([]);
    const [newMarker, setNewMarker] = useState("");

    function handleAddMarker() {
        setMarkers(prevState => [...prevState, newMarker]);
        setNewMarker("");
    }

    function handleRemoveMarker(deleted) {
        setMarkers(prevState => prevState.filter(marker => marker !== deleted));
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddMarker();
        }
    }

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
                        {
                            markers.map((marker, index) => (
                                <Marker
                                    key={String(index)}
                                    value={marker}
                                    onClick={() => handleRemoveMarker(marker)} 
                                />
                            ))
                        }
                        <Marker 
                            isNew 
                            placeholder="Novo marcador"
                            value={newMarker}
                            onChange={e => setNewMarker(e.target.value)}
                            onKeyDown={handleKeyDown}
                            onClick={handleAddMarker}
                        />
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