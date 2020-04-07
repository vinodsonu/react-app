/*global covid19*/
import React from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
class Covid19 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        const data = covid19.data().filter(x => x.country_iso3 === this.props.country3Code).groupByDate();
        this.setState({ data: data });
    }
    render() {
        return (
            <div>
                <LineChart width={500} height={500} data={this.state.data}
            margin={{top: 5, right: 30, left: 20, bottom: 10}}>
       <XAxis dataKey="date"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="confirmed" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="recovered" stroke="#82ca9d" />
      </LineChart>
            </div>);
    }
}
export default Covid19;
