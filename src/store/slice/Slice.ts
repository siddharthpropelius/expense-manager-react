import { createSlice } from '@reduxjs/toolkit'

export interface RootState {
    expense: {
        Expenses: ExpenseProps[]
        modalState: boolean
        totalIncome: number
        totalExpense: number
    }
}

interface InitalStateProps {
    Expenses: ExpenseProps[]
    modalState: boolean
    totalIncome: number
    totalExpense: number
}

interface ExpenseProps {
    id: number
    name: string
    category: string
    price: string
    date: string
    type: string
}

const InitalState: InitalStateProps = {
    Expenses: [],
    modalState: false,
    totalIncome: 0,
    totalExpense: 0
}

const ExpenseSlice = createSlice({
    name: 'expense',
    initialState: InitalState,
    reducers: {
        addTransaction(state, action) {
            state.Expenses.push(action.payload)
        },
        modal(state) {
            state.modalState = !state.modalState
        },
        totalIncome(state) {
            const data = state.Expenses.filter((i) => i.type === 'income')
            let total = 0
            data.map((i) => total += Number(i.price))
            state.totalIncome = total || 0
        },
        totalExpense(state) {
            const data = state.Expenses.filter((i) => i.type === 'expense')
            let total = 0
            data.map((i) => total += Number(i.price))
            state.totalExpense = total || 0
        }
    }
})

export const ExpenseActions = ExpenseSlice.actions
export default ExpenseSlice