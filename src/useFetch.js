import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

const useFetch = (url) => {
  const token = useSelector((state) => state.token.token)
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${token.payload}`,
        'Content-Type': 'application/json',
        'Origin': '*'
      },

    }).then(res => {
      if (!res.ok) { // error coming back from server
        throw Error('could not fetch the data for that resource');
      }
      return res.json();
    })
      .then(data => {
        setIsPending(false);
        setData(data?.items || null);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          setIsPending(false);
          setError(err.message);
        }
      })
    // eslint-disable-next-line
  }, [])

  return { data, isPending, error };
}

export default useFetch;
