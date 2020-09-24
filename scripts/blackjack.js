let blackjack =
{
    firstGame: true,
    Blackjack: function ()
    {
        console.log("Game starting...");
        if (this.firstGame)
        {
            document.getElementById("startBtn").classList.add("hidden");
            document.getElementById("game").classList.remove("hidden");
        }
        this.firstGame = false;
        this.canHit = false;
        this.canStand = false;
        deck.Deck();
        deck.shuffle();
        console.log(deck.list);
        this.canPressDealBtn = true;
        document.getElementById("dealerScore").innerText = this.dealerValue;
        document.getElementById("playerScore").innerText = this.playerValue;
    },
    dealerHand: [],
    playerHand: [],
    dealerValue: 0,
    playerValue: 0,
    dealPlayer: function ()
    {
        this.playerHand.push(deck.list.pop());
        this.playerValue = 0;
        for (const i of this.playerHand)
        {
            this.playerValue += i.blackjackValue();
            document.getElementById("playerScore").innerText = this.playerValue;
            document.getElementById(i.getId("P")).classList.remove("hidden");
        }
    },
    dealDealer: function ()
    {
        this.dealerHand.push(deck.list.pop());
        this.dealerValue = 0;
        for (const i of this.dealerHand)
        {
            this.dealerValue += i.blackjackValue();
            document.getElementById("dealerScore").innerText = this.dealerValue;
            document.getElementById(i.getId("D")).classList.remove("hidden");
        }
    },
    canPressDealBtn: true,
    dealBtn: function ()
    {
        this.canHit = true;
        this.canStand = true;
        if (this.canPressDealBtn)
        {
            this.dealPlayer();
            this.dealPlayer();
            this.dealDealer();
            document.getElementById("DBACK").classList.remove("hidden");
            this.canPressDealBtn = false;
            if (this.playerValue === 21)
            {
                this.win();
            }
        }
    },
    canHit: true,
    canStand: true,
    hit: function ()
    {
        if (this.canHit)
        {
            this.dealPlayer();
            if (this.playerValue === 21)
            {
                this.win();
                this.canStand = false;
                this.canHit = false;
            }
            else if (this.playerValue > 21)
            {
                this.bust();
                this.canHit = false;
                this.canStand = false;
            }
        }
    },
    stand: function ()
    {
        if (this.canStand)
        {
            document.getElementById("DBACK").classList.add("hidden");
            while (this.dealerValue < 17)
            {
                this.dealDealer();
            }
            if (this.dealerValue === this.playerValue)
            {
                this.tie();
            }
            else if (this.dealerValue === 21)
            {
                this.bust();
            }
            else if (this.dealerValue > 21)
            {
                this.win();
            }
            else if (this.dealerValue > this.playerValue)
            {
                this.bust();
            }
            else
            {
                this.win();
            }
            this.canStand = false;
            this.canHit = false;
        }
    },
    win: function ()
    {
        document.getElementById("winMessage").classList.remove("hidden");
        document.getElementById("playAgainBtn").classList.remove("hidden");
    },
    bust: function ()
    {
        document.getElementById("lossMessage").classList.remove("hidden");
        document.getElementById("playAgainBtn").classList.remove("hidden");
    },
    tie: function ()
    {
        document.getElementById("tieMessage").classList.remove("hidden");
        document.getElementById("playAgainBtn").classList.remove("hidden");
    },
    newGame: function ()
    {
        this.reHide("winMessage");
        this.reHide("lossMessage");
        this.reHide("tieMessage");
        this.reHide("playAgainBtn");
        this.reHide("DBACK");
        for (const i of this.playerHand)
        {
            document.getElementById(i.getId("P")).classList.add("hidden");
        }
        for (const i of this.dealerHand)
        {
            document.getElementById(i.getId("D")).classList.add("hidden");
        }
        this.playerHand = [];
        this.dealerHand = [];
        this.playerValue = 0;
        this.dealerValue = 0;
        this.Blackjack();
    },
    reHide: function (id) // prevents adding multiple of the same class
    {
        if (!document.getElementById(id).classList.contains("hidden"))
        {
            document.getElementById(id).classList.add("hidden");
        }
    }
}