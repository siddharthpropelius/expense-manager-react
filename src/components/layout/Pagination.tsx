import Pagination, { PaginationProps } from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ChangeEvent } from 'react';

interface CustomPaginationProps extends PaginationProps {
    total: number
    handleOnChange: (event: ChangeEvent<unknown>, page: number) => void
    type: string
}

const CustomPagination = ({ total, handleOnChange, type }: CustomPaginationProps) => {
    return (
        <div className="mx-auto w-full">
            <Stack spacing={2}>
                <Pagination
                    onChange={handleOnChange}
                    sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}
                    count={total}
                    renderItem={(item) => (
                        <PaginationItem
                            sx={{
                                '&.MuiPaginationItem-root.Mui-selected': {
                                    backgroundColor: '#000000',
                                    color: '#FFFFFF'
                                }
                            }}
                            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                            {...item}
                        />
                    )}
                />
            </Stack>
        </div>
    )
}

export default CustomPagination