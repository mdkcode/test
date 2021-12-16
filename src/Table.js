import React from 'react'
import axios from "axios";
// import JsonData from './data.json'

const url = "https://61b99c0538f69a0017ce6186.mockapi.io/books/";

export default function Table() {
  const [book, setBook] = React.useState(null);

  React.useEffect(() => {
    axios.get(url).then((response) => {
      setBook(response.data);
    });
  }, []);
  if (!book) return null;
  const DisplayData=book.map(
    (info)=>{
        return(
            <tr>
                <td>{info.id}</td>
                <td>{info.name}</td>
                <td>{info.book}</td>
                <td>{info.publishing_house}</td>
            </tr>
        )});

  return (
    <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Author</th>
                    <th>Book</th>
                    <th>Publishing house</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}           
                </tbody>
            </table>   
        </div>
  );
    
}