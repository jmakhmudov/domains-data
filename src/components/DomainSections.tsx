import { DomainInfo } from "../features/domain/domainType";
import DomainInfoSection from "../templates/DomainInfoSection";

interface SectionProps {
    domainInfo: DomainInfo
}

const DomainSections = ({ domainInfo }: SectionProps) => {

    return (
        <section className="domain-info">
            <h1>Information about <span>{domainInfo.domain}</span></h1>
            <section className="domain-info-section">
                <DomainInfoSection title="Web information">
                    <ul>
                        <li><strong>Domain:</strong> {domainInfo.web.domain}</li>
                        <li><strong>Rank:</strong> {domainInfo.web.rank}</li>
                        <li><strong>URL:</strong> <a href={domainInfo.web.url} target="_blank">{domainInfo.web.url}</a></li>
                        <li><strong>IP:</strong> {domainInfo.web.ip}</li>
                        <li><strong>Date:</strong> {domainInfo.web.date}</li>
                        <li><strong>Length:</strong> {domainInfo.web.length}</li>
                        <li><strong>Server:</strong> {domainInfo.web.server}</li>
                        <li><strong>Encoding:</strong> {domainInfo.web.encoding}</li>
                        <li><strong>Copyright:</strong> {domainInfo.web.copyright}</li>
                        <li><strong>Title:</strong> {domainInfo.web.title}</li>
                        <li><strong>Description:</strong> {domainInfo.web.description}</li>
                        <li><strong>Links:</strong> {domainInfo.web.links.join(', ')}</li>
                    </ul>
                </DomainInfoSection>

                <DomainInfoSection title="DNS information">
                    <ul>
                        <li><strong>Domain:</strong> {domainInfo.dns.domain}</li>
                        <li><strong>Adresses (IPVv4):</strong> {domainInfo.dns.a.join(', ')}</li>
                        {
                            domainInfo.dns.mx ? <li><strong>Mail Exchange:</strong> {domainInfo.dns.mx.join(', ')}</li> : <></>
                        }
                        <li><strong>Name Server:</strong> {domainInfo.dns.ns.join(', ')}</li>
                    </ul>
                </DomainInfoSection>

                <DomainInfoSection title="IP information">
                    <ul>
                        {
                            Object.keys(domainInfo.ipinfo).map((ip) => (
                                <li><strong>{ip}</strong>
                                    <ul>
                                        <li><strong>City:</strong> {domainInfo.ipinfo[ip].city}</li>
                                        <li><strong>Region:</strong> {domainInfo.ipinfo[ip].region}</li>
                                        <li><strong>Country:</strong> {domainInfo.ipinfo[ip].country}</li>
                                        <li><strong>Location:</strong> {domainInfo.ipinfo[ip].loc}</li>
                                        <li><strong>Timzone:</strong> {domainInfo.ipinfo[ip].timezone}</li>
                                        <li><strong>Autonomous System Number (ASN)</strong>
                                            <ul>
                                                <li><strong>ASN:</strong> {domainInfo.ipinfo[ip].asn.asn}</li>
                                                <li><strong>Name:</strong> {domainInfo.ipinfo[ip].asn.name}</li>
                                                <li><strong>Domain:</strong> {domainInfo.ipinfo[ip].asn.domain}</li>
                                                <li><strong>Route:</strong> {domainInfo.ipinfo[ip].asn.route}</li>
                                                <li><strong>Type:</strong> {domainInfo.ipinfo[ip].asn.type}</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            ))
                        }
                    </ul>
                </DomainInfoSection>
            </section>
        </section>
    )
}

export default DomainSections;