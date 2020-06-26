
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
    "Action gets results!",
    "Don't give up, ever",
    "Failure cannot cope with persistence",
    "Only compelling ideas will feed you, today",
    "Do, or do not. There is no try",
    "Stand out, be original",
    "An idea is salvation by imagination",
    "The man who has no imagination has no wings",
    "Imagination creates reality",
    "Not all those who wander are lost",
    "Don't be afraid to explore everything",
    "The sharpest minds are never afraid to search far and wide",
    "You got to be the very best like no one ever was",
    "Failure is an option here. If things are not failing, you are not innovating enough",
    "A man's dream will never die",
    "Aspire to inspire before we expire",
    "Whatever you do, do it well",
    "Tough times never last but tough people do",
    "If you tell the truth you don’t have to remember anything",
    "Have enough courage to start and enough heart to finish",
    "I could agree with you but then we’d both be wrong",
    "Never let your emotions overpower your intelligence",
    "Determine your priorities and focus on them",
    "What consumes your mind controls your life",
    "May your choices reflect your hopes, not your fears",
    "White is not always light and black is not always dark",
    "Change the game, don’t let the game change you",
    "When words fail, music speaks"
    
   

  ]
  curIndex=0
  getRandomQuote()
  {
      let index=(Math.ceil(Math.random()*10))%10
      this.curIndex=index
      localStorage.setItem("curQuote",this.quotes[this.curIndex])
      return this.quotes[index]
  }
  getCurQuote()
  {
    //   return this.quotes[this.curIndex]
    return localStorage.getItem("curQuote")
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