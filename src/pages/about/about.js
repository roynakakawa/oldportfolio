import { dataabout, skills, meta } from '../../content_options';
import { Container, Row, Col } from "react-bootstrap";
import { Carouselanm } from "../../components/carousel";
import "./about.css";
import { Helmet } from "react-helmet";

export const About = () => {
    return (
    <div className="about_class">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <div className="about_container"/>
       <Container>
          <Row className="mb-lg-3 pb-lg-5">
            <Col lg="9">
              <h1>About me</h1>
              <hr className="t_border my-4 text-left" />
            </Col>
          </Row>
          <Row className="mb-lg-3 pb-5">
            <Col lg="5">
              <h3 className="py-4">a bit about myself</h3>
            </Col>
            <Col lg="5" className="d-flex align-items-center">
              <div>
                <p>{dataabout.aboutme}</p>
              </div>
            </Col>
          </Row>
          <Row className="mb-lg-3 pb-5">
          <Col lg="5">
            <h3 className="py-4">where I have contributed</h3>
          </Col>
          <Col lg="5" className="d-flex align-items-center">
            <Carouselanm />
          </Col>
        </Row>
        <Row className="pb-4">
            <Col lg="5">
              <h3 className="py-4">my skills</h3>
            </Col>
            <Col lg="5">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <p className="progress-title">{data.name}</p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
            </Col>
          </Row>
      </Container>
    </div>
  );
};