interface DNSInfo {
    domain: string;
    a: string[];
    aaaa: string[];
    mx: string[];
    ns: string[];
}

interface IPInfo {
    city: string;
    region: string;
    country: string;
    loc: string;
    postal: string;
    timezone: string;
    asn: {
        asn: string;
        name: string;
        domain: string;
        route: string;
        type: string;
    };
}

interface WebInfo {
    domain: string;
    rank: number;
    url: string;
    ip: string;
    date: string;
    length: number;
    server: string;
    encoding: string;
    copyright: string;
    adsense: string;
    title: string;
    description: string;
    links: string[];
}

interface RelatedInfo {
    ip: { value: string; count: number }[];
    asn: { value: string; count: number }[];
    ns: { value: string; count: number }[];
    mx: { value: string; count: number }[];
    adsense: { value: string; count: number }[];
    backlinks: { value: string; count: number }[];
    redirects: { value: string; count: number }[];
}

interface DomainInfo {
    domain: string;
    web: WebInfo;
    dns: DNSInfo;
    ipinfo: Record<string, IPInfo>;
    related: RelatedInfo;
}

export type {DNSInfo, IPInfo, WebInfo, RelatedInfo, DomainInfo};
