import React, { Component } from 'react';
import { appDataHelper } from "../../helpers/appDataHelper";
import PrimaryNavigation from "../../views/partials/navigation/PrimaryNavigation";
import SVG from 'react-inlinesvg';

class SidebarComponent extends Component<{}, {}> {

    render() : JSX.Element {
        return (
            <div className="vp-sidebar">

                {appDataHelper('sidebar_image') &&
                    <section className="vp-sidebar-image">
                        <img src={`/storage/${appDataHelper('sidebar_image')}`} className="img-responsive"/>
                    </section>
                }

                <section className="vp-sidebar-title">
                    {appDataHelper('h1_title') &&
                        <h1>{appDataHelper('h1_title')}</h1>
                    }
                    {appDataHelper('h2_sub_title') &&
                        <h2>{appDataHelper('h2_sub_title')}</h2>
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
                    <ul>
                        {appDataHelper('social_link_facebook') &&
                        <li>
                            <a href={appDataHelper('social_link_facebook')} target="_blank" rel="nofollow">
                                <SVG src="/icon/ic_facebook_gray.svg" onLoad={(src) => {
                                }}>Facebook</SVG>
                            </a>
                        </li>
                        }
                        {appDataHelper('social_link_youtube') &&
                        <li>
                            <a href={appDataHelper('social_link_youtube')} target="_blank" rel="nofollow">
                                <SVG src="/icon/if_youtube_circle_gray_107133.svg" onLoad={(src) => {
                                }}>Youtube</SVG>
                            </a>
                        </li>
                        }
                        {appDataHelper('social_link_linkedin') &&
                        <li>
                            <a href={appDataHelper('social_link_linkedin')} target="_blank" rel="nofollow">
                                <SVG src="/icon/if_linkedin_circle_gray_107149.svg" onLoad={(src) => {
                                }}>LinkedIn</SVG>
                            </a>
                        </li>
                        }
                        {appDataHelper('social_link_instagram') &&
                        <li>
                            <a href={appDataHelper('social_link_instagram')} target="_blank" rel="nofollow">
                                <SVG src="/icon/if_instagram_circle_gray_107138.svg" onLoad={(src) => {
                                }}>Instagram</SVG>
                            </a>
                        </li>
                        }
                    </ul>
                </section>

            </div>
        )
    };

}

export default SidebarComponent;