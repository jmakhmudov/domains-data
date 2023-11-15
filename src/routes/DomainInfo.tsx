import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getDomainData } from "../helpers/getDomainData";
import { useSelector, useDispatch } from 'react-redux'
import { setDomainInfo } from "../features/domain/domainSlice";
import { RootState } from "../store";
import Header from "../components/Header";

const DomainInfo = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query: string = queryParams.get('query') as string;

    const domainInfo = useSelector((state: RootState) => state.domain);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const domainData = await getDomainData(query);
            dispatch(setDomainInfo(domainData));
        };

        fetchData();
    }, [query])
    return (
        <>
            <Header />
            {domainInfo.domain}
        </>
    );
}

export default DomainInfo;