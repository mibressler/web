import Head from 'next/head';
import PropTypes from 'prop-types';
import Navigation from './Navigation';

export const siteTitle = 'laymonage';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="laymonage's personal website" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Navigation />
      <main className="container flex items-center w-full min-h-screen mx-auto">{children}</main>
      <div className="fixed top-0 left-0 w-screen h-screen duration-500 bg-white bg-center bg-cover dark:bg-gray-900 bg ease" />
      <style jsx>
        {`
          .bg {
            background-image: url('/bg.svg');
            z-index: -1;
            content: '';
            will-change: transform;
          }
        `}
      </style>
    </>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
