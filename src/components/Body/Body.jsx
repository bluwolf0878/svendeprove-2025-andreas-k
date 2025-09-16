


// A simple main component that wraps its children in a <main> HTML element.
export const Body = ({children, className}) => {
    return (
        <main className={className}>
            {children}
        </main>
    )
}