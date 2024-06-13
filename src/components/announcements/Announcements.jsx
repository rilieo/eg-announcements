import data from '../../../playwright/announcements.json'

import Announcement from './Announcement.jsx'

const Announcements = () => {
  return (
    <div className="w-full h-full overflow-auto">
      <h1 className="text-3xl font-medium mt-4">
        Welcome to General Engineering 1004
      </h1>
      <div className="whitespace-pre-wrap">
        {data.map((a, i) => (
          <Announcement key={i} a={a} />
        ))}
      </div>
    </div>
  )
}

export default Announcements