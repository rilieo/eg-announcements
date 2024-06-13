const Section = ({ section }) => {
  return (
    <div className="flex flex-col text-lg w-[225px] mb-10">
        <h2 className="bg-nyu-purple text-white border border-black rounded-t-md px-3 py-2">{section.heading}</h2>
        <ul className="border-x border-b border-1.5 border-nyu-purple rounded-b-md text-gray-700">
        {section.list.map((l, i) => (
            i === section.list.length - 1 ?
            <li key={i} className="border-t border-t-slate-300 px-3 py-1.5 hover:bg-sky-100 cursor-pointer">{l}</li>
            :
            <li key={i} className="border-b border-b-slate-300 px-3 py-1.5 hover:bg-sky-100 cursor-pointer">{l}</li>
        ))}
        </ul>
    </div>
  )
}

export default Section