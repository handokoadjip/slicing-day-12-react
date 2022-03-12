import React, { Component } from "react";
import { Header, Main } from "components/atoms";
import {
  Navbar,
  SectionHeader,
  SectionT100Black,
  SectionStreetTwin,
  SectionWatch1,
  SectionWatch2,
  SectionShop,
  SectionGallery,
  Footer,
} from "components/molecules";

class index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Daniel Moulin | Triumph";
  }

  render() {
    return (
      <>
        <Header>
          <Navbar />
          <SectionHeader />
        </Header>
        <Main>
          <SectionT100Black />
          <SectionStreetTwin />
          <SectionWatch1 />
          <SectionWatch2 />
          <SectionShop />
          <SectionGallery />
        </Main>
        <Footer />
      </>
    );
  }
}

export default index;
