import React, { useState, useEffect } from 'react'
import { addThousandSeparator } from '../../utils/helper';
import CustomPieChart from '../Charts/CustomPieChart';

const COLORS = ["#6366f1", "#10b981", "#f43f5e", "#875cf5"]

const RecentIncomeWithChart = ({data, totalIncome}) => {

  const [chartData, setChartData] = useState([]);

  const prepareChartData = () => {
    const dataArr = data?.map((item) => ({
        name: item?.source,
        amount: item?.amount,
    }));

    setChartData(dataArr);
  };

  useEffect(() => {
    prepareChartData();
  
    return () => {};
  }, [data]);
  

  
  return (
    <div className="card">
        <div className="flex items-center justify-between">
            <h5 className="text-lg">Last 60 Days Income</h5>
        </div>

        <CustomPieChart
            data={chartData}
            label="Total Income"
            totalAmount={`Rp ${addThousandSeparator(totalIncome || 0)}`}
            showTextAnchor
            colors={COLORS}
        />
    </div>
  )
}

export default RecentIncomeWithChart