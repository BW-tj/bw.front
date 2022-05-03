import React from "react";
import Footer from "../../components/Footer";
import { MobileCategoriesSlider } from "../../components/MobileCategoriesSlider";
import MobileFooter from "../../components/MobileFooter";
import MobileNavigation from "../../components/MobileNavigation";
import SocialIcons from "../../components/SocialIcons";
import styles from "./MobileLayout.module.scss";

const MobileLayout = ({ children, categories, noFooter, noSocialMedia }) => {
  return (
    <div className={styles.root}>
      {!noSocialMedia && <SocialIcons />}

      <MobileFooter />

      <div
        style={{
          position: "fixed",
          backgroundColor: "#fff",
          zIndex: 100,
          top: 0,
        }}
      >
        <MobileNavigation categories={categories} />
      </div>

      <div className={styles.content}>{children}</div>

      {!noFooter && <Footer />}
    </div>
  );
};

export default MobileLayout;
