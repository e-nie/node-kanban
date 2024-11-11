function cardDelete(req, res)  {
    //we don't need this logic anymore, because we delete cards from the database now
    // const cardId = req.params.cardId;
    // cards = cards.filter(card => card.id !== cardId);
    res.send('Card deleted again');
}

module.exports=cardDelete;
