import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { FaPeriscope, FaSearch, FaTwitter } from "react-icons/fa";
import { BsLink45Deg } from "react-icons/bs";
import { DiGit } from "react-icons/di";
// import octocat from "../img/Octocat.png";

let iconStylse = { color: "RGB(20, 66, 132)", fontSize: "1em", padding: "5px" };
let iconstyles = { fontSize: "14px" };
function Dashboard() {
	const [users, setUsers] = useState({});
	const [username, setUsername] = useState("oshrestha111");

	const getUsers = async () => {
		const response = await fetch(`https://api.github.com/users/${username}`);
		setUsers(await response.json());
	};

	const handleChange = (e) => {
		setUsername(e.target.value);
	};

	const handleClick = () => {
		getUsers();
	};

	useEffect(() => {
		getUsers();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='section'>
			<div className='container'>
				<div className='wrapper'>
					<div className='title'>
						<h4> devfinder </h4>
						<label> LIGHT </label>
					</div>
					<div className='search-bar'>
						<FaSearch style={iconStylse} />
						<input
							onChange={handleChange}
							value={username}
							type='text'
							placeholder='Search GitHub username . . . .'></input>
						<button onClick={handleClick} on>
							Search
						</button>
					</div>
					<div className='desc'>
						<div className='logo'>
							<img src={users?.avatar_url} alt='octocat' />
						</div>
						<div className='right'>
							<div className='info'>
								<div className='info-head'>
									<h4>{users?.login}</h4>
									<label htmlFor=''>
										{new Date(users?.created_at).toDateString()}
									</label>
								</div>
								<div className='name'>{users?.name}</div>
							</div>
							<div className='bio'>{users?.bio}</div>

							<div className='count'>
								<table>
									<tr>
										<th>Repos</th>
										<th>Followers</th>
										<th>Following</th>
									</tr>

									<tr>
										<td>{users?.public_repos}</td>
										<td>{users?.followers}</td>
										<td>{users?.following}</td>
									</tr>
								</table>
							</div>
							<div></div>
							<div className='location'>
								<div className='grid'>
									<span>
										<FaPeriscope style={iconstyles} /> {users?.location}
									</span>
									<span>
										<DiGit style={iconstyles} /> github
									</span>
									<span>
										<FaTwitter style={iconstyles} /> {users?.twitter_username}
									</span>
									<span>
										<BsLink45Deg style={iconstyles} /> {users?.blog}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
