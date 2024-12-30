import React, {useState} from 'react'

const AddProductPage = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProductName('');
        setProductPrice('');
        setProductImage('');

        let formData = new FormData();
        formData.append('name', productName);
        formData.append('price', productPrice);
        formData.append('image', productImage);

        try{
            const response = await fetch("http://localhost:5001/api/products", {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                const result = await response.json();
                console.log('Product added successfully:', result);
              } else {
                console.error('Failed to add product:', response.statusText);
              }
        }
        catch (error){
            console.error("Failed to add product: ", response.statusText);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
                <label htmlFor="productName">Product Name:</label>
                <input
                    type="text"
                    id="productName"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="Enter product name"
                    style={{ marginBottom: '10px', padding: '8px' }}
                />
                <label htmlFor="productPrice">Product Price: </label>
                <input
                    type="text"
                    id="productPrice"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    placeholder="Enter product price"
                    style={{ marginBottom: '10px', padding: '8px'}}
                />
                <label htmlFor="productImage">Product Image: </label>
                <input
                    type="text"
                    id="productImage"
                    value={productImage}
                    onChange={(e) => setProductImage(e.target.value)}
                    placeholder='Enter Product Image URL'
                    style={{ marginBottom: '10px', padding: '8px' }}
                />
                <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer', border: 'none' }}>
                    Add Product
                </button>
            </form>
        </div>
    )
}

export default AddProductPage