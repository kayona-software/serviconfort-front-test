import React from "react";
import styled from "styled-components";
import { Button } from 'adminlte-2-react';
import './styles.css';

const AcceptDeclineModal = ({message, title, show, setShow, acceptFunction, data}) =>{
    return(
        <>
        { show &&
            <Overlay>
                <ModalContainer>
                    <ModalHeader>
                        <h3>{title}</h3>
                    </ModalHeader>
                    <CloseButton onClick={()=>setShow(!show)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>  
                    </CloseButton>
                    <ModalBody>
                        {message}
                    </ModalBody>
                    <ModalFooter>
                        <Button className="modalAcceptButton" type="danger" text="Aceptar" 
                        onClick={()=>{
                            acceptFunction(data.id)
                        }}
                        />
                        <Button className="modalDeclineButton" type="default" text="Cancelar" onClick={()=>setShow(!show)}/>
                    </ModalFooter>
                </ModalContainer>
            </Overlay>
        }
        </>
    );
}
export default AcceptDeclineModal;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContainer = styled.div`
    width: 500px;
    min-height: 100px;
    background: #fff;  
    position: relative;
    border-radius: 5px;
    padding: 20px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
`;

const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;

    h3{
        font-weight: bold;
        font-size: 16px;
        color: #1766DC;
        margin-top:0px;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;

    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: #1766DC;
    
    &:hover{
        background: #f2f2f2;  
    }

    svg{
        width:100%;
        height:100%;
    }
`;

const ModalBody = styled.div`
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;
`; 

const ModalFooter = styled.div`
    display: flex;
    justify-content: right;
`;
