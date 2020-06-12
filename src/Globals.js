
class LoginExchange
{
    #username="NO_USERNAME_PROVIDED"
    #password="NO_PASSWORD_PROVIDED"
    Nickname="COME_AND_SEE_MY_*"
    #temp1="NO_USERNAME_PROVIDED"
    #temp2="NO_PASSWORD_PROVIDED"
    temp3="COME_AND_SEE_MY_*"
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
var Singleton = (function () {
    var LoginInstance;
    var PlayerInstance;

    function createLoginInstance() {
        var object = new LoginExchange()
        return object;
    }

    function createPlayerInstance() {
        var object = new PlayerExchange()
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
        }
    };
})();
var loginExchange=Singleton.getLoginInstance();
var playerExchange=Singleton.getPlayersInstance();
export  {loginExchange,playerExchange};