import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "../Button/Button";
import "./pricing.css";
import { BsCheckCircleFill } from "react-icons/bs";
function PricingTable() {
    return (
        <section className="pricingTable">
            <div className="wrapper">
                <Container fluid className="p-0">
                    <Row>
                        <Col lg={3} className="mb-4">
                            <div className="pricingBox1">
                                <div className="pricingGarentyBox d-flex flex-column justify-content-center gap-4">
                                    <span>30-Day Guarantee</span>
                                    <span>Platform Agnostic</span>
                                    <span>24/7 Security Team</span>
                                </div>

                                <div className="my-4 d-flex flex-column " style={{ gap: "13px" }}>
                                    <p className=" ">Site covered</p>
                                    <p className=" ">
                                        Malware & hack removals by our security experts.
                                    </p>
                                    <p className=" ">Malware Removal SLA</p>
                                    <p className=" ">Post-cleanup basic report</p>
                                    <p className=" ">Frequency of advanced security scans</p>
                                    <p className=" ">Website Application Firewall (WAF)</p>
                                    <p className=" ">Blocklist Monitoring & Removal</p>
                                    <p className=" ">SSL Support & Monitoring</p>
                                    <p className=" ">
                                        Stop Hacks (Virtual Patching/Hardening)
                                    </p>
                                    <p className=" ">
                                        Firewall Protection – HTTPS & PCI compliant
                                    </p>
                                    <p className=" ">Advanced DDoS Mitigation</p>
                                    <p className=" ">CDN Speed Enhancement</p>
                                    <p className=" ">High Availability/Load Balancing</p>
                                    <p className=" ">CMS & Hosting Compatibility</p>
                                    <p className=" ">Support Requests</p>
                                </div>

                            </div>
                        </Col>
                        {
                            [...new Array(3)].map((i, index) => {
                                return (
                                    <Col lg={3} className="mb-4" key={index} style={{ width: "18%" }}>
                                        <div className="pricingBox">
                                            <div className="pricingGarentyBox">
                                                <h3 className="text-center">Basic Platform</h3>
                                                <p className="subText mt-3">
                                                    Perfect for bloggers and small site owners requiring
                                                    occasional cleanups with ongoing security scans.
                                                </p>
                                                <h4 className="text-center">$299.99</h4>
                                                <div className="btnBox mt-4">
                                                    <Button fullWidth={"fullWidth"}>Buy now</Button>
                                                </div>

                                            </div>
                                            <div className="my-4 d-flex flex-column  align-items-center " style={{ gap: "17px" }}>
                                                <p className="">1</p>
                                                <p className="">unlimited</p>
                                                <p className="">30hrs</p>
                                                <p className="">
                                                    <BsCheckCircleFill color={"green"} size={23} />
                                                </p>

                                                <p className="">Every 12 hrs</p>
                                                <p className="">
                                                    <BsCheckCircleFill color={"green"} size={23} />
                                                </p>
                                                <p className="">
                                                    <BsCheckCircleFill color={"green"} size={23} />
                                                </p>

                                                <p className="">
                                                    <BsCheckCircleFill color={"green"} size={23} />
                                                </p>
                                                <p className="">
                                                    <BsCheckCircleFill color={"green"} size={23} />
                                                </p>
                                                <p className="">
                                                    <BsCheckCircleFill color={"green"} size={23} />
                                                </p>
                                                <p className="">
                                                    <BsCheckCircleFill color={"green"} size={23} />
                                                </p>
                                                <p className="">
                                                    <BsCheckCircleFill color={"green"} size={23} />
                                                </p>
                                                <p className="">
                                                    <BsCheckCircleFill color={"green"} size={23} />
                                                </p>
                                                <p className="">
                                                    <BsCheckCircleFill color={"green"} size={23} />
                                                </p>
                                                <p className="">Agnostic</p>
                                                <p className="">Ticket</p>
                                            </div>

                                            <div className="pricingBtnDown ">
                                                <div className="btnBox mt-4">
                                                    <Button fullWidth={"fullWidth"}>Buy now</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                        <Col lg={3} className="mb-4" style={{ width: "21%", }}>
                            <div className="pricingBox1" style={{ height: "199vh" }} >
                                <div className="pricingGarentyBox">
                                    <h3 className="text-center">Multi-site &
                                        Custom Plans</h3>
                                    <p className="subText mt-3">
                                        Perfect for bloggers and small site owners requiring
                                        occasional cleanups with ongoing security scans.
                                    </p>
                                    <h4 className="text-center">price upon request</h4>
                                    <div className="btnBox mt-4">
                                        <Button fullWidth={"fullWidth"}>Chat now</Button>
                                    </div>

                                </div>

                                <div className="my-4 d-flex flex-column " style={{ gap: "13px" }}>
                                    <h5>
                                        Call: 1–888–873–0817
                                    </h5>
                                    <p className=" ">Site covered</p>
                                    <p className=" ">Malware Removal SLA</p>
                                    <p className=" ">Post-cleanup basic report</p>
                                    <p className=" ">CDN Speed Enhancement</p>
                                    <p className=" ">Support Requests</p>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default PricingTable;
