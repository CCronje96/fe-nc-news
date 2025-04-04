function ErrorComponent({ component, error }) {
    let errorMessage = `Invalid Request - ${component || "Path"} Not Found`;

    if (error && typeof error === 'object') {
        if (error.status === 404) {
            errorMessage = `Invalid Request - ${component || "Path"} Not Found`;
        } else if (error.status === 400) {
            errorMessage = "Bad Request";
        } else if (error.message) {
            errorMessage = `Invalid Request - ${error.message}`;
        }
    } else if (typeof error === 'string') {
        errorMessage = `${error}`;
    }

    return (
        <div className="error-container">
            <p className="error-message">{errorMessage}</p>
        </div>
    );
}

export default ErrorComponent;