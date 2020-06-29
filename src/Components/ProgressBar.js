import React, { Component } from 'react'
import { Button, Progress } from 'semantic-ui-react'

// export default class ProgressBar extends Component {
  
//   state = { percent: ((this.props.value-1)/6)*100 }

//   increment = () =>
//     this.setState((prevState) => ({
//       percent: prevState.percent >= 100 ? 0 : prevState.percent + 20,
//     }))

//   render() {
//     return (
//       <div>
//         <Progress percent={this.state.percent} indicating />
//         {/* <Button onClick={this.increment}>Increment</Button> */}
//       </div>
//     )
//   }
// }
export default function ProgressBar(props)
{

  return (
    <div>
      <Progress percent={((props.value-1)/6)*100} indicating />
    </div>
  )
}

// {((props.value-1)/6)*100}