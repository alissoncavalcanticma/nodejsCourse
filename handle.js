module.exports = (request, response) => {

    let html = `
        <!DOCTYPE "html">
        <html>
            <head>
                <title>teste NodeJS render html</title>
            </head>
            <body>
            <h1>Testando aplicação 1</h1>
            </body>
        </html>
    `;
    response.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
    response.write(html);
    response.end();
}