const request = require('request');

const cuApiUrl = 'https://ucli-ch-tst-web1.unionbank.com/cu-connect/';

const authToken =
    'Basic ZGVmYXVsdC9zdnIkU3lzT0FPVXNyOk1UQXVNVFF4TGpBdU9URWdJQ0FnS' +
    'UNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JhTjMwTXR5RlVENzkrOStuZXdyRWdUMWZP' +
    'YURkdlp3Z0ZUd0xWeDBPam5uL2NpcVZHL09Wb1NaQzB1STJoaHo5bWdnbXB6N0Z' +
    'TL01FZU9PQWxJclQ4b0t1WUZ2TlovdVFaeEdpQ01zRVkwaTZ6cVJhOWh5OHJJSD' +
    'ZLSUxFMHlIT0p6VmYvUVBkcHZnd0g3TnJMT0V1NnZ4WFA5a1JXbElZVVFXeW9XR' +
    '0d2SWNvWTlzNEx1VDZwdWU4aUdvK28vUDVkM29ZcS9GU1pUYU10VzY5a29KbEZK' +
    'MEpYa2R4eHJaUmZxOFNCN2hOQWZnUnk2azF5Lzl6R3JrQXh1aEpFY1A2VHE4Qll' +
    'aYkZVb1Y1YXViYWhSM0piU2YwZlJVT2lOb1RxcHljZjkrVWFJVm1CckJ5L09Jc3' +
    'JHVHQwQnM2WXlMdkdWZFBLejlWSXhNKzJwdzAwekphNjAzeXF6eTlzZVVjMQ==';

exports.callCuApi = function (resource, query, body, resp, callback) {
    request(
        {
            url: cuApiUrl + resource,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': authToken
            },
            qs: query,
            body: body
        },
        function (error, response, body) {
            resp.json(callback(JSON.parse(body)));
        }
    );
}