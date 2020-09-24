class Card
{
    constructor (s, v)
    {
        this.suit = s;
        this.value = v;
    };
    suit = 0;
    value = 0;
    blackjackValue = function ()
    {
        if (this.value === 1)
        {
            return 11;
        }
        else if (this.value >= 2 && this.value <= 10)
        {
            return this.value;
        }
        else
        {
            return 10;
        }
    };
    getId = function (dealerOrPlayer)
    {
        let str = dealerOrPlayer;
        switch (this.value) {
            case 1:
                str += 1;
                break;
            case 2:
                str += 2;
                break;
            case 3:
                str += 3;
                break;
            case 4:
                str += 4;
                break;
            case 5:
                str += 5;
                break;
            case 6:
                str += 6;
                break;
            case 7:
                str += 7;
                break;
            case 8:
                str += 8;
                break;
            case 9:
                str += 9;
                break;
            case 10:
                str += "T";
                break;
            case 11:
                str += "J";
                break;
            case 12:
                str += "Q";
                break;
            case 13:
                str += "K";
                break;
            default:
                break;
        }
        switch (this.suit) {
            case 0:
                str += "C";
                break;
            case 1:
                str += "D";
                break;
            case 2:
                str += "H";
                break;
            case 3:
                str += "S";
                break;
            default:
                break;
        }
        return str;
    }
}