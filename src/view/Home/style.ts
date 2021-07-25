import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Section = styled.section`
    width: 80vw;
    height: 32vh;
    padding: 25vh 10vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div{        
        display: flex;
        height: 200px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
`

export const SLink = styled(Link)`
    text-decoration: none;
    color: #fff;
`