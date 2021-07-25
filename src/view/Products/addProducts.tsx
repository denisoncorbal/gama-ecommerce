import React, { useState } from 'react';
import * as S from './style';
import * as A from '../../services/app';
import * as I from '../../services/interfaces';
import {FcHome} from 'react-icons/fc'

const AddProducts: React.FC = () => {
    
    const [product, setProduct] = useState<I.Product>();
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>){     
        e.preventDefault();        
        let products = A.products;
        if(product !== undefined){
            let index = products.find(element => element.id === product.id);
            if(index === undefined){
                products.push(product);
                localStorage.setItem("products", JSON.stringify(products));
            }else{
                products[index.id - 1] = product;
                localStorage.setItem("products", JSON.stringify(products));
            }
            alert("Cadastro efetuado com sucesso!")    
            Array.from(document.querySelectorAll("input")).forEach(element => {
                if(!element.value.includes("Cadastrar")){
                    element.value = "";
                }
            });                    
        }else{
            alert("Erro no cadastramento")    
            Array.from(document.querySelectorAll("input")).forEach(element => {
                if(!element.value.includes("Cadastrar")){
                    element.value = "";
                }
            }); 
        }
    }    

    function handleChange(e: React.FormEvent<HTMLFormElement>){        
        setProduct(
            {                        
                id: Number((e.currentTarget.elements[0] as HTMLInputElement).value),
                name: (e.currentTarget.elements[1] as HTMLInputElement).value,
                description: (e.currentTarget.elements[2] as HTMLInputElement).value,
                price: Number((e.currentTarget.elements[3] as HTMLInputElement).value)
            }
        );
    }

    return(
        <>            
            <S.SLink to="/">
                <FcHome size={50} style={{ "padding": "0 25px" }} />
                <h2>Voltar</h2>
            </S.SLink>
            <S.Section>
                <S.Form method="POST" onChange={handleChange} onSubmit={handleSubmit}>
                    <S.FieldSetDiv>
                        <S.InputDiv>
                            <label htmlFor="id" >Id: </label>
                            <input type="text" name="id" value={product?.id} />
                        </S.InputDiv>
                        <S.InputDiv>
                            <label htmlFor="name">Nome: </label>
                            <input type="text" name="name" value={product?.name} />
                        </S.InputDiv>
                        <S.InputDiv>
                            <label htmlFor="description">Descrição: </label>
                            <input type="text" name="description" value={product?.description} />
                        </S.InputDiv>
                        <S.InputDiv>
                            <label htmlFor="price">Preço: </label>
                            <input type="text" name="price" value={product?.price} />
                        </S.InputDiv>
                    </S.FieldSetDiv>
                    <S.InputDiv>
                        <input type="submit" value="Cadastrar Produto" />
                    </S.InputDiv>
                </S.Form>
            </S.Section>
        </>
    )
}

export default AddProducts;