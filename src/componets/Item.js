import React, { useEffect, useState } from 'react'

const Item = () => {

    const [data, setdata]=useState([])

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=> res.json())
        .then(datas=> setdata(datas))
    },[])

  return (
    <>
    <div className='itemDiv'>
            {
                data && data.map((item)=>{
                    return <>
                        <div className='itemdivlist'>

                            <div className='imgdiv'>
                                <img src={item.image} alt="" />
                            </div>
                            <p>{item.title}</p>
                            <p>{item.category}</p>
                            <p>{item.price}</p>

                        </div>
                    </>
                })
            }
    </div>

    </>
  )
}

export default Item
 