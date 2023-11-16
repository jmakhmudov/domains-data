interface TemplateProps {
    children: React.ReactNode,
    title: string,
}

const DomainInfoSection: React.FC<TemplateProps> = ({ children, title }) => {
    return (
        <section className="domain-section">
            <h3>{title}</h3>
            {children}
        </section>
    )
}

export default DomainInfoSection;