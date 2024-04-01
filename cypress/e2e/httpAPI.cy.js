describe('Testy API Httpbin', () => {
    // Test 1: Żądanie GET z parametrami zapytania
    it('Żądanie GET z parametrami zapytania', () => {
        cy.request({
            method: 'GET',
            url: 'https://httpbin.org/get',
            qs: { test: '123' }
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.args).to.have.property('test', '123');
        });
    });

    // Test 2: Żądanie POST z ciałem w formacie JSON
    it('Żądanie POST z ciałem w formacie JSON', () => {
        const requestBody = { key: 'value' };
        cy.request({
            method: 'POST',
            url: 'https://httpbin.org/post',
            body: requestBody,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.json).to.deep.equal(requestBody);
        });
    });

    // Test 3: Wysyłanie i sprawdzanie niestandardowych nagłówków
    it('Wysyłanie i sprawdzanie niestandardowych nagłówków', () => {
        const customHeaders = {
            'My-Custom-Header': 'CustomValue',
            'User-Agent': 'MyTestAgent'
        };
        cy.request({
            method: 'GET',
            url: 'https://httpbin.org/headers',
            headers: customHeaders
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.headers).to.have.property('My-Custom-Header', 'CustomValue');
            expect(response.body.headers).to.have.property('User-Agent', 'MyTestAgent');
        });
    });

    // Test 4: Żądanie PUT
    it('Żądanie PUT', () => {
        cy.request('PUT', 'https://httpbin.org/put', { key: 'new value' }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.json).to.deep.equal({ key: 'new value' });
        });
    });

    // Test 5: Żądanie DELETE
    it('Żądanie DELETE', () => {
        cy.request('DELETE', 'https://httpbin.org/delete').then(response => {
            expect(response.status).to.eq(200);
        });
    });

    // Test 6: Żądanie PATCH
    it('Żądanie PATCH', () => {
        cy.request('PATCH', 'https://httpbin.org/patch', { key: 'patched value' }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.json).to.deep.equal({ key: 'patched value' });
        });
    });

    // Test 7: Wysyłanie losowych parametrów zapytania
    it('Wysyłanie losowych parametrów zapytania', () => {
        const randomValue = Math.random().toString();
        cy.request({
            method: 'GET',
            url: 'https://httpbin.org/get',
            qs: { random: randomValue }
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.args).to.have.property('random', randomValue);
        });
    });

    // Test 8: Sprawdzanie czasu odpowiedzi
    it('Sprawdzanie czasu odpowiedzi', () => {
        cy.request('GET', 'https://httpbin.org/delay/1').then(response => {
            expect(response.status).to.eq(200);
            assert.isBelow(response.duration, 2000); // Zakładamy, że odpowiedź powinna nadejść w ciągu 2000ms
        });
    });

    // Test 9: Sprawdzanie statusu 404
    it('Sprawdzanie statusu 404', () => {
        cy.request({
            method: 'GET',
            url: 'https://httpbin.org/status/404',
            failOnStatusCode: false // aby Cypress nie traktował odpowiedzi 404 jako błędu testu
        }).then(response => {
            expect(response.status).to.eq(404);
        });
    });

    // Test 10: Kodowanie Base64
    it('Kodowanie Base64', () => {
        const text = 'hello world';
        const expectedBase64 = 'aGVsbG8gd29ybGQ=';
        cy.request('GET', `https://httpbin.org/base64/${expectedBase64}`).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body).to.eq(text);
        });
    });
});
