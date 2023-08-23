const ErrorMessage = ({ error }) => {
    if (!error) return null;

    return (
        <div className="bg-red-500 text-white p-4 rounded-md shadow-md">
            {error}
        </div>
    );
};

export default ErrorMessage;
