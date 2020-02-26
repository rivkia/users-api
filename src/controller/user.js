// const http = require('http');
import https  from 'https';

/**
 * getJSON:  RESTful GET request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */

const getUsers = (onResult) => {
    const options = {
        hostname: 'www.json-generator.com',
        port: 443,
        path: '/api/json/get/cqMvJvFIzm?indent=2',
        method: 'GET'
    }


    console.log('rest::getJSON');
    // const port = options.port == 443 ? https : http;
    const port = https;
    let output = '';

    const req = port.request(options, (res) => {
        console.log(`${options.host} : ${res.statusCode}`);
        res.setEncoding('utf8');

        res.on('data', (chunk) => {
            output += chunk;
        });

        res.on('end', () => {
            let obj = JSON.parse(output);

            onResult(res.statusCode, obj);
        });
    });

    req.on('error', (err) => {
        // res.send('error: ' + err.message);
    });

    req.end();
};


export default { getUsers };