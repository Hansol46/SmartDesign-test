import React from 'react'
import CreateProductForm from './CreateProductForm'

function CreateProduct({description, nameProduct, setDescription, setName, cards, handleCreate, fileInput}) {
    return (
        <div>
            <CreateProductForm 
            fileInput={fileInput}
            handleCreate={handleCreate}
            description={description} 
            nameProduct={nameProduct}
            setDescription={setDescription}
            setName={setName}
            />
        </div>
    )
}

export default CreateProduct
