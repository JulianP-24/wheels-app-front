const useHttp = () => {
    const post = async (url = '', data = {}) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'no-cors',
                body: JSON.stringify(data)
            });

            return response.json();
        } catch (e) {
            throw new Error(e);
        }
    };

    return {
        post,
    };
};

export default useHttp;