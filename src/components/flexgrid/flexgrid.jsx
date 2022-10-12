import "./flexgrid.css";

const FlexGrid = ({ title, children, maxWidth}) => {
    return(
        <section className="flexgrid">
            <header className="flexgrid__header">
                <h2>{title}</h2>
            </header>

            <div className="flexgrid__inner" style={{'--max-width': maxWidth || "100%"}}>
                {children}
            </div>
        </section>
    );
}

export default FlexGrid;