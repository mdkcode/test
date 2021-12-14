import React from 'react'
import JsonData from './data.json'

 function Table(){
    const DisplayData=JsonData.map((info)=>{
            return(
                <tr>
                    <td>{info.id}</td>
                    <td>{info.name}</td>
                    <td>{info.book}</td>
                    <td>{info.publishing_house}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <table class="table">
                <thead>
                    <tr>
                    <th>NO</th>
                    <th>Author</th>
                    <th>Book Title</th>
                    <th>Publishing House</th>
                    </tr>
                </thead>
                <tbody>         
                    {DisplayData}         
                </tbody>
            </table>
             
        </div>
    )
 }
 
 export default Table;