

// ContentWrapper component to wrap page content with title, subtitle, and description
export const ContentWrapper = ({ title, subtitle, description, hidetitle, children }) => {
    document.title = title; // Sætter dokumentets titel

    if (description) {
        const meta = document.querySelector('meta[name="desciption]');
        if (meta) meta.setAttribute("content", description); // Opdaterer meta-beskrivelsen, hvis den findes
    }
    return (
        <section>
            <div>
                {!hidetitle && <h1>{title}</h1>} {/* Vis titel, hvis hidetitle ikke er sand*/}
                {subtitle && <h2>{subtitle}</h2>} {/*} Vis undertitel, hvis den er angivet*/}
            </div>
            <div>{children}</div> {/*inhold der er pakket ind i ContentWrapper*/}
        </section>
)};