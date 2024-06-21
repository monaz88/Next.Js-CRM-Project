import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>M | CRM</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
      <a href='#' target='_top' rel='noreferrer'>M-CRM</a>| CRM project | developed by mona ❤
      </footer>
    </>
  );
}

export default Layout;
