import axios from 'axios';
import { useState, useEffect } from 'react';

/*----------  DATA BASE  ----------*/

const mongoApi = axios.create({
  baseURL: 'http://localhost:4000/api'
});

export function useAxios() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            mongoApi.get('/user/')
                .then(response => {
                    setData(response.data);
                }).catch(error => {
                    setError(error);
                }).finally(() => {
                    setLoading(false);
                });
        };

        fetchData();
    }, []);

    return { data, loading, error };
}

/*----------  POST  ----------*/

export const createUser = async (newUser) => {
  try {
    const response = await mongoApi.post('/user/', newUser);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

/*----------  LIST CATEGORY  ----------*/

export function useAxiosListCategory() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://opentdb.com/api_category.php');
            //console.log("axios:", response);
            setData(response.data.trivia_categories);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, fetchData };
}

/*----------  REQUEST TRIVIA  ----------*/

const quizTrivia = axios.create({
    baseURL: 'https://opentdb.com'
});

export function useAxiosTrivia() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async (targetRequest) => {
        //if (loading) return; // Evita múltiples llamadas si ya se está cargando
        try {
            const response = await quizTrivia.get(targetRequest);
            setData(response.data.results);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, fetchData };
}
