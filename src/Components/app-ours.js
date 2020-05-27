import React, { Component } from 'react';
import '../Game.css';

export default class AppDragDropDemo extends Component {
    state = {
        tasks: [
            {name:"Battery",category:"to_take", bgcolor: "yellow"},
            {name:"DZ Comics", category:"to_take", bgcolor:"pink"},
            {name:"Peridic table ", category:"to_take", bgcolor:"skyblue"}
          ]
    }

    // {name:"Battery",category:"fuelcell_component", bgcolor: "green"},
    // {name:"DZ comics", category:"wip", bgcolor:"black"},
    // {name:"Periodic table", category:"fuelcell_component", bgcolor:"Grey"}
    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
       
       let tasks = this.state.tasks.filter((task) => {
           if (task.name == id) {
               task.category = cat;
           }
           return task;
       });

       this.setState({
           ...this.state,
           tasks
       });
    }

    render() {
        var tasks = {
            wip:[],
            to_take: [],
            inventory: [],
            discard:[]
        }

        this.state.tasks.forEach ((t) => {
            console.log(t)
            tasks[t.category].push(
                <div key={t.name}
                    onDragStart = {(e) => this.onDragStart(e, t.name)}
                    draggable
                    className="draggable"
                    style = {{backgroundColor: t.bgcolor}}
                >
                    {t.name}
                </div>
            );
            
        });

        return (
            <div className="container-drag">
                {/* <h2 className="header">DRAG & DROP DEMO</h2> */}
                <div className="wip"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "to_take")}}>
                    <span className="task-header">to_take</span>
                    {tasks.to_take}
                </div>
                <div className="sub-grid-item1" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "inventory")}>
                     <span className="task-header">inventory</span>
                     {tasks.inventory}
                </div>
                <div className="droppable" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "discard")}>
                     <span className="task-header">discard</span>
                     {/* {tasks.discard} */}
                </div>


            </div>
        );
    }
}