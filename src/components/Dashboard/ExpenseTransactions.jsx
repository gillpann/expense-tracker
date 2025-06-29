import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
import TransactionInfoCard from '../Cards/TransactionInfoCard'
import moment from "moment"
import { addThousandSeparator } from '../../utils/helper'

const ExpenseTransactions = ({ transactions, onSeeMore}) => {
  return (
    <div className='card'>
        <div className='flex items-center justify-between '>
            <h5 className="text-lg">Expense</h5>
            <button className='card-btn' onClick={onSeeMore}>
                See All <LuArrowRight className='text-base' />
            </button>
        </div>
        <div className="mt-6">
            {Array.isArray(transactions) && transactions?.slice(0, 4)?.map((expense) => (
                <TransactionInfoCard
                    key={expense._id}
                    title={expense.category}
                    icon={expense.icon}
                    date={moment(expense.date).format("Do MMM YYYY")}
                    amount={addThousandSeparator(expense.amount || 0)}
                    type="expense"
                    hideDeleteBtn
                />
            ))}
        </div>
    </div>
  )
}

export default ExpenseTransactions