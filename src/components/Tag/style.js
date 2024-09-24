

import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 3rem;
    padding: 0.8rem 1.6rem;
    border-radius: 0.8rem;

    font-family: "Roboto", serif;
    font-size: 1.2rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TAG};
`;