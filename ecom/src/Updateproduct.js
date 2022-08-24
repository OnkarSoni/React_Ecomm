import Header from './Header';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function UpdateProduct() {
    const { id } = useParams();
    const [Data, setData] = useState([]);
    const [name,setName] = useState("");
    const [file_path,setPath] = useState("");
    const [description,setDescription] = useState("");
    const [price,setPrice] = useState("");


    const getData = async () => {
        let result = await fetch("http://localhost:8000/api/getproduct/"+id);
        result = await result.json();
        setData(result);
        setName(result.name);
        setPath(result.file_path);
        setDescription(result.description);
        setPrice(result.price);

    };
    useEffect(() => {
        getData();
    }, []);

    async function editproduct(id)
    {
        const formData = new FormData();
        formData.append('file', file_path);
        formData.append('price', price);
        formData.append('name', name);
        formData.append('description', description);
        let result = await fetch("http://127.0.0.1:8000/api/updproduct/"+id+"?_method=PUT",
        {
            method: 'POST',
            body: formData
        });
        console.warn(result);

        alert('Product Updated');
    }

    return (
        <div>
            <Header />
            <div className='col-sm-6 offset-sm-3 bg-light p-3 mt-4'>
                <h1 className='text-center'>Update Product </h1>
                <div className="form-group">
                    <label>Product Name</label>
                    <input type="text" onChange={(e)=>setName(e.target.value)}  className="form-control" defaultValue={Data.name} placeholder="Product Name" />
                </div>
                <div className="form-group">
                    <label>Product Image</label>
                    <img alt={"img"} src={"http://127.0.0.1:8000/" + Data.file_path} style={{ width: 60 }} />
                    <input type="file" onChange={(e)=>setPath(e.target.files[0])} className="form-control" defaultValue={Data.file_path} placeholder="Select Product Image" />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" onChange={(e)=>setDescription(e.target.value)} defaultValue={Data.description} placeholder="Enter details of product..."></textarea>
                </div>
                <div className="form-group">
                    <label>Product Price</label>
                    <input type="text" className="form-control" onChange={(e)=>setPrice(e.target.value)} defaultValue={Data.price} placeholder="Enter Price" />
                </div>
                <br />
                <div className="form-group text-center">
                <button  onClick={()=>editproduct(Data.id)} className="btn btn-primary ">Update</button>
                 </div>
                

            </div>
        </div>
    )
}
export default UpdateProduct;