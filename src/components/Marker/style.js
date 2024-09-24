

import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.6rem;

    height: 5.6rem;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_INPUT };
    color: ${({ theme }) => theme.COLORS.WHITE};

    border-radius: 1rem;
    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY}` : "none" };

    > button {
        display: flex;
        align-items: center;
        font-size: 2.2rem;
        border: none;
        background: none;
    }

    .button-delete, .button-add {
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > input {
        width: 15rem;
        color: ${({ theme }) => theme.COLORS.WHITE};

        background: transparent;
        border: none;

        &::placeholder {
            font-size: 1.6rem;
            color: ${({ theme }) => theme.COLORS.GRAY};
        }
    }
`;