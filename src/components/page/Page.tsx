import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import s from "./Page.module.scss";


const Page = () => {
	return (
		<div className={s.page}>
			<Header />
      <div className={s.content}>
			  <Outlet />
      </div>
			<Footer />
		</div>
	);
};

export default Page;