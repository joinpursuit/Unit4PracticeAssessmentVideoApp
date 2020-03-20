import React, { Component } from 'react'

const History =({history})=> {

   const displayComment= history.map(list=>{
        return (<div className="comment" key={list.name}><h3>{list.name}</h3><p>{list.comment}</p></div>)
    })
        return ( 
            <>
                 {displayComment}
            </>
        )
    }

export default History
