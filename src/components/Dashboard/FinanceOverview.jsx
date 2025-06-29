import React from 'react'
import CustomPieChart from '../Charts/CustomPieChart';
import { addThousandSeparator } from '../../utils/helper';

const COLORS = ["#6366f1", "#10b981", "#f43f5e"]


const FinanceOverview = ({totalBalance, totalIncome, totalExpense}) => {
    const balanceData = [
        { name: "Total Balance", amount: totalBalance},
        { name: "Total Expense", amount: totalExpense},
        { name: "Total Income", amount: totalIncome},
    ];

  return (
    <div className='card'>
        <div className='flex items-center justify-between'>
            <h5 className='text-lg'>Financial Overview</h5>
        </div>

        <CustomPieChart 
        data={balanceData}
        label= "Total Balance"
        totalAmount={`Rp ${addThousandSeparator(totalBalance || 0)}`}
        colors={COLORS}
        showTextAnchor
        />
    </div>
  )
}

export default FinanceOverview