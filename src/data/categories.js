import bgPatternIntroMobile from "../assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg"
import bgPatternIntroTablet from "../assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg"

//web design images
import webDesignMobile from "../assets/home/mobile/image-web-design.jpg"
import webDesignTablet from "../assets/home/tablet/image-web-design.jpg"
import webDesignDesktop from "../assets/home/desktop/image-web-design-small.jpg"
import webBgPatternIntroDesktop from "../assets/web-design/desktop/bg-pattern-intro-web.svg"
import express from "../assets/web-design/desktop/image-express.jpg"
import transfer from "../assets/web-design/desktop/image-transfer.jpg"
import photon from "../assets/web-design/desktop/image-photon.jpg"
import builder from "../assets/web-design/desktop/image-builder.jpg"
import blogr from "../assets/web-design/desktop/image-blogr.jpg"
import camp from "../assets/web-design/desktop/image-camp.jpg"

//app design images
import appDesignMobile from "../assets/home/mobile/image-app-design.jpg"
import appDesignTablet from "../assets/home/tablet/image-app-design.jpg"
import appDesignDesktop from "../assets/home/desktop/image-app-design.jpg"
import appBgPatternIntroDesktop from "../assets/app-design/desktop/bg-pattern-intro-app.svg"
import airfilter from "../assets/app-design/desktop/image-airfilter.jpg"
import eyecam from "../assets/app-design/desktop/image-eyecam.jpg"
import faceit from "../assets/app-design/desktop/image-faceit.jpg"
import todo from "../assets/app-design/desktop/image-todo.jpg"
import loopstudios  from "../assets/app-design/desktop/image-loopstudios.jpg"

//graphic design images
import graphicDesignTablet from "../assets/home/tablet/image-graphic-design.jpg"
import graphicDesignMobile from "../assets/home/mobile/image-graphic-design.jpg"
import graphicDesignDesktop from "../assets/home/desktop/image-graphic-design.jpg"
import graphicBgPatternIntroDesktop from "../assets/graphic-design/desktop/bg-pattern-intro-graphic.svg"
import change from "../assets/graphic-design/desktop/image-change.jpg"
import boxedwater from "../assets/graphic-design/desktop/image-boxed-water.jpg"
import science from "../assets/graphic-design/desktop/image-science.jpg"

export const categories = [
{
    category: "web-design",
    title:  "web design",
    description: "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    url: "/projects/web-design",
    images: {
        mobile: webDesignMobile,
        tablet: webDesignTablet,
        desktop: webDesignDesktop,
        desktop2x :"/desktop/image-web-design-large.jpg",
        bgIntro: {
            mobile: bgPatternIntroMobile,
            tablet: bgPatternIntroTablet,
            desktop: webBgPatternIntroDesktop
        }
    },
    projects:
        [ {
            name: "Express",
            description: "A multi-carrier shipping website for ecommerce businesses",
            image: express
        },
        {
            name: "Transfer",
            description: "Site for low-cost money transfers and sending money within seconds",
            image: transfer
        },
        {
            name: "Photon",
            description: "A state-of-the-art music player with high-resolution audio and DSP effects",
            image: photon
        },
        {
            name: "Builder",
            description: "Connects users with local contractors based on their location",
            image: builder
        },
        {
            name: "Blogr",
            description: "Blogr is a platform for creating an online blog or publication",
            image: blogr
        },
        {
            name: "Camp",
            description: "Get expert training in coding, data, design, and digital marketing",
            image: camp
        }
    ]
},
{
    category: "app-design",
    title:  "app design",
    description: "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
    url: "/projects/app-design",
    images: {
        mobile: appDesignMobile,
        tablet: appDesignTablet,
        desktop: appDesignDesktop,
        desktop2x :"/desktop/image-web-design-large.jpg",
        bgIntro: {
            mobile: bgPatternIntroMobile,
            tablet: bgPatternIntroTablet,
            desktop: appBgPatternIntroDesktop
        }
    },
    projects:[
        {
            name: "Airfilter",
            description: "Solving the problem of poor indoor air quality by filtering the air",
            image: airfilter
        },
        {
            name: "Eyecam",
            description: "Product that lets you edit your favorite photos and videos at any time",
            image: eyecam
        },
        {
            name: "Faceit",
            description: "Get to meet your favorite internet superstar with the faceit app",
            image: faceit
        },
        {
            name: "Todo",
            description: "A todo app that features cloud sync with light and dark mode",
            image: todo
        },
        {
            name: "Loopstudios",
            description: "A VR experience app made for Loopstudios",
            image: loopstudios
        }
    ]
},
{
    category: "graphic-design",
    title:  "graphic design",
    description: "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
    url: "/projects/graphic-design",
    images: {
        mobile: graphicDesignMobile,
        tablet: graphicDesignTablet,
        desktop: graphicDesignDesktop,
        desktop2x :"/desktop/image-web-design-large.jpg",
        bgIntro: {
            mobile: bgPatternIntroMobile,
            tablet: bgPatternIntroTablet,
            desktop: graphicBgPatternIntroDesktop
        }
    },
    projects: [
        {
            name: "Tim Brown",
            description: "A book cover designed for Tim Brown’s new release, ‘Change’",
            image: change
        },
        {
            name: "Boxed water",
            description: "A simple packaging concept made for Boxed Water",
            image: boxedwater
        },
        {
            name: "Science!",
            description: "A poster made in collaboration with the Federal Art Project",
            image: science
        }
    ]
}]