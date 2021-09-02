import webDesignMobile from "../assets/home/mobile/image-web-design.jpg"
import appDesignMobile from "../assets/home/mobile/image-app-design.jpg"
import graphicDesignMobile from "../assets/home/mobile/image-graphic-design.jpg"
import webDesignTablet from "../assets/home/tablet/image-web-design.jpg"
import appDesignTablet from "../assets/home/tablet/image-app-design.jpg"
import graphicDesignTablet from "../assets/home/tablet/image-graphic-design.jpg"
import webDesignDesktop from "../assets/home/desktop/image-web-design-small.jpg"
import appDesignDesktop from "../assets/home/desktop/image-app-design.jpg"
import graphicDesignDesktop from "../assets/home/desktop/image-graphic-design.jpg"

export const categories = [
{
    category: "web-design",
    data: {
        title:  "web design",
        url: "/projects/web-design",
        images: {
            mobile: webDesignMobile,
            tablet: webDesignTablet,
            desktop: webDesignDesktop,
            desktop2x :"/desktop/image-web-design-large.jpg"
        }
    }
},
{
    category: "app-design",
    data: {
        title:  "app design",
        url: "/projects/app-design",
        images: {
            mobile: appDesignMobile,
            tablet: appDesignTablet,
            desktop: appDesignDesktop,
            desktop2x :"/desktop/image-web-design-large.jpg"
        }
    }
},
{
    category: "graphic-design",
    data: {
        title:  "graphic design",
        url: "/projects/graphic-design",
        images: {
            mobile: graphicDesignMobile,
            tablet: graphicDesignTablet,
            desktop: graphicDesignDesktop,
            desktop2x :"/desktop/image-web-design-large.jpg"
        }
    }
}]