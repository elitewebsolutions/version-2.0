import React from "react";
import { useCallback, useState } from "react";
import { Container } from "react-bootstrap";
import "./home.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { data } from "../../utils/testnomial";
function Testnomial() {
  const [index, setIndex] = useState(0);
  const handleTestnomialLeft = useCallback(() => {
    if (index === 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);


  const handleTestnomial = useCallback(() => {
    // console.log(data.length + '  ' + index );
    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const {content,authorName,authorDes} = data[index];

  return (
    <section className="testimonialHomePage mb-5">
      <div className="wrapper">
        <Container fluid className="p-0">
            <div className="testnomials">
              <div className="testnomials-heading text-center">
                <h2>Testimonials</h2>
              </div>

              <div
                className="testnomialsBox mx-auto"
              >
                <div
                  className="testnomialCard position-relative px-5 py-5 rounded-3"
                  style={{ backgroundColor: "#fff" }}
                >
                <div
                    className="bg-dark text-white rounded-circle left-circle d-flex justify-content-center align-items-center"
                    style={{
                      width: "50px",
                      height: "50px",
                      cursor: "pointer",
                      position: "absolute",
                      left: "-1.5em",
                      top: "50%",
                      transform: "translateY(-50%)",
                      zIndex: "1",
                    }}
                    onClick={() => handleTestnomialLeft()}
                  >
                    <BiChevronLeft
                      size={25}
                      color={"white"}
                      style={{ position: "absolute" }}
                    />
                  </div>

                  <div className="testnomialCard-content1">
                    <p>"
                  {content}"
                    </p>
                    <div class="testimomial-by">
                      <h6>- {authorName}</h6>
                      <h6>{authorDes}</h6>
                    </div>
                  </div>
                  <div
                    className="bg-dark text-white rounded-circle right-circle d-flex justify-content-center align-items-center"
                    style={{
                      width: "50px",
                      height: "50px",
                      cursor: "pointer",
                      position: "absolute",
                      right: "-1.5em",
                      top: "50%",
                      transform: "translateY(-50%)",
                      zIndex: "1",
                    }}
                    onClick={() => handleTestnomial()}
                  >
                    <BiChevronRight
                      size={25}
                      color={"white"}
                      style={{ position: "absolute" }}
                    />
                  </div>
                </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Testnomial;
