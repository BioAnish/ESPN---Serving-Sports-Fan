"use client";
import React, { useState } from "react";
import style from "./page.module.scss";
import Button from "@/Components/Atoms/Button/Button";
import { IoIosArrowForward } from "react-icons/io";
import { GiPlayButton } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
import DialogBox from "@/Components/Atoms/DialogBox/DialogBox";

const EspnPlusHomePage = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.ResponsiveWrapper}>
          <div className={style.Hero__Container}>
            <div className={style.Hero__Information}>
              <h1 className={style.title}>
                Step Up Your Streaming Game with ESPN+
              </h1>
              <h4 className={style.subTitle}>
                Sign up now to access live sports, the full 30 for 30 library,
                and originals
              </h4>
              <h4 className={style.subText}>Only $10.99 a month</h4>
              <div className={style.buttonWrap}>
                <Button variant="yellow" >Sign Up Now</Button>
              </div>
            </div>
            <picture>
              <source
                srcSet="https://artwork.espncdn.com/promos/a4cae422-437a-4e46-b08c-bb6470480369/1x1Feature/1440_20240229140609.jpg"
                media="(max-width: 767px)"
              />
              <source srcSet="https://artwork.espncdn.com/promos/a4cae422-437a-4e46-b08c-bb6470480369/16x9Feature/3840x2160_20240229140602.jpg" />
              <img
                alt=""
                className={style.showImage}
                data-mptype="image"
                src="https://artwork.espncdn.com/promos/a4cae422-437a-4e46-b08c-bb6470480369/1x1Feature/1440_20240229140609.jpg"
              />
            </picture>
          </div>
        </div>
        <section className={style.BucketsContainer}>
          <div>
            <section className={` ${style.Carousel} ${style.Carousel__watch}`}>
              <div className={style.Carousel__Header}>
                <a className={style.Anchor__Link} tabIndex={0}>
                  <h3>Live</h3>
                </a>
                <a className={style.Anchor__Link} tabIndex={0}>
                  <span className={style.Carousel__SeeAll}>See All</span>
                </a>
              </div>
              <div className={style.Carousel__Wrapper}>
                <button
                  className={`${style.CarouselArrow__right} ${style.CarouselArrow}`}
                >
                  <IoIosArrowForward
                    className={`${style.arrow} ${style.rightArrow}`}
                  />
                </button>
                <div className={style.Carousel__Row}>
                  <div className={style.Carousel__Outer}>
                    <ul className={style.Carousel__Inner}>
                      <li className={style.carouselSlide}>
                        <div>
                          <div className={style.watchTile}>
                            <a tabIndex={0}></a>
                            <div className={` ${style.mediaPlaceHolder} ${style.MediaPlaceholder__button_hover}`}>
                              <figure>
                                <div className={style.ratioFrame}></div>
                                <div className={style.imageWrapper}>
                                  <picture>
                                    <source
                                      srcSet="https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=544&amp;height=306, https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=1088&amp;height=612 2x"
                                      media="(min-width: 1440px)"
                                    />
                                    <source
                                      srcSet="https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=464&amp;height=261, https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=928&amp;height=522 2x"
                                      media="(min-width: 414px) and (max-width: 1439px)"
                                    />
                                    <source srcSet="https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=240&amp;height=135, https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=480&amp;height=270 2x" />
                                    <img
                                      aria-hidden="false"
                                      className=""
                                      data-mptype="image"
                                      src="https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=464&amp;height=261"
                                    />
                                  </picture>
                                </div>
                              </figure>
                              <div className={style.MediaPlaceholder__Overlay}>
                                <div className={style.MediaPlaceholder__Button}>
                                <GiPlayButton className={style.playButton}/>
                                </div>
                                <div className={style.MediaPlaceholder__Pill}>Live</div>
                              </div>
                            </div>
                            <div className={style.WatchTile__Content}>
                              <div className={style.WatchTile__TitleMeta}>
                                <div>
                                  <h2 className={style.WatchTile__Title}>
                                    <span>Cognizant Classic in The Palm Beaches: Main Feed (Second Round)</span>
                                  </h2>
                                  <div className={style.WatchTile__Meta}>ESPN+ • PGA TOUR</div>
                                </div>
                                <div className={style.WatchTile_ContinueWatching}>
                                  <button className={style.dotButton}>
                                  <BsThreeDots className={style.dots}/>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.carouselSlide}>
                        <div>
                          <div className={style.watchTile}>
                            <a tabIndex={0}></a>
                            <div className={` ${style.mediaPlaceHolder} ${style.MediaPlaceholder__button_hover}`}>
                              <figure>
                                <div className={style.ratioFrame}></div>
                                <div className={style.imageWrapper}>
                                <picture><source srcSet="https://s.secure.espncdn.com/stitcher/artwork/collections/airings/4fdc0b82-fd92-4d53-85b0-4f725af1ab10/16x9.jpg?timestamp=202403010009&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=544&amp;height=306, https://s.secure.espncdn.com/stitcher/artwork/collections/airings/4fdc0b82-fd92-4d53-85b0-4f725af1ab10/16x9.jpg?timestamp=202403010009&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=1088&amp;height=612 2x" media="(min-width: 1440px)"/><source srcSet="https://s.secure.espncdn.com/stitcher/artwork/collections/airings/4fdc0b82-fd92-4d53-85b0-4f725af1ab10/16x9.jpg?timestamp=202403010009&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=464&amp;height=261, https://s.secure.espncdn.com/stitcher/artwork/collections/airings/4fdc0b82-fd92-4d53-85b0-4f725af1ab10/16x9.jpg?timestamp=202403010009&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=928&amp;height=522 2x" media="(min-width: 414px) and (max-width: 1439px)"/><source srcSet="https://s.secure.espncdn.com/stitcher/artwork/collections/airings/4fdc0b82-fd92-4d53-85b0-4f725af1ab10/16x9.jpg?timestamp=202403010009&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=240&amp;height=135, https://s.secure.espncdn.com/stitcher/artwork/collections/airings/4fdc0b82-fd92-4d53-85b0-4f725af1ab10/16x9.jpg?timestamp=202403010009&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=480&amp;height=270 2x"/><img aria-hidden="false" className="" data-mptype="image" src="https://s.secure.espncdn.com/stitcher/artwork/collections/airings/4fdc0b82-fd92-4d53-85b0-4f725af1ab10/16x9.jpg?timestamp=202403010009&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=464&amp;height=261"/></picture>
                                </div>
                              </figure>
                              <div className={style.MediaPlaceholder__Overlay}>
                                <div className={style.MediaPlaceholder__Button}>
                                <GiPlayButton className={style.playButton}/>
                                </div>
                                <div className={style.MediaPlaceholder__Pill}>Live</div>
                              </div>
                            </div>
                            <div className={style.WatchTile__Content}>
                              <div className={style.WatchTile__TitleMeta}>
                                <div>
                                  <h2 className={style.WatchTile__Title}>
                                    <span>Cognizant Classic in The Palm Beaches: Main Feed (Second Round)</span>
                                  </h2>
                                  <div className={style.WatchTile__Meta}>ESPN+ • PGA TOUR</div>
                                </div>
                                <div className={style.WatchTile_ContinueWatching}>
                                  <button className={style.dotButton}>
                                  <BsThreeDots className={style.dots}/>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.carouselSlide}>
                        <div>
                          <div className={style.watchTile}>
                            <a tabIndex={0}></a>
                            <div className={` ${style.mediaPlaceHolder} ${style.MediaPlaceholder__button_hover}`}>
                              <figure>
                                <div className={style.ratioFrame}></div>
                                <div className={style.imageWrapper}>
                                  <picture>
                                    <source
                                      srcSet="https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=544&amp;height=306, https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=1088&amp;height=612 2x"
                                      media="(min-width: 1440px)"
                                    />
                                    <source
                                      srcSet="https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=464&amp;height=261, https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=928&amp;height=522 2x"
                                      media="(min-width: 414px) and (max-width: 1439px)"
                                    />
                                    <source srcSet="https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=240&amp;height=135, https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=480&amp;height=270 2x" />
                                    <img
                                      aria-hidden="false"
                                      className=""
                                      data-mptype="image"
                                      src="https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=464&amp;height=261"
                                    />
                                  </picture>
                                </div>
                              </figure>
                              <div className={style.MediaPlaceholder__Overlay}>
                                <div className={style.MediaPlaceholder__Button}>
                                <GiPlayButton className={style.playButton}/>
                                </div>
                                <div className={style.MediaPlaceholder__Pill}>Live</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.carouselSlide}>
                        <div>
                          <div className={style.watchTile}>
                            <a tabIndex={0}></a>
                            <div className={` ${style.mediaPlaceHolder} ${style.MediaPlaceholder__button_hover}`}>
                              <figure>
                                <div className={style.ratioFrame}></div>
                                <div className={style.imageWrapper}>
                                  <picture>
                                    <source
                                      srcSet="https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=544&amp;height=306, https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=1088&amp;height=612 2x"
                                      media="(min-width: 1440px)"
                                    />
                                    <source
                                      srcSet="https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=464&amp;height=261, https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=928&amp;height=522 2x"
                                      media="(min-width: 414px) and (max-width: 1439px)"
                                    />
                                    <source srcSet="https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=240&amp;height=135, https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=480&amp;height=270 2x" />
                                    <img
                                      aria-hidden="false"
                                      className=""
                                      data-mptype="image"
                                      src="https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=464&amp;height=261"
                                    />
                                  </picture>
                                </div>
                              </figure>
                              <div className={style.MediaPlaceholder__Overlay}>
                                <div className={style.MediaPlaceholder__Button}>
                                <GiPlayButton className={style.playButton}/>
                                </div>
                                <div className={style.MediaPlaceholder__Pill}>Live</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.carouselSlide}>
                        <div>
                          <div className={style.watchTile}>
                            <a tabIndex={0}></a>
                            <div className={` ${style.mediaPlaceHolder} ${style.MediaPlaceholder__button_hover}`}>
                              <figure>
                                <div className={style.ratioFrame}></div>
                                <div className={style.imageWrapper}>
                                  <picture>
                                    <source
                                      srcSet="https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=544&amp;height=306, https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=1088&amp;height=612 2x"
                                      media="(min-width: 1440px)"
                                    />
                                    <source
                                      srcSet="https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=464&amp;height=261, https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=928&amp;height=522 2x"
                                      media="(min-width: 414px) and (max-width: 1439px)"
                                    />
                                    <source srcSet="https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=240&amp;height=135, https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=480&amp;height=270 2x" />
                                    <img
                                      aria-hidden="false"
                                      className=""
                                      data-mptype="image"
                                      src="https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=464&amp;height=261"
                                    />
                                  </picture>
                                </div>
                              </figure>
                              <div className={style.MediaPlaceholder__Overlay}>
                                <div className={style.MediaPlaceholder__Button}>
                                <GiPlayButton className={style.playButton}/>
                                </div>
                                <div className={style.MediaPlaceholder__Pill}>Live</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.carouselSlide}>
                        <div>
                          <div className={style.watchTile}>
                            <a tabIndex={0}></a>
                            <div className={` ${style.mediaPlaceHolder} ${style.MediaPlaceholder__button_hover}`}>
                              <figure>
                                <div className={style.ratioFrame}></div>
                                <div className={style.imageWrapper}>
                                  <picture>
                                    <source
                                      srcSet="https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=544&amp;height=306, https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=1088&amp;height=612 2x"
                                      media="(min-width: 1440px)"
                                    />
                                    <source
                                      srcSet="https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=464&amp;height=261, https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=928&amp;height=522 2x"
                                      media="(min-width: 414px) and (max-width: 1439px)"
                                    />
                                    <source srcSet="https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=240&amp;height=135, https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=480&amp;height=270 2x" />
                                    <img
                                      aria-hidden="false"
                                      className=""
                                      data-mptype="image"
                                      src="https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a7c0a8ea-8418-44d9-8c96-61ca741aef9f/16x9.jpg?timestamp=202402271125&amp;showBadge=true&amp;cb=12&amp;package=ESPN_PLUS&amp;width=464&amp;height=261"
                                    />
                                  </picture>
                                </div>
                              </figure>
                              <div className={style.MediaPlaceholder__Overlay}>
                                <div className={style.MediaPlaceholder__Button}>
                                <GiPlayButton className={style.playButton}/>
                                </div>
                                <div className={style.MediaPlaceholder__Pill}>Live</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default EspnPlusHomePage;
