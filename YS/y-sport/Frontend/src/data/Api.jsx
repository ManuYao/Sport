import React, { useState, useEffect} from 'react'

export default function Api() {
    const [dataEvent, setDataEvent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost/sport/API.php');
                if (!response.ok){
                    throw new Error('La requête a échoué');
                }
                const data = await response.json();

                setDataEvent(Array.isArray(data) ? data :[]);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false)
            }
        };

        fetchData();

    []})
    console.log(data)
  return (
    <div>Api temp</div>
  )
}
