import React from "react";
import "./WorkExperience.scss";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";

import company1 from "../../assets/images/bigchaindb-01.png";
import company2 from "../../assets/images/ascribe-01.png";
import company3 from "../../assets/images/ezeep-02.png";
import company4 from "../../assets/images/oceanprotocol-commons-01.png";
import company5 from "../../assets/images/oceanprotocol-market-01.png";
import company6 from "../../assets/images/oceanprotocol-v1-01.png";
import company7 from "../../assets/images/sharethemeal-01.png";

const worksDone = [
  {
    companyName: 'BigchainDB',
    img: company1
  },
  {
    companyName: 'ascribe',
    img: company2
  },
  {
    companyName: 'ezeep',
    img: company3
  },
  {
    companyName: 'Ocean Protocol - Commons',
    img: company4
  },
  {
    companyName: 'Ocean Market',
    img: company5
  },
  {
    companyName: 'Ocean Protocol v1',
    img: company6
  },
  {
    companyName: 'ShareTheMeal',
    img: company7
  },
]




export default function WorkExperience() {
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Nossos projetos recentes:</h1>
              <div className="experience-cards-div">
              <div style={{
                      display: 'flex',
                      flexWrap: 'wrap'
              }}>
                {worksDone.map((card, i) => {
                  return (
                    <div className="work-container" key={i}>
                      <p className="work-name">{card.companyName}</p>
                      <img
                        className="work-img"
                        src={card.img} 
                      />
                    </div>
                  );
                })}
                  </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
