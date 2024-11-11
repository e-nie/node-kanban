function cardUpdateById(req, res) {
    const card = req.body;
    const cardId = req.params.cardId;
    // cards = cards.map(el => el.id === cardId ? { ...el, ...card } : el);
    //cards = cards.map(el => el.id === cardId ? { ...card, id: el.id } : el);//explicitly sets the id to the original el.id, which can be useful if you want to ensure the id is not changed by the properties in card.ard = req.body;
   //2nd variant from me
    //cards.push({ id: Math.random().toString(), ...card });
    res.send('Card updated');
}

module.exports = cardUpdateById;
