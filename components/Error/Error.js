class Error {

    render() {
        const html = `
        <div class="error-container">
            <div class="error-message">
                <h3>Net dostupa</h3>
                <p>Try to access later</p>
            </div>
        </div>
        `;
        
        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error();