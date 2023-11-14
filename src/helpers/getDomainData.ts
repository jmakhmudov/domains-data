import axios from "axios";

const getDomainData = async (domain: string) => {
    const res = await axios.get(`https://host.io/api/full/${domain}?token=${import.meta.env.VITE_REACT_APP_API_TOKEN}`);

    return res.data;
}

export { getDomainData };