import "../App.css";
import "../styles/JoinPage.css";
import Header from "../components/Header";
import React, { useState } from "react";
import hiphopAudio from "../assets/Baazigar.mp3";
import { MdOutlineFileDownload } from "react-icons/md";

function Join() {
  const [activeTab, setActiveTab] = useState("bolly");

  return (
    <>
      <Header text={"Audtion Information"} />
      <div className="join-info-container">
        <p>
          We are currently not looking for new competition team dancers for the
          23'-24' season. However, Maryland Manzar will be accepting{" "}
          <i>
            <b>exhibition team auditions</b>
          </i>{" "}
          throughtout the year. Exhibition dancers have the opportunity to move
          up to comp team the following semester.
        </p>
        <p>
          Select a choreography to learn: bollywood or hip-hip. We have provided
          the tutorial and full-speed videos for both below. After familiarizing
          youself with the choreography, you can email/dm us to schedule office
          hours with our choreo team if needed. Any questions or concerns about
          the audition piece can be addressed during this session.
        </p>
        <p>
          After you are confident in your piece, send audition videos to
          <a href="mailto:marylandmanzar@gmail.com" className="email-link">
            {" marylandmanzar@gmail.com "}
          </a>
          as an unlisted YouTube link. Any supplemention videos can also be
          submitted, such as past solo performances/practices showcasing other
          dance styles.
        </p>
        <p>
          If you have any questions, please DM{" "}
          <a
            href="https://www.instagram.com/marylandmanzar/"
            className="email-link"
          >
            {" @marylandmanzar "}
          </a>{" "}
          or email
          <a href="mailto:marylandmanzar@gmail.com" className="email-link">
            {" marylandmanzar@gmail.com"}
          </a>
          .
        </p>

        <h2>Come join our family!</h2>
      </div>

      <div className="tab-container">
        <div className="tab-titles">
          <button
            className={`tab-title ${activeTab === "bolly" ? "active" : ""}`}
            onClick={() => setActiveTab("bolly")}
          >
            Bolly
          </button>
          <button
            className={`tab-title ${activeTab === "hip-hop" ? "active" : ""}`}
            onClick={() => setActiveTab("hip-hop")}
          >
            Hip-Hop
          </button>
        </div>
        <div className="tab-content">
          {activeTab === "bolly" && (
            <div>
              <li>
                <a href="https://drive.google.com/file/d/1oos8DN0gQCIJ2Pc_pVIi93z1CAYvSaR2/view?usp=sharing">
                  Bollywood Dance Tutorial
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=jDcKnTc5YhI">
                  Full Bollywood Dance Video
                </a>
              </li>
            </div>
          )}
          {activeTab === "hip-hop" && (
            <div>
              <li>
                <a href="https://drive.google.com/file/d/11RtRajfkn2jfCJ2ONKdFlBYB6LItvJqJ/view?usp=sharing">
                  Hip-Hop Dance Tutorial
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=3wg56iEP0c4">
                  Full Hip-Hop Dance Video
                </a>
              </li>
              <li>
                <a href={hiphopAudio}>
                  Download Audio <MdOutlineFileDownload />
                </a>
              </li>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Join;
