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
        })
        .catch((error) => {
            console.log(error);
        });
}

