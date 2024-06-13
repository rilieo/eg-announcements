const Announcement = ({ a }) => {
  return (
    <div className="my-10 border-1.5 border-nyu-purple rounded-md">
        <h2 className="bg-nyu-purple text-white border border-nyu-purple rounded-t-md px-3 py-3 text-xl">{a.heading}</h2>
        <p className="border-b border-gray-100 px-3 py-3 text-lg mb-4">
            {a.body}
        </p>
        <p className="border-gray-300 border-t rounded-b-md px-5 py-3 bg-gray-100 text-lg">
            <span className="font-bold text-gray-800">Posted on: </span>
            {a.footer}
        </p>
    </div>
  )
}

export default Announcement