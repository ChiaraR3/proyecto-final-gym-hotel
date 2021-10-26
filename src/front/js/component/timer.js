import React, { useState, useRef } from "react";

const Time = () => {
	const [timer, setTimer] = useState(0);
	const [isActive, setIsActive] = useState(false);
	const [isPaused, setIsPaused] = useState(true);
	const [pulse, setPulse] = useState("");
	const increment = useRef(null);

	const handleStart = () => {
		setIsActive(true);
		setIsPaused(false);
		increment.current = setInterval(() => {
			setTimer(timer => timer + 1);
		}, 1000);
		setPulse("blob red");
	};

	const handleStop = () => {
		clearInterval(increment.current);
		setIsPaused(true);
		setPulse("");
	};

	const handleReset = () => {
		clearInterval(increment.current);
		setIsActive(false);
		setIsPaused(true);
		setTimer(0);
	};

	async function saveTime(event) {
		event.preventDefault();
		console.log("hasta qui llega");
		const token = localStorage.getItem("jwt-token");
		const response = await fetch(process.env.BACKEND_URL + "/api/client-time", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token
			},
			body: JSON.stringify({
				total_time: timer
			})
		});
		console.log(response);
		const responseJson = await response.json();
		setTimer(responseJson);
	}

	const formatTime = () => {
		const getSeconds = `0${timer % 60}`.slice(-2);
		const minutes = `${Math.floor(timer / 60)}`;
		const getMinutes = `0${minutes % 60}`.slice(-2);
		const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

		return `${getHours} : ${getMinutes} : ${getSeconds}`;
	};

	return (
		<div>
			<div className={`text-center timer ${pulse}`}>
				<p>{formatTime()}</p>
			</div>
			<div className="buttons">
				{!isActive && isPaused ? (
					<button onClick={handleStart}>Start</button>
				) : !isPaused ? (
					<button onClick={handleStop}>Stop</button>
				) : (
					<button onClick={saveTime}>Save time</button>
				)}
				<button onClick={handleReset}>reset</button>
			</div>
		</div>
	);
};

export default Time;
