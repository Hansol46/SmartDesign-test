import React from 'react'
import CreateProductForm from './CreateProductForm'

function CreateProduct({description, nameProduct, setDescription, setName}) {
    return (
        <div>
            <CreateProductForm 
            description={description} 
            nameProduct={nameProduct}
            setDescription={setDescription}
            setName={setName}
            />
        </div>
    )
}

export default CreateProduct
