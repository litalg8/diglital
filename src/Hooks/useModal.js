import React, { useState } from 'react';

export default () => {
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState('im modal content');

    const handleModal =(content = false)=>{
        setModal(!modal); 
        if(content) {
            setModalContent(content)
        }
    }
return {modal, handleModal,modalContent}
}