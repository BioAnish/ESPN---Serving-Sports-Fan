import React from "react";
import style from "./DialogBox.module.scss";
import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import Button from "../Button/Button";

const DialogBox = () => {
  return (
    <>
      <section className={style.dialogBox}>
        <header className={style.dialogBoxHeader}>
          <button className={style.closeButton}>
            <div className={style.closeButtonWrap}>
              <IoMdClose className={style.icon} />
            </div>
          </button>
        </header>
        <div className={style.dialogBoxContent}>
          <div className={style.WatchPaywall}>
            <div className={style.WatchPaywall__Background}>
              <img
                className={style.WatchPaywall__Background__Image}
                src="https://secure.espncdn.com/watchespn/images/paywall/espn-background.jpg"
              />
            </div>
            <div className={style.WatchPaywall__Logo}>
              <img
                className={style.WatchPaywall__Logo__Image}
                src="https://secure.espncdn.com/watchespn/images/espnplus/paywalls/ESPN_PLUS.logo.png"
              />
            </div>
            <div className={style.WatchPaywall__Content}>
              <p className={style.WatchPaywall__title}>
                Formula 1 Gulf Air Bahrain Grand Prix
              </p>
              <p className={style.WatchPaywall__subtitle}>
                Saturday, March 2 | 9:55 AM
              </p>
              <p className={style.WatchPaywall__login}>
                Already have an account?
                <a className={style.login}> Log In</a>
              </p>
              <div className={style.WatchPaywall__Group}>
                <div className={style.WatchPaywall__Group__Front}>
                  <img
                    className={style.WatchPaywall__Image}
                    src="https://secure.espncdn.com/watchespn/images/espnplus/paywalls/ESPN_PLUS.logo.png"
                  />
                  <p className={style.WatchPaywall__headline}>
                    ESPN+ Subscription
                  </p>
                  <ul className={style.WatchPaywall__BulletList}>
                    <li className={style.WatchPaywall__BulletItem}>
                      <FaCheck className={style.check} />
                      <p>
                        Thousands of live events from the UFC, NHL, and more
                      </p>
                    </li>
                    <li className={style.WatchPaywall__BulletItem}>
                      <FaCheck className={style.check} />
                      <p>The complete award-winning 30 for 30 library</p>
                    </li>
                  </ul>
                  <button className={style.detailsButton}>Details</button>
                  <p className={style.WatchPaywall__price}>
                    <b className={style.bold}>$10.99</b>/ month
                  </p>
                  <p className={style.WatchPaywall__subtext}>
                    Or save 15%* and pay $109.99/year
                  </p>
                  <Button variant="yellow">Get ESPN+</Button>
                  <p className={style.WatchPaywall__subtext}>
                    *Savings compared to monthly for 12 months. Your ESPN+
                    monthly plan will automatically renew each month at the
                    then-current price (currently $10.99/month), plus tax where
                    applicable. Cancel anytime, effective at the end of your
                    billing period. Subject to
                    <a> terms</a>. Not for commercial use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DialogBox;
