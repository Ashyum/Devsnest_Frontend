const Container = () => {
    return (
        <div className="container" style={{minHeight: "100px"}}>
            <div className="card">
                <h1>Pizza</h1>
                <h2>You have consumed 56 cals today</h2>
            </div>
            <div className="card">
                <h1>Burger</h1>
                <h2>You have consumed 88 cals today</h2>
            </div>
            <div className="card">
                <h1>Apple</h1>
                <h2>You have consumed 99 cals today</h2>
            </div>
            <div className="card">
                <h1>Orange</h1>
                <h2>You have consumed 75 cals today</h2>
            </div>
            <div className="card">
                <h1>Dosa</h1>
                <h2>You have consumed 66 cals today</h2>
            </div>
        </div>
    );
};

export default Container;