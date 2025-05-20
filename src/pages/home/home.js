import "./home.css";
import Typewriter from "typewriter-effect";
import { introdata, meta, myimg } from '../../content_options';
import { Helmet } from "react-helmet";

const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export const Home = () => {
  return (
    <div className="home_class">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
        <div className="intro_sec d-lg-flex">
         <div className="text">
            <div className="intro">
                <h1>Hello there, happy {formatDate(today)}!</h1>
                <h1 className="mb-5">I'm <strong>{introdata.name}</strong></h1>
                <h2 className="mb-5">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      pauseFor: 2500,
                      deleteSpeed: 10,
                    }}
                  />
                </h2>
                <p className="mb-3">{introdata.speech1}</p>
                <p className="mb-3">{introdata.speech2}</p>
                <p className="mb-3">{introdata.speech3}</p>
            </div>
         </div>
         <div className="prof_image" style={{backgroundImage:`url(${myimg})`}}/>
        </div>
      </div>
  );
};