"use client"
import React from 'react';
import SubHeader from "../headers/subheader"
import SecondaryPageDivider from "../pagedivider/secondarypagedivider.jsx"
import { GithubSVG, LinkedInSVG, MailSVG, InstagramSVG, UpRightSVG } from "../contact/svgs.jsx"

const colors = ["darkorange", "cadetblue", "lightsalmon", "indianred", "darkcyan", "chocolate"]
const brightcolors = ["blueviolet", "deeppink"]

const Contact = () => {
    const github = "https://github.com/vvinniev34"
    function handleGithubClick() {
        window.open(github, '_blank');
    }

    const linkedin = "https://www.linkedin.com/in/vincent-liu-1271e"
    function handleLinkedInClick() {
        window.open(linkedin, '_blank');
    }

    const email = "liu01841@umn.edu"
    function handleEmailClick() {
        const mailtoLink = `mailto:${email}`;
        window.location.href = mailtoLink;
    }

    return (
        <SubHeader 
            title="Contact"
            description={
              <div className="flex width" style={{width:"40%"}}>
                <div className="flex flex-col ">
                  <div className="flex m-5" style={{width:"90%"}}>
                    <div style={{width:"10%", cursor:"pointer"}} onClick={handleGithubClick}>
                        <GithubSVG/>
                    </div>
                    <div className="flex justify-center items-center" style={{width:"75%"}}>
                        <div className="w-auto" style={{cursor:"pointer"}} onClick={handleGithubClick}>
                            GitHub
                        </div>
                    </div>
                    <div style={{width:"10%", cursor:"pointer"}} onClick={handleGithubClick}>
                        <UpRightSVG/>
                    </div>
                  </div>
                  
                  <SecondaryPageDivider/>
                  
                  <div className="flex m-5" style={{width:"90%"}}>
                    <div style={{width:"10%", cursor:"pointer"}} onClick={handleLinkedInClick}>
                        <LinkedInSVG/>
                    </div>
                    <div className="flex justify-center items-center" style={{width:"75%"}}>
                        <div className="w-auto" style={{cursor:"pointer"}} onClick={handleLinkedInClick}>
                            LinkedIn
                        </div>
                    </div>
                    <div style={{width:"10%", cursor:"pointer"}} onClick={handleLinkedInClick}>
                        <UpRightSVG/>
                    </div>
                  </div>
                  
                  <SecondaryPageDivider/>

                  <div className="flex m-5" style={{width:"90%"}}>
                    <div style={{width:"10%", cursor:"pointer"}} onClick={handleEmailClick}>
                        <MailSVG/>
                    </div>
                    <div className="flex justify-center items-center" style={{width:"75%"}}>
                        <div className="w-auto" style={{cursor:"pointer"}} onClick={handleEmailClick}>
                            {email}
                        </div>
                    </div>
                    <div style={{width:"10%", cursor:"pointer"}} onClick={handleEmailClick}>
                        <UpRightSVG/>
                    </div>
                  </div>

                  <SecondaryPageDivider/>

                  <div className="flex m-5" style={{width:"90%"}}>
                    <div style={{width:"10%", cursor:"pointer"}}>
                        <InstagramSVG/>
                    </div>
                    <div className="flex justify-center items-center" style={{width:"75%"}}>
                        <div className="w-auto" style={{cursor:"pointer"}}>
                            Instagram
                        </div>
                    </div>
                    <div style={{width:"10%", cursor:"pointer"}}>
                        <UpRightSVG/>
                    </div>
                  </div>
                </div>
              </div>
            }
            color={colors[3]}
        />
    );
}

export default Contact;
