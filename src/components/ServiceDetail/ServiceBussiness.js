import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import btn_gradient_arrow from "../../assets/btn-gradient-arrow.png";

function ServiceBussiness({ title, detail }) {
  const detailsArray = Object.values(detail);
  const getServiceCards = (item) => {
    const cards = item?.serviceCard?.map((card, index) => {
      return (
        <div
          key={index}
          className="mt-5 serviceHomeCard d-flex align-items-center flex-column"
        >
          <div className="serviceHomeCardImg">
            <img
              src={card?.fields?.icon?.fields?.file?.url}
              alt={card?.fields?.title}
            />
          </div>
          <h5 className="mt-3">{card?.fields?.title}</h5>
          <div className="serviceListContent text-center mt-2">
            {documentToReactComponents(card?.fields?.description)}
          </div>
          {
            (card?.fields?.link)
              ? <a className="mt-2" href={card?.fields?.link}>
                <img src={btn_gradient_arrow} className="img-size" alt="box" />
              </a>
              : ''
          }
        </div>
      );
    });
    return cards;
  };

  return (
    <section className="servicePageHome mt-5">
      <Container fluid className="p-0">
        <Row>
          <Col lg={12}>
            <div className="wrapper py-4 serviceContentHome">
              <div className="serviceContentDet ">
                <div className="serviceDetBussinessTitle ">
                  <div className="norWordBreak">
                    {documentToReactComponents(title)}
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col className="rightBar detailPageServices">
            <div className="serviceHomeCardBox">
              {detailsArray?.map((item, index) => (
                <React.Fragment key={index}>
                  {getServiceCards(item)}
                </React.Fragment>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ServiceBussiness;
