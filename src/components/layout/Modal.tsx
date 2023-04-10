import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ExpenseActions, RootState } from '../../store/slice/Slice';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Modal from '@mui/material/Modal';
import { IncomeList, ExpenseList } from "../../store/data/list";



const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};
const CustomModal = () => {
    const isOpen = useSelector((state: RootState) => state.expense.modalState) as boolean
    const [category, setCategory] = React.useState()
    const [type, setType] = React.useState('expense');
    const [price, setPrice] = React.useState<string>()
    const [name, setName] = React.useState<string>('')
    const [selectedDate, setSelectedDate] = React.useState(new Date().toISOString().substr(0, 10));
    const MenuList = type === 'expense' ? ExpenseList : IncomeList ?? null
    const dispatch = useDispatch();

    const HandleOnAdd = () => {
        const data = { name, price, category, type, date: selectedDate }
        dispatch(ExpenseActions.addTransaction(data))
        ExpenseActions.modal();
    }
    const handleDateChange = (date: string) => {
        setSelectedDate(date);
    };
    return (
        <div>
            <Modal
                open={isOpen}
                onClose={() => dispatch(ExpenseActions.modal())}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="mx-auto [text-align-last:center]"><ToggleButtonGroup
                        color="primary"
                        value={type}
                        exclusive
                        onChange={(e: any) => setType(e.target.value)}
                        aria-label="Platform"
                    >
                        <ToggleButton value="expense">Expense</ToggleButton>
                        <ToggleButton value="income">Income</ToggleButton>
                    </ToggleButtonGroup></div>

                    <div className="mt-5">
                        <TextField id="name" label="Name" variant="outlined" onChange={(e) => setName(e.target.value)} fullWidth />
                        <FormControl fullWidth sx={{ mt: 2 }}>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                fullWidth
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={category}
                                label="Category"
                                onChange={(e: any) => setCategory(e.target.value)}

                            >
                                {MenuList?.map((item: string) => <MenuItem value={item}>{item}</MenuItem>)}

                            </Select>
                        </FormControl>
                        <TextField id="price" label="Price" variant="outlined" onChange={(e) => setPrice(e.target.value)} fullWidth sx={{ mt: 2 }} />

                        <TextField
                            id="date"
                            label="Date"
                            type="date"
                            defaultValue={selectedDate}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                            sx={{ mt: 2 }}
                            onChange={(e) => handleDateChange(e.target.value)}
                            // @ts-ignore
                            format="dd/MM/yyyy" // <--- specify the format here
                        />
                        <Button sx={{ mt: 2 }} color="secondary" fullWidth onClick={() => HandleOnAdd()}>ADD</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default CustomModal