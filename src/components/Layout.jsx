// components/Layout.js

import { useRouter } from 'next/router';
import Navbar from './Navbar';
import HomeScreen from './HomeScreen';
import SkillsContent from './Skills/Skills';
import LatestContent from './Latest/latest';
import ContactContent from './Contact/Contact';

const Layout = ({ children }) => {
  const router = useRouter();
  const isHomePage = router.pathname === '/'
  const isSkillsPage = router.pathname === '/skills'
  const isLatestPage = router.pathname === '/latest'
  const isContactPage = router.pathname === '/contact'

  return (
    <div>
      {/* Render sidebar, header, and footer */}
      <main
        className={`flex h-screen w-screen justify-end gap-5 max-sm:p-8 `}
      >
        <Navbar />
        {isHomePage && <div className='w-[70%] '><HomeScreen /></div>}
        {isSkillsPage && <div className='w-[70%] pt-40 px-24 '><SkillsContent /></div>}
        {isLatestPage && <div className='w-[70%] pt-40 px-24 '><LatestContent /></div>}
        {isContactPage && <div className='w-[70%] pt-40 px-24 '><ContactContent /></div>}
      </main>
    </div>
  );
};

export default Layout;
