import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/slice/Slice';


export const RecentTransaction = () => {
    const [selectCurrency, setSelectedCurrency] = useState('ruppe')
    const ExpenseData = useSelector((state: RootState) => state.expense.Expenses)
    const navigate = useNavigate();

    const handleOnChangeCurrency = (e: SelectChangeEvent<string>) => {
        setSelectedCurrency(e.target.value)
    }

    const handleCurrency = (value: number) => {
        switch (selectCurrency) {
            case 'ruppee':
                return value
            case 'dollar':
                return value / 80
            default:
                return value
        }
    }
    return (
        <div className="mx-auto max-w-[1700px] mt-12 md:w-[60%] border rounded-md py-2 px-4 ">
            <div className="flex justify-between">
                <h3 className="text-xl font-semibold">Recent Transactions</h3>
                <div>
                    <button className="bg-gray-200 text-gray-500 px-5 py-1 rounded-lg" onClick={() => navigate('/transactions')}>Show all</button>
                    <Select value={selectCurrency} onChange={handleOnChangeCurrency} sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }, '.MuiOutlinedInput-notchedOutline-focused': { border: 0 } }}>
                        <MenuItem
                            value={"ruppe"}
                        >
                            <CurrencyRupeeIcon />
                        </MenuItem>
                        <MenuItem
                            value={"dollar"}
                        >
                            <AttachMoneyIcon />
                        </MenuItem>
                    </Select>
                </div>
            </div>
            <div>
                {ExpenseData.length ?
                    ExpenseData.slice(-3).reverse().map((item: any) => {
                        return (
                            <div key={item.id} className="flex justify-between mt-5">
                                <div className="border-l-4 border-indigo-500 pl-2">
                                    <p className="text-[12px] text-gray-500 underline font-semibold">{item.category.toUpperCase()}</p>
                                    <p>{item.name}</p>
                                </div>
                                <div className="items-center, px-4">
                                    {selectCurrency === 'ruppe' ? <CurrencyRupeeIcon sx={{ fontSize: '16px', verticalAlign: 'text-bottom' }} /> : <AttachMoneyIcon sx={{ fontSize: '16px', verticalAlign: 'text-bottom' }} />}{handleCurrency(item.price)}
                                </div>
                            </div>
                        )
                    })
                    :
                    <div className="flex justify-center items-center h-[100px] ">
                        No Transaction Found!
                    </div>
                }



            </div>
        </div>

    )
}
