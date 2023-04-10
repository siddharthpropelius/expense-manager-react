import { BsPlusCircleFill } from 'react-icons/bs'
import Modal from '../components/layout/Modal'
import { useDispatch } from 'react-redux'
import { ExpenseActions } from '../store/slice/Slice';




const AddExpense = () => {
    const disptach = useDispatch();
    return (<>
        <div className="fixed right-0 bottom-0"><BsPlusCircleFill size={50} className="mr-5 mb-5 cursor-pointer" onClick={()=>disptach(ExpenseActions.modal())} /></div>
        <Modal />
    </>
    )
}

export default AddExpense