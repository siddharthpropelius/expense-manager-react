import AddExpense from "../components/AddExpense"
import AccountCard from "../components/Home/AccountCard"
import ChartCard from "../components/Home/ChartCard"
import { RecentTransaction } from "../components/Home/RecentTransaction"
import UpcommingTransactiom from "../components/Home/UpcommingTransaction"
import Navbar from "../components/layout/Navbar"

const Home = () => {
    return <div className="min-h-screen">
        {/* <Navbar /> */}
        <div className="flex flex-col md:flex-row w-full gap-5 mx-5">
            <ChartCard />
            <AccountCard />
        </div>
        <div className="flex flex-col md:flex-row gap-5 mx-5">
            <RecentTransaction />
            <UpcommingTransactiom />
        </div>
        <AddExpense />
    </div>
}

export default Home