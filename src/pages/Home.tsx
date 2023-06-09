import { Fragment } from "react";
import { Code, Image } from "../components";

type HomeType = {
  img?: {
    src: string;
    desc?: string;
  };
};

const Home = ({ homeObj }: { homeObj: HomeType }): JSX.Element => {
  const img = homeObj?.img;
  return (
    <Fragment>
      {img?.src !== "" ? (
        <>
          <Image src={img?.src!} alt="Sunset image" className="home-img" center />
          <blockquote>{img?.desc}</blockquote>
        </>
      ) : null}
      <p className="h5 text-primary" id="about">
        About
      </p>
      <p className="text-light">
        Hi there i'm Manoj Uppala. A frontend engineer and an aspiring fullstack developer. An Open
        Source enthusiast with interests in web dev and data science. I constantly find ways to
        challenge myself, learn new things and experiment with different tools.
      </p>
      <Code
        snippet={`things = ["good thing","bad thing","nothing"]
hope = "good thing"
if(hope == bestof(things)):
  print('no good thing ever dies')
# by stephen king`}
        lang="python"
      />
      <p className="text-light">
        😕 If you are confused the above code means this quote "hope is a good thing, maybe the best
        of things, and no good thing ever dies" - stephen king
      </p>
    </Fragment>
  );
};

export default Home;
