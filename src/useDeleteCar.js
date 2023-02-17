import { useState } from 'react';
import { useSelector } from 'react-redux'

const useDeleteCar = (id) => {
    const token = useSelector((state) => state.token.token)
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    fetch('/api/car/' + id, {
        method: 'DELETE',
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
            setData(data || null);
            setError(null);
        })
        .catch(err => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted')
            } else {
                // auto catches network / connection error
                setError(err.message);
            }
        })

    return { data, error };
}

export default useDeleteCar;