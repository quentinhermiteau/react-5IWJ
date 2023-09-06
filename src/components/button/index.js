export default ({children, color}) => (
    <button className={`bg-${color}-500 hover:bg-${color}-700 text-white py-2 px-4 rounded-full`}>
        {children}
    </button>
)