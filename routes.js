function routes(app) {
    let cards = [
        { id: '1', name: 'CARDS', status: 'todo', priority: 1 },
        { id: '2', name: 'CARDS1', status: 'todo', priority: 2 },
        { id: '3', name: 'CARDS2', status: 'progress', priority: 3 },
        { id: '4', name: 'CARDS3', status: 'progress', priority: 4 },
    ];

    app.get('/', (req, res) => {
        res.send('Hello My  World!');//если кто-то отправит запрос на этот адрес, то мы отправим ответ 'Hello World!'
    });

    app.get('/card', (req, res) => {
        res.send(cards);
    });

    app.delete('/card/:cardId', (req, res) => {
        const cardId = req.params.cardId;
        cards = cards.filter(card => card.id !== cardId);
        res.send(cards);
    });

    app.post('/card', (req, res) => {
        const card = req.body;
        cards.push({ id: Math.random().toString(), ...card });
        res.send('Card created');
    });

    app.patch('/card/:cardId', (req, res) => {
        const card = req.body;
        const cardId = req.params.cardId;
        // cards = cards.map(el => el.id === cardId ? { ...el, ...card } : el);
        cards = cards.map(el => el.id === cardId ? { ...card, id: el.id } : el);//explicitly sets the id to the original el.id, which can be useful if you want to ensure the id is not changed by the properties in card.
        res.send('Card updated');
    });
}

module.exports = routes;
