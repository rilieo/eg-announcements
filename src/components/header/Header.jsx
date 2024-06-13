import logo from '../../assets/logo.png';
import Hamburger from '../hamburger/Hamburger';

const Header = () => {
  return (
    <div className="flex bg-nyu-purple h-[75px] w-full mb-5">
        <img className="px-64 max-[980px]:px-6 max-[1525px]:px-28 cursor-pointer" src={logo} alt="General Engineering Logo"/>
        <div className="flex absolute right-0 mr-64 max-[980px]:mr-6 max-[1525px]:mr-28 mt-3 justify-center items-center">
            <Hamburger />
            <button className="text-white border-white border-2 rounded-md w-[90px] h-[50px] text-lg">Sign In</button>
        </div>
    </div>
  )
}

export default Header