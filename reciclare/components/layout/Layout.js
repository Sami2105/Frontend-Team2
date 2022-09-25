import Header from "../Header";
import Footer from "../Footer";
import Head from "next/head";
const Layout = ({ children, title, description, ogImage, url }) => {
  return (
    <>
      <Head>
        <title>
          {title
            ? title
            : "Template - Next.js and Material-UI with Header and Footer"}
        </title>
      </Head>
      <Header />

      <main>{children}</main>
      <Footer />
      <style jsx global>
        {`
          html,
          body {
            background: #f9f9f9;
            overflow-x: hidden;
            padding: 0 !important;
            display: block;
            margin: 1.9em 0em 0em 0em;
          }

          body:focus {
            outline: none;
          }
          #__next {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          main {
            flex: 1;
            margin: 1em 4em 1em 4em;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
