import { useDispatch, useSelector } from "react-redux"
import CustomModal from "../layout/Modal"
import { ExpenseActions } from "../../store/slice/Slice"
import { BsPlusCircleFill } from 'react-icons/bs'
import { useState } from "react"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { MenuItem, Select } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CustomToggle from "../layout/Toggle"
const Transactions = (): JSX.Element => {
    const dispatch = useDispatch()
    const [selectCurrency, setSelectedCurrency] = useState('ruppe')
    // const ExpenseData = useSelector((state: any) => state.expense.Expenses)
    // const total = Math.ceil(ExpenseData.length / 10)
    // const [_data, setData] = useState(ExpenseData.slice(0, 10))

    const handleOnChangeCurrency = (e: any) => {
        setSelectedCurrency(e.target.value)
    }

    return (
        <div className="max-w-[1600px] mx-auto  my-6">
            <CustomModal />
            <div className="flex justify-between mx-6">
                <h3 className="text-xl font-semibold flex ">Transactions</h3>
                <div className="flex gap-3">
                    <button className="bg-teal-800 hidden md:flex  items-center text-white  gap-2 py-3 px-10 rounded-xl justify-center cursor-pointer" onClick={() => dispatch(ExpenseActions.modal())}>Add Transaction</button>
                    <BsPlusCircleFill className="md:hidden my-auto cursor-pointer" size={30} onClick={() => dispatch(ExpenseActions.modal())} />
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
            <CustomToggle currency={selectCurrency} />

        </div>
    )
}

export default Transactions