import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const AccountCard=():JSX.Element=>{
    return (
        <div className="bg-[#000000] p-8 w-[30rem]  rounded-md text-white md:mt-12 mx-auto ">
            <div className='flex justify-between px-8'><ArrowForwardIosIcon sx={{color:'#FFF'}}/><MoreHorizIcon sx={{color:'#FFF'}}/></div>
            <div className="text-center">
                <img src="/images/user.jpg" alt="user-image" className="w-[140px] rounded-full mx-auto mt-8"/>
                <h3 className="text-2xl mt-3">Siddharth Vaishnav</h3>
                <h5>Frontend Developer</h5>
                <button className="rounded-3xl bg-[#26282A] py-2 px-8 mt-5">Edit Profile</button>
            </div>
        </div>
    )
}

export default AccountCard