import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Profile = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>PROFILE</h1>
			<Link to="/personal-plan">PERSONAL PLAN</Link>
            <Link to="/time">TIEMPO</Link>
		</div>
	);
};
