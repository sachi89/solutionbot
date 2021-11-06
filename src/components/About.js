import React from 'react';
import '../styles/About.css';
import "bootstrap/dist/css/bootstrap.min.css";

//component for About content

function About() {
  return (
    <div>
        <center>
            <div id="infobox" className="p-5 m-5 mt-3 justify-content-center">
                <div className="grow">
                    <h1>About:</h1>
                    <h5>SolutionBot is a therapeutic chatbot that uses Solution Focused Brief Therapy (SFBT) to help you identify solutions or skills you already have to reduce stressors and make changes for a better future.</h5>
                    <p></p>
                    <h5>SFBT is a brief therapy that can used in a single session.</h5>
                    <p></p>
                    <h5>SFBT does not focus on past traumas or the problem itself but on the present and your preferred future.</h5>
                    <p></p>
                    <h5>SFBT can be applied to most age groups and a variety of issues, including but not limited to relationship problems, some behavioral issues and mental health disorders, academic issues, and achieving goals.</h5>
                </div>
                <div className="grow">
                    <h1>Disclaimer:</h1>
                    <h5>SolutionBot is not intended to treat or diagnose mental health disorders or any clinical disorder.</h5>
                    <p></p>
                    <h5>If you have a serious mental illness, are experiencing severe symptoms, or if this is an emergency, please seek professional help immediately.</h5>
                </div>
            </div>
        </center>
    </div>
  );
}



export default About;
