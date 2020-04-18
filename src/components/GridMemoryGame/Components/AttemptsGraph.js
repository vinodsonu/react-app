import React from "react"
import { observable, action, computed, toJS } from 'mobx';
import { observer } from 'mobx-react'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

@observer
class AttemptsGraph extends React.Component {
    render() {
        return (
            <LineChart key={Math.random()} width={600} height={300} data={this.props.gameData}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="Attempt"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="level" stroke="#8884d8" activeDot={{r: 8}}/>
      </LineChart>
        );
    }
}
export default AttemptsGraph;
