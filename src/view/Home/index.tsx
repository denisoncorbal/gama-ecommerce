import React from 'react';
import * as S from './style';
import {FcList, FcAddDatabase} from 'react-icons/fc'

const Home: React.FC = () => {
    return(
        <>            
            <S.Section>                
                <S.SLink to="/addClients">
                    <div>
                        <FcAddDatabase size={100}/>
                        <h2>Adicionar Clientes</h2>
                    </div>                        
                </S.SLink>
                
                <S.SLink to="/listClients">
                    <div>
                        <FcList size={100}/>
                        <h2>Listar Clientes</h2>
                    </div>                        
                </S.SLink>
                <S.SLink to="/addProducts">
                    <div>
                        <FcAddDatabase size={100}/>
                        <h2>Adicionar Produtos</h2>
                    </div>                        
                </S.SLink>
                <S.SLink to="/listProducts">
                    <div>
                        <FcList size={100}/>
                        <h2>Listar Produtos</h2>
                    </div>                        
                </S.SLink>
            </S.Section>            
        </>
    );
}

export default Home;