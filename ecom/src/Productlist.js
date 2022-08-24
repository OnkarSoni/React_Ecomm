import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from 'react-router-dom';


function Productlist() {
    const [Data, setData] = useState([]);

    const getData = async () => {
        let result = await fetch("http://localhost:8000/api/getlist");
        result = await result.json();
        setData(result);
    };
    useEffect(() => {
        getData();
    }, []);

    // console.warn("data", Data);
    async function deleteOpeation(id) {
        let result = await fetch("http://127.0.0.1:8000/api/delete/" + id,
            {
                method: 'DELETE'
            });
        result = await result.json();
        console.warn(result);
        getData();
    }
    return (
        <div>
            <Header />
            <div className='col-sm-10 offset-sm-1 bg-light p-3 mt-4'>
                <h1 className='text-center'>User Sign In</h1>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Operation</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            Data.map((item) =>
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td><img alt={"img"} style={{ width: 50 }} src={"http://localhost:8000/" + item.file_path} /></td>
                                    <td>{item.description}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        <button onClick={() => { deleteOpeation(item.id) }} className="btn btn-sm btn-danger">Del</button>
                                        &#160;<Link to={"/upd/" + item.id}><span className="btn btn-sm btn-success">edit</span></Link>
                                    
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </Table>
            </div>
        </div>
    )
}
export default Productlist;