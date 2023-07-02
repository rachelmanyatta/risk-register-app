import React, { useContext } from "react";
import styles from "../sass/pages/home.module.scss";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import DarkModeContext from "../context/DarkModeContext";


function Home() {
	const { darkMode } = useContext(DarkModeContext);

	return (
		
			<div>
			<main className={`${styles.home} ${darkMode}`}>
			<div className={styles.banner}>
				<div className={styles.left}>
					<h1>
						No risk.<br />
						No loss.
					</h1>
					<p>
						The UDSM operational risk register helps identify and register
						risks and mitigation strategies.<br /> <br />
						Identify potential risks that may exist at UDSM and
						manage them with the use of the UDSM risk register. Find, plan and mitigate the risk to stay on
						top.
					</p>
					<Link to="/Register">Register</Link>
				</div>
				<div className={styles.riskImg}></div>
			</div>

			{/* 4 Features Section */}

			<div className={styles.features}>
				<h2>No more risks at UDSM</h2>
				<div className={`${styles.featuresContainer} container`}>
					<div className={styles.item}>
						<h3 className={styles.number}>1</h3>
						<h4>Identify</h4>
						<p>
							Find the associated operational risks at UDSM and register
							them.
						</p>
					</div>
					<div className={styles.item}>
						<h3 className={styles.number}>2</h3>
						<h4>Plan</h4>
						<p>
							Create a mitigation strategy to reduce or even better, remove
							the risk.
						</p>
					</div>
					<div className={styles.item}>
						<h3 className={styles.number}>3</h3>
						<h4>Assess</h4>
						<p>
							Priotize risks based on their likehood of occurence and potential impacts.

						</p>
					</div>
					<div className={styles.item}>
						<h3 className={styles.number}>4</h3>
						<h4>Mitigate</h4>
						<p>
							Execute the mitigation plan and then update on here to keep
							everyone updated.
						</p>
					</div>
				</div>		</div>
		</main><Footer darkMode={darkMode} />
		</div>
		
	);
	
}

export default Home;
