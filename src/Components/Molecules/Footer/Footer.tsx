import React from "react";
import style from "./Footer.module.scss";
import Card from "@/Components/Atoms/Card/Card";

const Footer = () => {
  return (
    <>
      <Card padding={"12px"}>
        <div className={style.PageFooter__Footer}>
          <div className={style.PageFooter__Logo__Wrapper}>
            <img src="https://a.espncdn.com/redesign/assets/img/logos/espn-404@2x.png" />
          </div>
          <section className={style.LegalFooter}>
            <div className={style.LegalFooter__Links}>
              <ul className={style.LegalFooter__Links__List}>
                <li className={style.LegalFooter__Links__Item}>
                  <a
                    className={style.LegalFooter__Link}
                    tabIndex={0}
                    href="https://disneytermsofuse.com/english/"
                  >
                    Terms of Use
                  </a>
                </li>
                <li className={style.LegalFooter__Links__Item}>
                  <a
                    className={style.LegalFooter__Link}
                    tabIndex={0}
                    href="https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className={style.LegalFooter__Links__Item}>
                  <a
                    className={style.LegalFooter__Link}
                    tabIndex={0}
                    href="https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-us-state-privacy-rights/"
                  >
                    Your US State Privacy Rights
                  </a>
                </li>
                <li className={style.LegalFooter__Links__Item}>
                  <a
                    className={style.LegalFooter__Link}
                    tabIndex={0}
                    href="https://disneyprivacycenter.com/kids-privacy-policy/english/"
                  >
                    Children's Online Privacy Policy
                  </a>
                </li>
                <li className={style.LegalFooter__Links__Item}>
                  <a
                    className={style.LegalFooter__Link}
                    tabIndex={0}
                    href="http://preferences-mgr.truste.com/?type=espn&amp;affiliateId=148"
                  >
                    Interest-Based Ads
                  </a>
                </li>
                <li className={style.LegalFooter__Links__Item}>
                  <a
                    className={style.LegalFooter__Link}
                    tabIndex={0}
                    href="http://www.nielsen.com/digitalprivacy"
                  >
                    About Nielsen Measurement
                  </a>
                </li>
                <li className={style.LegalFooter__Links__Item}>
                  <a
                    className={style.LegalFooter__Link}
                    tabIndex={0}
                    href="https://privacy.thewaltdisneycompany.com/en/dnssmpi/"
                  >
                    Do Not Sell or Share My Personal Information
                  </a>
                </li>
                <li className={style.LegalFooter__Links__Item}>
                  <a
                    className={style.LegalFooter__Link}
                    tabIndex={0}
                    href="https://www.espn.com/espn/news/story?page=contact-index"
                  >
                    Contact Us
                  </a>
                </li>
                <li className={style.LegalFooter__Links__Item}>
                  <a
                    className={style.LegalFooter__Link}
                    tabIndex={0}
                    href="https://disneyadsales.com/"
                  >
                    Disney Ad Sales Site
                  </a>
                </li>
                <li className={style.LegalFooter__Links__Item}>
                  <a
                    className={style.LegalFooter__Link}
                    tabIndex={0}
                    href="https://jobs.disneycareers.com/espn"
                  >
                    Work for ESPN
                  </a>
                </li>
                <li className={style.LegalFooter__Links__Item}>
                  <a
                    className={style.LegalFooter__Link}
                    tabIndex={0}
                    href="https://www.espn.com/espn/corrections"
                  >
                    Corrections
                  </a>
                </li>
              </ul>
            </div>
            <div className={style.LegalFooter__Copyright}>
              ESPN BET is owned and operated by PENN Entertainment, Inc. and its
              subsidiaries ('PENN'). ESPN BET is available in states where PENN
              is licensed to offer sports wagering. Must be 21+ to wager. If you
              or someone you know has a gambling problem and wants help, call
              1-800-GAMBLER.
            </div>
            <div className={style.LegalFooter__Copyright}>Copyright: © 2024 ESPN Enterprises, Inc. All rights reserved.</div>
          </section>
        </div>
      </Card>
    </>
  );
};

export default Footer;
