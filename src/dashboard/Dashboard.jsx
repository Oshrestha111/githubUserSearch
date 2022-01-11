import React from "react";
import "./dashboard.css";
import { FaPeriscope, FaSearch, FaTwitter } from "react-icons/fa";
import { BsLink45Deg } from "react-icons/bs";
import { DiGit } from "react-icons/di";
import octocat from "../img/Octocat.png";

let iconStylse = { color: "RGB(20, 66, 132)", fontSize: "1em", padding: "5px" };
let iconstyles = { fontSize: "14px" };
function Dashboard() {
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
							type='text'
							placeholder='Search GitHub username . . . .'></input>
						<button type='submit'>Search</button>
					</div>
					<div className='desc'>
						<div className='logo'>
							<img src={octocat} />
						</div>
						<div className='info'>
							<div className='info-head'>
								<h4>The Octocat</h4>
								<label htmlFor=''> Joined 25 jan 2021</label>
							</div>
							<div className='name'>octocat</div>
							<div className='bio'>This profile has no bio.</div>
						</div>
						<div></div>
						<div className='count'>
							<table>
								<tr>
									<th>Repos</th>
									<th>Followers</th>
									<th>Following</th>
								</tr>

								<tr>
									<td>8</td>
									<td>3210</td>
									<td>9</td>
								</tr>
							</table>
						</div>
						<div></div>
						<div className='location'>
							<table>
								<tr>
									<td>
										<FaPeriscope style={iconstyles} /> San Francisco
									</td>
									<td>
										<DiGit style={iconstyles} /> agithub
									</td>
								</tr>
								<tr>
									<td>
										<FaTwitter style={iconstyles} /> Not Available
									</td>
									<td>
										<BsLink45Deg style={iconstyles} /> link
									</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
