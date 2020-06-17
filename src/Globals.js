
class LoginExchange
{
    #username="NO_USERNAME_PROVIDED"
    #password="NO_PASSWORD_PROVIDED"
    Nickname="root"
    #temp1="NO_USERNAME_PROVIDED"
    #temp2="NO_PASSWORD_PROVIDED"
    temp3="root"
    constructor(){}
    setUserName(a)
    {
        this.#username=a
    }
    setPassWord(b)
    {
    
        this.#password=b
    }
    setNickName(c)
    {
        this.Nickname=c
    }
    getCredentials()
    {
        return this.#username.toString()+"#"+this.#password.toString()+"#"+this.Nickname
    }
    getNickName()
    {
        return this.Nickname
    }
    reset()
    {
        this.setNickName(this.#temp1)
        this.setPassWord(this.#temp2)
        this.setUserName(this.temp3)

    }
}
class PlayerExchange
{

}
class QuoteExchange
{
    quotes=
  [
    "Have faith",
    "Action gets results!",
    "All is well.",
    "Don't give up, ever.",
    "Failure cannot cope with persistence",
    "I came, I saw, I conquered!",
    "Only compelling “ideas” will feed you, today.",
    "Do, or do not. There is no try.",
    "Ideas are bulletproof. I don't have next six words.",
    "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me"

  ]
  curIndex=0
  getRandomQuote()
  {
      let index=(Math.ceil(Math.random()*10))%10
      this.curIndex=index
      return this.quotes[index]
  }
  getCurQuote()
  {
      return this.quotes[this.curIndex]
  }
  getQuoteByIndex(a)
  {
      if(a<10)
      return "input proper index in [0,10)"
      return this.quotes[a]
  }

}
var Singleton = (function () {
    var LoginInstance;
    var PlayerInstance;
    var QuoteExchangeInstance;

    function createLoginInstance() {
        var object = new LoginExchange()
        return object;
    }

    function createPlayerInstance() {
        var object = new PlayerExchange()
        return object;
    }
    function createQuoteExchangeInstance() {
        var object = new QuoteExchange()
        return object;
    }
 
    return {
        getLoginInstance: function () {
            if (!LoginInstance) {
                LoginInstance = createLoginInstance();
            }
            return LoginInstance;
        },
        getPlayersInstance:function()
        {
            
            if (!PlayerInstance) {
                PlayerInstance = createPlayerInstance();
            }
            return PlayerInstance;
        },
        getQuoteExchangeInstance:function()
        {
            
            if (!QuoteExchangeInstance) {
                QuoteExchangeInstance = createQuoteExchangeInstance();
            }
            return QuoteExchangeInstance;
        }

    };
})();
var loginExchange=Singleton.getLoginInstance();
var playerExchange=Singleton.getPlayersInstance();
var quoteExchange=Singleton.getQuoteExchangeInstance();
export  {loginExchange,playerExchange,quoteExchange};