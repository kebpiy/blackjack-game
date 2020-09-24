let deck =
{
    // holds deck of cards
    list: [],

    // constructor
    Deck: function()
    {
        this.list = [];
        for (let i = 0; i <= 3; i++)
        {
            for (let j = 1; j <= 13; j++)
            {
                let c = new Card(i, j);
                this.list.push(c);
            }
        }
    },

    // shuffles deck
    shuffle: function()
    {
        for (let i = 0; i < this.list.length; i++)
        {
            let rand = Math.floor(Math.random() * 52);
            this.list.splice(rand, 0, this.list.pop());
        }
    }
};