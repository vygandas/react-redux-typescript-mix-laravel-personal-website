import React, { Component } from 'react';
import { appDataHelper } from "../../helpers/appDataHelper";
import PrimaryNavigation from "../../views/partials/navigation/PrimaryNavigation";
import SVG from 'react-inlinesvg';

class SidebarComponent extends Component<{}, {}> {

    render() : JSX.Element {
        return (
            <div className="vp-sidebar">

                <div className="vp-sidebar-inner">

                    {appDataHelper('sidebar_image') &&
                    <section className="vp-sidebar-image">
                        <img src={`/storage/${appDataHelper('sidebar_image')}`} className="img-responsive img-rounded"/>
                    </section>
                    }

                    <section className="vp-sidebar-title">
                        {appDataHelper('h1_title') &&
                        <h1 className="headline-1">{appDataHelper('h1_title')}</h1>
                        }
                        {appDataHelper('h2_sub_title') &&
                        <h2 className="headline-2">{appDataHelper('h2_sub_title')}</h2>
                        }
                    </section>

                    {appDataHelper('short_summary') &&
                    <article className="vp-sidebar-short-summary"
                             dangerouslySetInnerHTML={{__html: appDataHelper('short_summary')}}/>
                    }

                    <section className="vp-sidebar-navigation">
                        <PrimaryNavigation />
                    </section>

                    <section className="vp-sidebar-contacts">
                        <ul className="main">
                            {appDataHelper('phone') &&
                            <li>
                                <a href={`tel:${appDataHelper('phone')}`} target="_blank" rel="nofollow">
                                    <i className="fa fa-phone"/> {appDataHelper('phone')}
                                </a>
                            </li>
                            }
                            {appDataHelper('email') &&
                            <li>
                                <a href={`mailto:${appDataHelper('email')}`} target="_blank" rel="nofollow">
                                    <i className="fa fa-envelope"/> {appDataHelper('email')}
                                </a>
                            </li>
                            }
                        </ul>

                        <ul className="social">
                            {appDataHelper('social_link_facebook') &&
                            <li>
                                <a href={appDataHelper('social_link_facebook')} target="_blank" rel="nofollow">
                                    <i className="fa fa-facebook"/>
                                </a>
                            </li>
                            }
                            {appDataHelper('social_link_youtube') &&
                            <li>
                                <a href={appDataHelper('social_link_youtube')} target="_blank" rel="nofollow">
                                    <i className="fa fa-youtube-play"/>
                                </a>
                            </li>
                            }
                            {appDataHelper('social_link_linkedin') &&
                            <li>
                                <a href={appDataHelper('social_link_linkedin')} target="_blank" rel="nofollow">
                                    <i className="fa fa-linkedin"/>
                                </a>
                            </li>
                            }
                            {appDataHelper('social_link_instagram') &&
                            <li>
                                <a href={appDataHelper('social_link_instagram')} target="_blank" rel="nofollow">
                                    <i className="fa fa-instagram"/>
                                </a>
                            </li>
                            }
                        </ul>
                    </section>

                </div>

            </div>
        )
    };

}

export default SidebarComponent;