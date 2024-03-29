import Link from "next/link";
import styles from "../app/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/posts">
          <li>Posts</li>
        </Link>
        <Link href="/users">
          <li>Users</li>
        </Link>
        <input placeholder="Search..." type="text" />
      </ul>
    </nav>
  );
};

export default Navbar;
