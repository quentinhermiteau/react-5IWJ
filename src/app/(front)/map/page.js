export default () => {
    const values = [1, 2, 3, 4, 5];

    return (
        <>
            <select>
                {values.map(value => (
                    <option value={value}>{value}</option>
                ))}
            </select>
        </>
    )
}