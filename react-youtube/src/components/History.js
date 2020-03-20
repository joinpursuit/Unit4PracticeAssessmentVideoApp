import React, { Component } from 'react'

const History =({history})=> {

   const displayComment= history.map(list=>{
        return (<div className="comment" key={list.name}><h4>{list.name}</h4><p>{list.comment}</p></div>)
    }).reverse()
        return ( 
            <>
                 {displayComment}
            </>
        )
    }

export default History
