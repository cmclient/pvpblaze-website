import type {NextPage} from 'next';
import {Nav} from '../components/navbar/navbar';
import {Layout} from '../components/navbar/layout';
import {Hero} from '../components/hero';
import {Box} from '../components/styles/box';
import {Staff} from '../components/staff';
import {Leaderboard} from '../components/leaderboard';
import {Footer} from '../components/footer';

const Home: NextPage = () => {
   return (
      <Layout>
         <Nav />
         <Box as="main">
            <Hero/>
            <Leaderboard id="leaderboard"/>
            <Staff id="staff"/>
            <Footer/>
         </Box>
      </Layout>
   );
};

export default Home;
