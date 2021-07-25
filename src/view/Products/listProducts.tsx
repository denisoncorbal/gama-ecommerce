import React, {useState, useEffect} from 'react';
import * as S from './style';
import * as A from '../../services/app';
import * as I from '../../services/interfaces';

const ListProducts: React.FC = () => {
    const [products, setProducts] = useState<I.Product[]>([]);
    useEffect(()=> {        
        setProducts(A.products);
    }, []);
    
    return(
        <>            
            <S.SLink to="/">Voltar</S.SLink>
            <S.UL>
                {
                    products.map((product) => {
                        return(
                            <S.LI>
                                <S.P>{product.id}</S.P>
                                <S.P>{product.name}</S.P>
                                <S.P>{product.description}</S.P>
                                <S.P>{product.price}</S.P>                                
                            </S.LI>                            
                        )
                    })
                }                
            </S.UL>          
        </>        
    )
}

export default ListProducts;