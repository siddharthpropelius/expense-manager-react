import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import NorthWestIcon from '@mui/icons-material/NorthWest';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { useDispatch, useSelector } from 'react-redux';
import { ExpenseActions, RootState } from '../../store/slice/Slice';
import { useEffect } from 'react';

const data = [{
    id: 1,
    month: 'Jan',
    income: 100,
    expense: 20
},
{
    id: 2,
    month: 'Feb',
    income: 100,
    expense: 30
},
{
    id: 3,
    month: 'Mar',
    income: 100,
    expense: 50
},
{
    id: 4,
    month: 'Apr',
    income: 100,
    expense: 80
},
{
    id: 5,
    month: 'May',
    income: 100,
    expense: 90
},
{
    id: 6,
    month: 'Jun',
    income: 100,
    expense: 50
},
{
    id: 7,
    month: 'Jul',
    income: 100,
    expense: 50
},
{
    id: 8,
    month: 'Aug',
    income: 100,
    expense: 50
},
{
    id: 9,
    month: 'Sep',
    income: 100,
    expense: 50
},
{
    id: 10,
    month: 'Oct',
    income: 100,
    expense: 50
},
{
    id: 11,
    month: 'Nov',
    income: 100,
    expense: 50
},
{
    id: 12,
    month: 'Dec',
    income: 100,
    expense: 80
}]

const ChartCard = () => {
    const NumberFormat = new Intl.NumberFormat()
    const totalIncome = useSelector((state: RootState) => state.expense.totalIncome)
    const totalExpense = useSelector((state: RootState) => state.expense.totalExpense)
    let max = 100;
    const calculateHeight = (number: number) => Math.round((number / max) * 90);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(ExpenseActions.totalIncome());
        dispatch(ExpenseActions.totalExpense())
    }, [dispatch])

    console.log(totalIncome, totalExpense)
    return (

        <div className="bg-black p-8 mt-12 text-white md:w-[60%] rounded-lg mx-auto">
            <div className="flex justify-between">
                <p style={{ fontSize: 24, fontWeight: 600 }}>Graph</p>
                <div className="flex gap-2">
                    <div className="flex gap-2" style={{ alignSelf: 'center' }}>
                        <div className="bg-[#fd5] rounded-full w-[10px] h-[10px] align-self-center" style={{ alignSelf: 'center' }} />
                        Income
                    </div>
                    <div className="flex gap-2" style={{ alignSelf: 'center' }}>
                        <div className="bg-teal-800 rounded-full w-[10px] h-[10px] align-self-center" style={{ alignSelf: 'center' }} />
                        Expenses
                    </div>
                </div>
            </div>
            <div className="flex gap-2 justify-around mt-5">
                {data.map((item) => {
                    return (
                        <div key={item.id}>
                            <div className="flex flex-col gap-2 justify-center items-center min-h-[150px] max-h-[150px]">
                                <div className={`bg-[#fd5] w-[10px] rounded-md items-end`} style={{ height: calculateHeight(item.expense) }} />
                                <div className={`bg-teal-800 w-[10px] rounded-md items-start`} style={{ height: calculateHeight(item.expense) }} />
                            </div>
                            <div>{item.month}</div>

                        </div>
                    )
                })}
            </div>
            <div className='mt-3 flex gap-3 ml-5'>
                <div className="bg-[#fd5] w-full  text-black flex gap-2 py-3 px-10 rounded-xl justify-center ">
                    <CurrencyRupeeIcon sx={{ alignSelf: 'center' }} />
                    <div>
                        <p className="font-semibold pl-[10px]">${NumberFormat.format(totalIncome)}</p>
                        <p className='text-gray-700 text-[16px]'><NorthWestIcon sx={{ fontSize: '14px', transform: 'rotate(180deg)' }} />Income</p>
                    </div>
                </div>
                <div className="bg-teal-800 w-full items-center text-black flex gap-2 py-3 px-10 rounded-xl justify-center ">
                    <CurrencyRupeeIcon sx={{ alignSelf: 'center', color: 'white' }} />
                    <div>
                        <p className="font-semibold  text-white pl-[10px]">${NumberFormat.format(totalExpense)}</p>
                        <p className='text-gray-400 text-[16px]'><NorthEastIcon sx={{ fontSize: '14px' }} />Expense</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChartCard