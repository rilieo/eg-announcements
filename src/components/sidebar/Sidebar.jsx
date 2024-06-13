import sidebarInfo from '../../../playwright/sidebarInfo.json';
import Section from './Section';

const Sidebar = () => {
  return (
    <div className="max-[824px]:hidden">
        {sidebarInfo.map((s, i) => (
            <Section key={i} section={s} />
        ))}
    </div>
  )

}

/*


*/

export default Sidebar