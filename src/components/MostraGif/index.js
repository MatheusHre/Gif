import React , { useState} from 'react'

function MostraGif() {
    const [mostrarGif, gifStatus] = useState(false)

    const mostrar = () => {
        gifStatus(true)
    }

    const esconder = () =>{
        gifStatus(false)
    }

    return (
        <>
            <button onClick={mostrar}>Clique Aqui!</button>
            
            {
                mostrarGif && <img src="https://cdn.dicionariopopular.com/imagens/nazareconfusamatematica.gif" alt="Gif" onClick={esconder}/>
            }

        </>
    )
}

export default MostraGif