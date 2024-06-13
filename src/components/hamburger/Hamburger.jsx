const Hamburger = () => {
    return (
    <div
        className="flex flex-col justify-center items-center w-8 h-full cursor-pointer mr-10 hidden max-[824px]:block"
      >
        <div className="h-[3px] w-[45px] my-3 bg-white"></div>
        <div className="h-[3px] w-[45px] my-3 bg-white"></div>
        <div className="h-[3px] w-[45px] my-3 bg-white"></div>
      </div>
    )
}

export default Hamburger