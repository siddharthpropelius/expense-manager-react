import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CustomPagination from "../layout/Pagination"
import { RootState } from '../../store/slice/Slice';
import SaveToPDF from '../../utils/SaveToPDF';
import { Container } from '@mui/material';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function CustomToggle({ currency }: { currency: string }) {

    const [value, setValue] = React.useState(0);

    const [type, setType] = React.useState('expense')
    const ExpenseData = useSelector((state: RootState) => state.expense.Expenses)
    const FilterData = ExpenseData.filter((i: any) => i.type === type)
    const total = Math.ceil(FilterData.length / 10)
    const [data, setData] = React.useState(FilterData.reverse().slice(0, 10))

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setType(newValue === 0 ? 'expense' : 'income')
        const filter = ExpenseData.filter((i: any) => i.type === (newValue === 0 ? 'expense' : 'income')).slice(0, 10)
        setData(filter.reverse())
        setValue(newValue);
    };

    const handleCurrency = (value: number) => {
        switch (currency) {
            case 'ruppee':
                return value
            case 'dollar':
                return value / 80
            default:
                return value
        }
    }

    const HandleOnChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
        const startIndex = (value - 1) * 10;
        const endIndex = startIndex + 10;
        const sortData = FilterData.slice(startIndex, endIndex)
        setData(sortData)
    }


    return (
        <Container>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 4, mx: 4 }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ width: '100%' }}>
                        <Tab label="Expense" {...a11yProps(0)} style={{ minWidth: "50%", maxWidth: 'fit-content' }} />
                        <Tab label="Income" {...a11yProps(1)} style={{ minWidth: "50%", maxWidth: 'fit-content' }} />
                    </Tabs>
                </Box>
                <button onClick={SaveToPDF}>GENERATE</button>
                <TabPanel value={value} index={value} >
                    <div id="pdf-content">
                        {data.length ? data.reverse().map((item: any) => {
                            return (
                                <div className="flex justify-between mt-5 mx-4">
                                    <div className="border-l-4 border-indigo-500 pl-2">
                                        <p className="text-[12px] text-gray-500  font-semibold">{item.date}</p>
                                        <p className="text-[12px] text-gray-500 underline font-semibold">{item.category.toUpperCase()}</p>
                                        <p>{item.name}</p>
                                    </div>
                                    <div className="items-center, px-4">
                                        {currency === 'ruppe' ? <CurrencyRupeeIcon sx={{ fontSize: '16px', verticalAlign: 'text-bottom' }} /> : <AttachMoneyIcon sx={{ fontSize: '16px', verticalAlign: 'text-bottom' }} />}{handleCurrency(item.price)}
                                    </div>
                                </div>
                            )
                        }) : <div className="flex justify-center h-[100px] items-center font-semibold">No Transaction Found!</div>}
                    </div>

                </TabPanel>
                <div>
                    {data.length &&
                        <CustomPagination total={total} handleOnChange={HandleOnChangePagination} type={type} />
                    } </div>


            </Box >
        </Container>
    );
}