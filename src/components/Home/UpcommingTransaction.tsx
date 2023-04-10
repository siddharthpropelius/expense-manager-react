import { AiFillGithub } from 'react-icons/ai'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'


const Data = [{
    id: 1,
    name: 'Github',
    price: 200
},
{
    id: 1,
    name: 'Github',
    price: 200
},
{
    id: 1,
    name: 'Github',
    price: 200
},
{
    id: 1,
    name: 'Github',
    price: 200
},
{
    id: 1,
    name: 'Github',
    price: 200
},
{
    id: 1,
    name: 'Github',
    price: 200
}]
const UpcommingTransactiom = () => {
    const [selectCurrency, setSelectedCurrency] = useState('ruppe')
    const handleOnChangeCurrency = (e: any) => {
        setSelectedCurrency(e.target.value)
    }

    const handleCurrency = (value: number) => {
        switch (selectCurrency) {
            case 'ruppee':
                return value
                break;
            case 'dollar':
                return value / 80
                break;
            default:
                return value
        }
    }

    const handleSlide = (direction: string) => {
        const scrollContainer = document.getElementById("slider")
        scrollContainer?.scrollBy({
            left: direction === 'left' ? -220 : 220,
            behavior: 'smooth'
        })
    }
    return (
        <div className="md:w-[40%] mt-12 border rounded-md py-2 px-4 mx-auto">
            <div className="flex justify-between ">
                <h3 className="text-xl font-semibold">Upcomming Transactions</h3>
                <div>
                    <button className="bg-gray-200 text-gray-500 px-5 py-1 rounded-lg">Show all</button>
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
            <div className='flex gap-5 mb-4'>            <BsFillArrowLeftCircleFill size={30} onClick={() => handleSlide("left")} className="cursor-pointer" />
                <BsFillArrowRightCircleFill size={30} onClick={() => handleSlide("right")} className="cursor-pointer" />
            </div>

            <div className='flex gap-5 overflow-x-scroll w-[650px] scrollbar-hide' id="slider" style={{ maxWidth: "-webkit-fill-available" }}>
                {Data.map((item) => {
                    return (
                        <div key={item.id} className="bg-teal-800 w-[200px] h-fit p-3 py-4 rounded-xl text-white" style={{ flex: '0 0 200px' }}>
                            <AiFillGithub size={50} />
                            <div className='mt-2'>
                                <h3 className='font-semibold'>{item.name}</h3>
                                <p className="text-gray-300"> {selectCurrency === 'ruppe' ? <CurrencyRupeeIcon sx={{ fontSize: '16px', verticalAlign: 'text-bottom' }} /> : <AttachMoneyIcon sx={{ fontSize: '16px', verticalAlign: 'text-bottom' }} />}{handleCurrency(item.price)}</p>
                            </div>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}


export default UpcommingTransactiom