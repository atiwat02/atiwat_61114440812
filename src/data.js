import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Data() {
    const [datas, setdatas] = useState(0)
    let tt = []
    useEffect(() => {
        getdata()
    }, [])
    const getdata = () => {
        axios.get("http://localhost:5000/api/data").then(response => {
            setdatas(response.data.products)
            tt.push(response.data.products)
            console.log(tt)
        })



    }

    return (
        <div>
            <h1 style={{
                margin: "auto",
                width: "50%",
                
                padding: "10px"
            }}>รายการร้านค้าและสินค้า</h1>
            {datas.map((ttt, idx) => (

                <div style={{
                    margin: "auto",
                    width: "50%",
                    border: "3px solid green",
                    padding: "10px"
                }}>
                    <img border="0" alt="W3Schools" src={ttt.image} width="100" height="250" width="250"></img>
                    <h2>nameStore: {ttt.nameStore}</h2>
                    <h4>number(จำนวน) : {ttt.number} </h4>
                    <h5>Price : {ttt.price} บาท</h5>
                    <p>Brand : {ttt.brand}</p>

                </div>



            ))}

        </div>
    )
}
