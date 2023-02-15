import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  
  fetch(url, { 
    method: 'get', 
    headers: new Headers({
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
        'Origin': '*'
    }), 
  
});

  return { data, isPending, error };
}
 
export default useFetch;