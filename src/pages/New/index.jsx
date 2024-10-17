

import { Container, NoteAndTitle, Markers, DeleteAndSave } from './style';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Marker } from '../../components/Marker';
import { ButtonPink } from '../../components/ButtonPink';
import { ButtonBlack } from '../../components/ButtonBlack';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../services/api';

export function New() {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");

    const [markers, setMarkers] = useState([]);
    const [newMarker, setNewMarker] = useState("");

    const navigate = useNavigate();

    function handleAddMarker() {
        setMarkers(prevState => [...prevState, newMarker]);
        setNewMarker("");
    }

    function handleRemoveMarker(deleted) {
        setMarkers(prevState => prevState.filter(marker => marker !== deleted));
    }

    async function handleNewNote() {
        if(!title) {
            return alert("Digite o titulo do filme!");
        }

        if(!rating) {
            return alert("Digite uma nota para o filme!");
        }

        if(Number(rating) > 5 || Number(rating) < 0) {
            return alert('Digite uma nota entre 0 e 5!');
        }

        if(!description) {
            return alert("Digite alguma observação sobre o filme!");
        }

        if(newMarker) {
            return alert("Você deixou um marcador no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe vazio");
        }

        if(markers.length === 0) {
            return alert("Crie pelo menos um marcador para o filme!");
        }

        await api.post("/notes", {
            title,
            description,
            rating,
            markers 
        });

        alert("Nota criada com sucesso ");
        handleBack();
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddMarker();
        }
    }

    function handleBack() {
        navigate(-1);
    }

    return(
        <Container>
            <Header/>
            <main>
                <form>
                    <ButtonText title="Voltar" onClick={handleBack} />

                    <h1>Novo filme</h1>
                    
                    <NoteAndTitle>
                        <Input 
                            placeholder="Título" 
                            onChange= {e => setTitle(e.target.value)}
                        />
                        <Input 
                            placeholder="Sua nota (de 0 a 5)" 
                            onChange= {e => setRating(e.target.value)}
                        />
                    </NoteAndTitle>

                    <Textarea 
                        placeholder="Observações" 
                        onChange= {e => setDescription(e.target.value)}    
                    />

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
                        <ButtonBlack title="Excluir filme" />
                        <ButtonPink title="Salvar alterações" onClick={handleNewNote} />
                    </DeleteAndSave>
                </form>
            </main>
        </Container>
    )
}