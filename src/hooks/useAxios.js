import React, { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let newUrl = url + options
        const getData = async () => {
            if (options) {
                console.log("OPTIONS 1");
                try {
                    const res = await axios.get(newUrl);
                    //const jsonRes = await res.json();
                    setResponse(res);
                } catch (error) {
                    setError(error);
                }
                setIsLoading(false);
            } else {
                try {
                    const res = await axios.get(url);
                    //const jsonRes = await res.json();
                    setResponse(res);
                } catch (error) {
                    setError(error);
                }
                setIsLoading(false);
            }
        }
        getData();
    }, [options])

    const reFetch = (url, option) => {
        let newUrl = url + option
        const getData = async () => {
            if (option) {
                console.log("OPTIONS 2");
                try {
                    const res = await axios.get(newUrl);
                    //const jsonRes = await res.json();
                    setResponse(res);
                } catch (error) {
                    setError(error);
                }
                setIsLoading(false);
            } else {
                console.log('OPTIONS 3');
                try {
                    const res = await axios.get(url);
                    //const jsonRes = await res.json();
                    setResponse(res);
                } catch (error) {
                    setError(error);
                }
                setIsLoading(false);
            }
        }
        getData();
    }

    return { response, error, isLoading, reFetch };
}

export default useAxios;