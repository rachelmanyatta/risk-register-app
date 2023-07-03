import React from "react";
import { Link } from "react-router-dom";
import styles from "../sass/components/footer.module.scss";


function Footer() {
	// Back To Top Button
	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className={styles.mainFooter}>
			<button className={styles.toTop} onClick={scrollTop}>
				<i className={`fas fa-arrow-alt-circle-up`}></i>
				<p>Back to top</p>
			</button>

			<div className={styles.links}>
				<Link to="/risk-register-app">Home</Link>
				<Link to="/Signup">Register</Link>
				<Link to="/contact">Contact</Link>
			</div>

			<div className={styles.socials}>
				<a href="https://www.linkedin.com/feed/">
					<i className={`fab fa-linkedin`}></i>
				</a>
				<a href="https://github.com/rachelmanyatta">
					<i className={`fab fa-github-square`}></i>
				</a>
			</div>
			
		</footer>
	);
}

export default Footer;
