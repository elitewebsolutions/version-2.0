import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function OurPartners({ home }) {
  const gallery = (item) => {
    const galleryImage = item.fields.bannerPhotos?.map((image, key) => {
      return (
        <img
          key={key}
          src={image?.fields?.file?.url}
          alt={image?.fields?.title}
        />
      );
    });
    return galleryImage;
  };
  return (
    <section className="PartnerHomePage ">
      <div className="wrapper">
        <Container fluid className="p-0">
          <Row className="justify-content-between align-items-center">
            <Col xl={4}>
              <div className="partnerTitle">
                <div className="partnerInnerTitle">
                  {home?.items?.map((item, index) => (
                    <div key={index}>
                      {documentToReactComponents(item.fields.bannerSix)}
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col xl={7}>
              <div className="partnerLogo">
                <Row style={{ textAlign: "center" }}>
                  {home?.items?.map((item, key) => (
                    <React.Fragment key={key}>
                      <Col className="singlePartnerLogo">{gallery(item)}</Col>
                    </React.Fragment>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default OurPartners;
