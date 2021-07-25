import styled from 'styled-components';
import {Link} from 'react-router-dom'


export const Section = styled.section`
    width: 80vw;
    height: 65vh;
    padding: 0vh 10vw;
`

export const InputDiv = styled.div`
    width: auto;
    display: flex;
    height: 10vh;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;    
`

export const FieldSetDiv = styled.div`
    display: flex;
    height: 10vh;
    margin: 4vh 0;
    padding: 4vh 0;
    flex-direction: row;
    justify-content: space-between; 
    flex-wrap: wrap;
`

export const SLink = styled(Link)`        
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    color: #fff;
    h2{
        padding: 0 15px;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;    
    width: auto;
    color: #fff;
    input{
        margin: 0 10px;        
    }
`

export const UL = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;    
    width: auto;
`
export const LI = styled.li`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    width: auto;
    border: 1px solid #fff;   
    margin: 5px 0;     
`

export const P = styled.p`
    color: #fff;
    padding: 0 10px;
`