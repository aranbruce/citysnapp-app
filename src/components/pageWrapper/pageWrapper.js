import React from "react";
import Header from "../header/header";
import Navigation from "../navigation/navigation";

import styles from "./pageWrapper.module.sass";

const PageWrapper = ({ children }) => {
	return (
		<div className={styles.pageWrapper}>
			<Header />
			<div className={styles.pageWrapperContent}>{children}</div>
			<Navigation />
		</div>
	);
};

export default PageWrapper;
