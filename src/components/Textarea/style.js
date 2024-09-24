

import styled from 'styled-components'

export const Container = styled.textarea`
    width: 100%;
    height: 27.4rem;

    border: none;
    border-radius: 1rem;

    margin-top: 4rem;
    margin-bottom: 4rem;
    padding: 1.8rem 1.6rem ;

    resize: none;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
    color: ${({ theme }) => theme.COLORS.WHITE};
`;