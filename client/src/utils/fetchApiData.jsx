import axios from "axios";

const host = 'http://localhost:3001/api';
export const createEmployee = (employeeInfos) => {
    const data = JSON.stringify(employeeInfos);
    const config = {
        method: 'post',
        url: `${host}/employee/create`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });

}

export const adminLogin = (adminInfos) => {
    const data = JSON.stringify({
        adminInfos
    });
    const config = {
        method: 'post',
        url: `${host}/login`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    axios.request(config)
        .then((response) => {
            const result = JSON.stringify(response.data);
            console.log(result)
        })
        .catch((error) => {
            console.log(error);
        });

}

export const displayEmployeesList = (setUserData) => {
    let data = '';
    const config = {
        method: 'get',
        url: 'http://localhost:3001/api/employeesList',
        headers: {},
        data: data
    };

    axios.request(config)
        .then((response) => {
            setUserData(response.data)
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
}


export const deleteOneEmployee = (id) => {
    let data = '';

    const config = {
        method: 'delete',
        url: `${host}/employee/${id}`,
        headers: {},
        data: data
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });

}

export const updateOneEmployee = (employeeInfos) => {

    const data = JSON.stringify({
        employeeInfos
    });

    let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `${host}/employee/${employeeInfos._id}`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
}

