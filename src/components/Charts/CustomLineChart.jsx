import React from 'react'
import {
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Area,
    AreaChart,
} from "recharts"
import { addThousandSeparator } from '../../utils/helper'

const CustomLineChart = ({data}) => {
  
  const CustomTooltip = ({ active, payload }) => {
    if ( active && payload && payload.length) {
      const name = payload[0].payload.category;
      const value = payload[0].value;
      return (
        <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
          <p className="text-xs font-semibold text-blue-800 mb-1">{name}</p>
          <p className="text-sm text-gray-600">
            Amount: <span className="text-sm font-medium text-gray-900">Rp {addThousandSeparator(value)}</span>
          </p>
        </div>
      )
    }
    return null;
  }

  return (
    <div className='bg-wite'>
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
                <defs>
                    <linearGradient id='incomeGradient' x1='0' y1='0' x2='0' y2='1'>
                        <stop offset='5%' stopColor='#6366f1' stopOpacity={0.4} />
                        <stop offset='95%' stopColor='#6366f1' stopOpacity={0} />
                    </linearGradient>
                </defs>

                <CartesianGrid stroke='none' />
                <XAxis dataKey='month' tick={{ fontSize: 12, fill: "#555" }} stroke='none' />
                <YAxis 
                    tick={{ fontSize: 12, fill: "#555" }} 
                    stroke='none' 
                    tickFormatter={(value) => addThousandSeparator(value)} 
                />

                <Tooltip content={<CustomTooltip />} />

                <Area type='monotone' dataKey='amount' stroke='#6366f1' fill='url(#incomeGradient)' strokeWidth={3} dot={{ r: 3, fill: '#818cf8' }} />
            </AreaChart>
        </ResponsiveContainer>
    </div>
  )
}

export default CustomLineChart