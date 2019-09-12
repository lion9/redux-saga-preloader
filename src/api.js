const fetchData = async () => {
    try {
        let url = 'https://cors-anywhere.herokuapp.com/https://my-json-server.typicode.com/lion9/redux-saga-db/testArray';
        let response = await fetch(url);
        let data = await response.json();
        return data.join(' ');
    } catch (e) {
        console.log(e);
    }
};


export default fetchData;
