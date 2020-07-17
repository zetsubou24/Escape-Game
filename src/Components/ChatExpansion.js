import React, { useState ,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MessageBubble from "./MessageBubble"

function ChatExpansion()
{
    const [DemoMessages,setMessages]=useState([{"user1":"hello how are you?"},
    {"user2":"I am good and this game is interesting"},
    {"user3":"yeah I agree with you."}])
    const [msg,setMsg]=useState("")
    const [buttonMsg,SetButtonMsg]=useState("")
    useEffect(()=>{
      setMessages((event)=>[...DemoMessages,{"user4":msg}])
      setMsg("")
    },[buttonMsg])
    return (
      <div>
        <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Chat</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <MessageBubble messages={DemoMessages} />
            <input type="text" value={msg} onChange={(event)=>setMsg(event.target.value)}/><button onClick={()=>{SetButtonMsg(msg)}}>Send</button>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
      </div>
    )
}
export default ChatExpansion