import Sidebar from '../components/sidebar/Sidebar.jsx'
import Announcements from '../components/announcements/Announcements.jsx'
import Header from '../components/header/Header.jsx'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex gap-10 px-64 max-[980px]:px-6 max-[1525px]:px-28">
          <Sidebar />
          <Announcements />
      </div>
    </div>
  )
}

export default Home