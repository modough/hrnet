import axios from "axios";


const host = 'http://localhost:3001/api';
export const createEmployee = (employeeInfos) => {
    const { firstName, lastName, birthDate, startDate, street, city, state, zipcode, department } = employeeInfos;
    const data = JSON.stringify({
        "firstName": firstName,
        "lastName": lastName,
        "birthDate": birthDate,
        "startDate": startDate,
        "street": street,
        "city": city,
        "state": state,
        "zipcode": zipcode,
        "department": department
    });
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
    const { email, password } = adminInfos
    const data = JSON.stringify({
        "email": email,
        "password": password
    });
    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${host}/login`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    axios.request(config)
        .then((response) => {
            const result = JSON.stringify(response.data);
            localStorage.setItem('loginResult', result)
        })
        .catch((error) => {
            console.log(error);
        });

}

