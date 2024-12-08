import Blog from '@components/home/blog/Blog';
import Discount from '@components/home/discount/Discount';
import Featured from '@components/home/featured/Featured';
import BannerPage from '@components/home/hero/BannerPage';
import Latest from '@components/home/latest/Latest';
import Shopex from '@components/home/shopex/Shopex';
import { Subscribe } from '@components/home/subscribe/Subscribe';
import TopCategory from '@components/home/topCategory/TopCategory';
import Trending from '@components/home/trending/Trending';
import Unique from '@components/home/unique/Unique';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>    
        <BannerPage/>
        <Featured/>
        <Latest/>
        <Shopex/>
        <Unique/>
        <Trending/>
        <Discount/>
        <TopCategory/>
        <Subscribe/>
        <Blog/>
    </div>
  );
};

export default Home;
