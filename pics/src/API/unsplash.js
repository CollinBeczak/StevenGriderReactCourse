import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID PG7vGaM6g2qhIGt24Rr1hMNuxo3QAocmLATRirLtx_0'
    }
});