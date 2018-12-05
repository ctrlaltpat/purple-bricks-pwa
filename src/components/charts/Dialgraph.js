import React from 'react'
import { PieChart, Pie } from 'recharts'

const Dialgraph = () => {
    const data = [{name: "Group A", value:2400}, {name: "Group B", value: 3000}]
    return (
        <PieChart width={"auto"} height={"auto"}>
            <Pie data={data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#6F58C9" />
        </PieChart>
    )
}

export default Dialgraph
