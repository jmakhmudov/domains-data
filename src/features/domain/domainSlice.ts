import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { DomainInfo } from './domainType';

const initialState: DomainInfo = {
    dns: {
        domain: '',
        a: [],
        aaaa: [],
        mx: [],
        ns: []
    },
    domain: "",
    ipinfo: {},
    related: {
        ip: [],
        asn: [],
        ns: [],
        mx: [],
        adsense: [],
        backlinks: [],
        redirects: []
    },
    web: {
        domain: '',
        rank: 0,
        url: '',
        ip: '',
        date: '',
        length: 0,
        server: '',
        encoding: '',
        copyright: '',
        adsense: '',
        title: '',
        description: '',
        links: []
    }
}

export const counterSlice = createSlice({
    name: 'domain',
    initialState,
    reducers: {
        setDomainInfo: (state, action: PayloadAction<DomainInfo>) => {
            return action.payload;
        },
    },
});

export const { setDomainInfo } = counterSlice.actions;

export default counterSlice.reducer;