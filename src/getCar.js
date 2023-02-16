import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

const useCar = (id) => {
    const token = useSelector((state) => state.token.token)
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api/car/' + id, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token.payload}`,
            },
        }).then(res => {
            if (!res.ok) { // error coming back from server
                throw Error('could not fetch the data for that resource');
            }
            return res.json();
        })
            .then(data => {
                // console.log({ data })
                setIsPending(false);
                setData(data || null);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    // auto catches network / connection error
                    setIsPending(false);
                    setError(err.message);
                }
            })
    }, [])

    return { data, isPending, error };
}

export default useCar;
