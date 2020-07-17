
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
function Element(user,msg)
{
    

    return (
        <Card >
      <CardContent>
        <Typography className="cardUser" variant="h5" component="h5">
          {user}
        </Typography>
        <Typography variant="body2" component="p">
          {msg}
        </Typography>
      </CardContent>
    </Card>
    )
    return <li>{`${user} says`} <br/> {`${msg}`}</li>
    
}

function MessageBubble(props)
{

    var listo=props.messages
    var list2=[]
    listo.forEach(pair=>{
    for(const item in pair){
    list2.push(Element(item,pair[item]))
    }
    })
    return(
    <div>
        {list2} 
        </div>
    )
}
export default MessageBubble