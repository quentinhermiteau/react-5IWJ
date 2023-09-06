export default () => {
    const values = [1, 2, 3, 4, 5];

    const Option = ({data}) => (
        <option value={data}>{data}</option>
    )

    const Select = ({values, color}) => (
        <select className={`borderbg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-${color}-700 dark:border-${color}-600 dark:placeholder-${color}-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}>
            {values.map(value => (
                <Option data={value} />
            ))}
        </select>
    )

    const CardStatus = ({children}) => (
        <div className="card-status">
            {children}
        </div>
    )

    const CancelStatus = () => (
        <>
            <icon>cancel</icon>
            <span>cancel</span>
        </>
    )

    const Card = ({children, title, content, footer}) => (
        <div className="card">
            {children}
            {title}
            {content}
            {footer}
        </div>
    )

    const Title = () => (
        <div className="title">title</div>
    )

    const Content = () => (
        <div className="title">content</div>
    )

    const Footer = () => (
        <div className="title">footer</div>
    )

    return (
        <>
            <Select values={values} color="red" />
            <Select values={values} color="gray" />
            <CardStatus>
                <CancelStatus />
            </CardStatus>
            <Card title={<Title />} content={<Content />} footer={<Footer />}>
                <div>Natural children</div>
            </Card>
        </>
    )
}