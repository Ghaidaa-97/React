import React,{useState , useEffect} from 'react';
import './App.css';

export default function App() {

  const [resourceType , setResourceType]=useState('Posts')
  const [items , setItems]=useState([])

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  .then(response => response.json())
  .then(json => setItems(json))
  },[resourceType]
  )
  return (
    <>
    <div>
      <button onClick={()=>setResourceType('Posts')}>Posts</button>
      <button onClick={()=>setResourceType('Users')}>Users</button>
      <button onClick={()=>setResourceType('Comments')}>Comments</button>
    </div>
    <h1>{resourceType}</h1>
    {items.map(item=>{
    return <pre>{JSON.stringify(item)}</pre>
    })}
    </>
  );
}