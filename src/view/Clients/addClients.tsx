import React, { useState } from 'react';
import * as S from './style';
import * as A from '../../services/app'
import * as I from '../../services/interfaces'
import {FcHome} from 'react-icons/fc'

const AddClients: React.FC = () => {
    
    const [client, setClient] = useState<I.Client>({
        id: 1,
        name: '',
        phone: 0,
        mail: '',
        adress:{
            cep: 0,
            uf: '',
            city: '',
            district: '',
            place: '',
            number: 0
        }
    });
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>){     
        e.preventDefault();              
        console.log("Cadastrando cliente");
        let clients = A.clients;
        console.log(clients);
        if(client !== undefined){
            let index = clients.find(element => element.id === client.id);
            if(index === undefined){
                console.log("Index desconhecido");
                clients.push(client);
                localStorage.setItem("clients", JSON.stringify(clients));
            }else{
                console.log("Index conhecido" + index.id);
                clients[index.id - 1] = client;
                localStorage.setItem("clients", JSON.stringify(clients));
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
        setClient(
            {                        
                id: Number((e.currentTarget.elements[0] as HTMLInputElement).value),
                name: (e.currentTarget.elements[1] as HTMLInputElement).value,
                phone: Number((e.currentTarget.elements[2] as HTMLInputElement).value),
                mail: (e.currentTarget.elements[3] as HTMLInputElement).value,
                adress:{
                    cep: Number((e.currentTarget.elements[4] as HTMLInputElement).value),
                    uf: (e.currentTarget.elements[5] as HTMLInputElement).value,
                    city: (e.currentTarget.elements[6] as HTMLInputElement).value,
                    district: (e.currentTarget.elements[7] as HTMLInputElement).value,
                    place: (e.currentTarget.elements[8] as HTMLInputElement).value,
                    number: Number((e.currentTarget.elements[9] as HTMLInputElement).value)
                }
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
                <S.Form method="POST" onInput={handleChange} onSubmit={handleSubmit}>
                    <S.FieldSetDiv>
                        <S.InputDiv>
                            <label htmlFor="id" >Id: </label>
                            <input type="text" name="id" value={client?.id} />
                        </S.InputDiv>
                        <S.InputDiv>
                            <label htmlFor="name">Nome: </label>
                            <input type="text" name="name" value={client?.name} />
                        </S.InputDiv>
                        <S.InputDiv>
                            <label htmlFor="phone">Telefone: </label>
                            <input type="text" name="phone" value={client?.phone} />
                        </S.InputDiv>
                        <S.InputDiv>
                            <label htmlFor="mail">E-mail: </label>
                            <input type="text" name="mail" value={client?.mail} />
                        </S.InputDiv>
                    </S.FieldSetDiv>
                    <S.FieldSetDiv>
                        <S.InputDiv>
                            <label htmlFor="cep" >CEP: </label>
                            <input type="text" name="cep" value={client?.adress.cep} />
                        </S.InputDiv>
                        <S.InputDiv>
                            <label htmlFor="uf">UF: </label>
                            <input type="text" name="uf" value={client?.adress.uf} />
                        </S.InputDiv>
                        <S.InputDiv>
                            <label htmlFor="city">Cidade: </label>
                            <input type="text" name="city" value={client?.adress.city} />
                        </S.InputDiv>
                        <S.InputDiv>
                            <label htmlFor="district">Bairro: </label>
                            <input type="text" name="district" value={client?.adress.district} />
                        </S.InputDiv>
                        <S.InputDiv>
                            <label htmlFor="place">Logradouro: </label>
                            <input type="text" name="place" value={client?.adress.place} />
                        </S.InputDiv>
                        <S.InputDiv>
                            <label htmlFor="number">Número: </label>
                            <input type="text" name="number" value={client?.adress.number} />
                        </S.InputDiv>
                    </S.FieldSetDiv>
                    <S.InputDiv>
                        <input type="submit" value="Cadastrar Cliente" />
                    </S.InputDiv>
                </S.Form>
            </S.Section>            
        </>
    )
}

export default AddClients;