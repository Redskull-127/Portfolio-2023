// components/Layout.js

import { useRouter } from 'next/router';
import Navbar from './Navbar';
import HomeScreen from './HomeScreen';
import SkillsContent from './Skills/Skills';
import LatestContent from './Latest/latest';
import ContactContent from './Contact/Contact';
import BlogContent from './Blogs/Blogs';
import ChatContent from './chat/Chat';

const pageComponents = {
  '/': HomeScreen,
  '/skills': SkillsContent,
  '/latest': LatestContent,
  '/contact': ContactContent,
  '/blogs': BlogContent,
  '/chat': ChatContent,
};

 const Layout = ({data}) => {
  const router = useRouter();
  const PageComponent = pageComponents[router.pathname] ||  HomeScreen;
  return (
    <div>
      {/* Render sidebar, header, and footer */}
      <main className="flex h-screen w-screen justify-end gap-5 max-sm:p-8 ">
        <Navbar />
        <div className="w-[70%] pt-40 px-24 ">
          <PageComponent/>
        </div>
      </main>
    </div>
  );
};

export default Layout;
