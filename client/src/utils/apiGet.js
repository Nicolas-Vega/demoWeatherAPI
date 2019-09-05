const urlPath = "http://localhost:3001/v1/"

const get = (url) =>{
    return fetch(url)
        .then(res => res.json())
        .then((data) => {
            return (data);
        })
        .catch(console.log)
};

const getLocation = () => {return get(`${urlPath}location`)};
const getCurrent = (city) => {return get(`${urlPath}current${city ? `/${city}` : '' }`)};
const getForecast = (city) => {return get(`${urlPath}forecast${city ? `/${city}` : '' }`)};

export {
    get,
    getLocation,
    getCurrent,
    getForecast
};