import React from "react";

import styles from "./authenticationWrapper.module.sass";

const AuthenticationWrapper = ({children}) => {
	return (
		<section className={styles.section}>
			<div className={styles.sectionContent}>{children}</div>
		</section>
	);
};

export default AuthenticationWrapper;
