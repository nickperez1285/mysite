import React, { Component } from "react";

class About extends Component {
	render() {
		if (this.props.data) {
			var name = this.props.data.name;
			var profilepic = "images/" + "nickspix.jpeg";
			var bio = this.props.data.bio;
			var street = this.props.data.address.street;
			var city = this.props.data.address.city;
			var state = this.props.data.address.state;
			var zip = this.props.data.address.zip;
			var phone = this.props.data.phone;
			var email = this.props.data.email;
			var resumeDownload = this.props.data.resumedownload;
		}

		return (
			<section id="about">
				<div className="row">
					<div className="three columns">
						<img className="profile-pic" src={profilepic} alt="Nick Perez Profile Pic" />
					</div>
					<div className="nine columns main-col">
						<h2>About Me</h2>

						<p>{bio}</p>
						<p> In his free time he enjoys all sports that include riding boards including longboarding , snowboarding , and surfing. If hes not out riding his boards hes out taking some 
                       aerial photos (,like the one in the background, ) with his drones  .</p>
						<div className="row">
							<div className="columns contact-details">
								<h2>Contact Details</h2>
								<p className="address">
									<span>{name}</span>
									{/* <br />

									<span>{phone}</span> */}
									<br />
									<span>{email}</span>
								</p>
							</div>
							<div className="columns download">
								<p>
									<a href={resumeDownload} className="button" target="_blank" rel="noopener noreferrer">
										<i className="fa fa-download"></i>Download Resume
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default About;
