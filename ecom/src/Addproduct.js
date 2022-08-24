import Header from './Header';
import {useState} from 'react';

function Addproduct() {
    const [name,setName] = useState("");
    const [file_path,setPath] = useState("");
    const [description,setDescription] = useState("");
    const [price,setPrice] = useState("");

    async function addProduct()
    {
        const formData = new FormData();
        formData.append('file', file_path);
        formData.append('price', price);
        formData.append('name', name);
        formData.append('description', description);
        let result = await fetch("http://localhost:8000/api/addproduct",
        {
            method: 'POST',
            body: formData
        });
        console.warn(result);

        alert('Product Added to list');

    }


    return (
        <div>
            <Header />
            <div className='col-sm-6 offset-sm-3 bg-light p-3 mt-4'>
                <h1 className='text-center'>Add Products: </h1>
                <div className="form-group">
                    <label>Product Name</label>
                    <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} placeholder="Product Name" />
                </div>
                <div className="form-group">
                    <label>Product Image</label>
                    <input type="file" className="form-control" onChange={(e)=>setPath(e.target.files[0])} placeholder="Select Product Image" />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea  className="form-control" onChange={(e)=>setDescription(e.target.value)} placeholder="Enter details of product..."></textarea>
                </div>
                <div className="form-group">
                    <label>Product Price</label>
                    <input type="text" className="form-control" onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Price" />
                </div>
                <br />
                <button onClick={addProduct} className="btn btn-primary">Submit</button>

            </div>
        </div>
    )
}
export default Addproduct;