

import { Container, Content, Cards } from './style';

import { FiPlus } from "react-icons/fi";

import { Header } from '../../components/Header';
import { ButtonPink } from '../../components/ButtonPink';
import { Card } from '../../components/Card';

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';

export function Home() {
    const [search, setSearch] = useState("");
    const [notes, setNotes] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}`);
            setNotes(response.data)
        }
        fetchNotes();
    }, [search]);

    notes.map(note => console.log(note));

    return(
        <Container>
            <Header search={search} setSearch={setSearch} />
            <Content>
                <main>
                    <header>
                        <h1>Meus filmes</h1>
                        <ButtonPink title="Adicionar Filmes" icon={FiPlus} onClick={() => navigate("/new")} />
                    </header>

                    <Cards>
                        {
                            notes.map(note => (
                                <Card
                                    key={String(note.id)}
                                    data={note}
                                    onClick={() => handleDetails(note.id)}
                                />
                            ))
                        }
                    </Cards>
                </main>
            </Content>        
        </Container>
    )
}