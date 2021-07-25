import React, {useState, useEffect} from 'react';
import * as S from './style';
import * as A from '../../services/app';
import * as I from '../../services/interfaces';

const ListClients: React.FC = () => {
    const [clients, setClients] = useState<I.Client[]>([]);
    
    useEffect(()=> {        
        setClients(A.clients);
    }, []);
    
    return(
        <>            
            <S.SLink to="/">Voltar</S.SLink>
            <S.UL>
                {
                    clients.map((client) => {
                        return(                            
                            <S.LI>
                                <S.P>{client.id}</S.P>
                                <S.P>{client.name}</S.P>
                                <S.P>{client.phone}</S.P>
                                <S.P>{client.mail}</S.P>
                                <S.P>{client.adress.cep}</S.P>
                                <S.P>{client.adress.uf}</S.P>
                                <S.P>{client.adress.city}</S.P>
                                <S.P>{client.adress.district}</S.P>
                                <S.P>{client.adress.place}</S.P>
                                <S.P>{client.adress.number}</S.P>
                            </S.LI>                                                        
                        )
                    })
                }                
            </S.UL>            
        </>        
    )
}

export default ListClients;