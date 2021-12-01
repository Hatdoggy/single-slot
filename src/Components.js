import { Machine } from "./svg";
import spin, {
  drop,
  anim,
  ActionRedirect,
  init,
  firstname,
  surname,
  city,
} from "./func";
import { useState, useEffect } from "react";

const Container = (props) => {
  const { intro, info, upd, ctr } = props;
  return (
    <div className="w-50 h-100 flx flx-jc-ce flx-ai-ce">
      {intro ? (
        <img src="./img/win.png" alt="win" className="w-80 trans image" />
      ) : (
        <div className="flx flx-jc-ce flx-ai-ce w-100 h-100">
          <div className="w-20 door ovr-hide trans">
            <div className="boxes"></div>
          </div>
          <Machine upd={upd} ctr={ctr} info={info} />
        </div>
      )}
    </div>
  );
};

const Header = () => {
  return (
    <header className="bg-org flx flx-jc-ce flx-ai-ce txt-wht p-20  shdw-btn">
      <h4 className="mont">Win cash daily!</h4>
    </header>
  );
};

const Terms = () => {
  return (
    <header className="flx-col flx flx-jc-ce flx-ai-strt terms">
      <p className="mont">Terms and Conditions</p>
      <span className="lato lato-l w-65">
        To enhance your experience on our site, we use 'cookies'. By browsing
        our site you accept this.This is a third-party promotion and the
        promoted product is not responsible for this site.You must be 18+ years
        (or the legal age of gambling where you live) to use our page. If you
        are not please leave
      </span>
    </header>
  );
};

const Greet = (props) => {
  const { intro, hide } = props;

  const disappear = () => {
    let btn = document.querySelector(".play");
    let img = document.querySelector(".image");

    btn.style.animation = "out 1s";
    img.style.animation = "out 1s";

    setTimeout(() => {
      hide(false);
    }, 1000);
  };

  return (
    <section className="flx flx-col flx-jc-sp flx-ai-strt p-l h-100 w-50 trans">
      <Header />
      <div className="w-80">
        <h2 className="mont">{window.txt.greet.main}</h2>
        <p className="lato lato-l w-80 m-t-5">{window.txt.greet.desc}</p>
        <h4 className="mont m-t-5">{window.txt.how.main}</h4>
        <p className="lato lato-l w-80 m-t-5">{window.txt.how.desc}</p>
      </div>
      {intro && (
        <button
          className="btn txt-wht txt-al-ce p-20 w-50 play"
          onClick={disappear}
        >
          Let's Play
        </button>
      )}
      <Terms />
    </section>
  );
};

/* Pop ups */

const Cash = (props) => {
  const { info, upd } = props;

  const clicked = () => {
    init();
    const { pop, ctr } = info;
    anim();
    setTimeout(() => {
      upd({
        ...info,
        pop: false,
      });
    }, 300);
    setTimeout(() => {
      spin(ctr);
      drop();
      setTimeout(() => {
        upd({
          ...info,
          pop: true,
          ctr: ctr + 1,
          mult: true,
          cash: false,
        });
      }, 4000);
    }, 1000);
  };

  return (
    <div className="w-30 h-50 flx flx-col flx-jc-sp flx-ai-ce p-20 bg-wht brd pop">
      <h4 className="p-20 txt-wht mont bg-org w-80 txt-al-ce">
        {window.txt.first.head} {window.txt.prize} {window.txt.first.pro}!
      </h4>
      <p className="lato lato-l txt-al-ce"> {window.txt.cash.main}</p>
      <button className="btn mont p-15 w-50" onClick={clicked}>
        PROCEED
      </button>
    </div>
  );
};

const Multiplier = (props) => {
  const { info, upd } = props;
  const { pop, ctr } = info;

  const clicked = () => {
    if (ctr === 2) {
      anim();
      init();
    }
    setTimeout(() => {
      if (ctr === 2) {
        upd({
          ...info,
          pop: false,
        });
        setTimeout(() => {
          spin(ctr);
          drop();
          setTimeout(() => {
            upd({
              ...info,
              pop: true,
              ctr: ctr + 1,
              mult: false,
              spins: true,
            });
          }, 4000);
        }, 1000);
      }
    }, 300);
  };

  useEffect(() => {
    // if (ctr === 4) {
    //   setTimeout(() => {
    //     upd({
    //       ...info,
    //       ctr: ctr + 1,
    //       mult: false,
    //       final: true,
    //     });
    //   }, 2000);
    // }
    if (ctr === 2) {
      setTimeout(() => {
        upd({
          ...info,
          ctr: ctr + 1,
          mult: false,
          final: true,
        });
      }, 3500);
    }
  }, []);

  return (
    <div className="w-30 h-50 flx flx-col flx-jc-sp flx-ai-ce p-20 bg-wht brd pop">
      <h4 className="p-20 txt-wht mont bg-org w-80 txt-al-ce">
        {window.txt.fs.mes1}{" "}
        {ctr === 2
          ? window.txt.spinVal
          : window.txt.win.spins + " spins"}
      </h4>
      <p className="lato lato-l txt-al-ce">
        {" "}
        {ctr === 2 ? window.txt.mult.cash : window.txt.mult.spins}
      </p>
      {/* {ctr === 2 && (
        <button className="btn mont p-15 w-50" onClick={clicked}>
          FREE SPINS
        </button>
      )} */}
    </div>
  );
};

const Spins = (props) => {
  const { info, upd } = props;

  const clicked = () => {
    init();
    anim();
    const { pop, ctr } = info;
    setTimeout(() => {
      upd({
        ...info,
        pop: false,
      });
    }, 300);
    setTimeout(() => {
      spin(ctr);
      drop();
      setTimeout(() => {
        upd({
          ...info,
          pop: true,
          ctr: ctr + 1,
          mult: true,
          spins: false,
        });
      }, 4000);
    }, 1000);
  };
  return (
    <div className="w-30 h-50 flx flx-col flx-jc-sp flx-ai-ce p-20 bg-wht brd pop">
      <h4 className="p-20 txt-wht mont bg-org w-80 txt-al-ce">
        You Won {window.txt.spinVal} SPINS
      </h4>
      <p className="lato lato-l txt-al-ce"> {window.txt.spins.main}</p>
      <button className="btn mont p-15 w-50" onClick={clicked}>
        MULTIPLIER
      </button>
    </div>
  );
};

const Final = () => {
  return (
    <div className="w-30 h-50 flx flx-col flx-jc-sp flx-ai-ce p-20 bg-wht brd pop h-100 flx flx-col flx-jc-sp flx-ai-ce final">
      <h4 className="p-20 txt-wht mont bg-org w-80 txt-al-ce">
        CONGRATULATIONS
      </h4>
      <p className="mont txt-wht bg-org p-15 mes txt-al-ce">
        {/* You won {window.txt.win.spins} spins + {window.txt.win.prize} Welcome
        Bonus */}
        You won {window.txt.win.spins} for {window.txt.win.prize}
      </p>
      <p className="mont txt-al-ce">
        {window.txt.winTxt.mes}{" "}
        {firstname ? `:${firstname} ${surname} ${city}` : "firstname"}
      </p>
      <p className="lato lato-l txt-al-ce"> {window.txt.final}</p>
      <button
        className="btn mont p-15 w-50 product-button"
        data-product-id="1"
        onClick={(elem) => ActionRedirect(elem.target.dataset.productId)}
      >
        CLAIM PRIZE
      </button>
    </div>
  );
};

const Pop = (props) => {
  const { cash, pop, spins, mult, ctr, final } = props.info;

  return (
    <div className="bg-pop w-100 h-100 pos-abs flx flx-jc-ce flx-ai-ce z-top fade">
      {spins && <Spins info={props.info} upd={props.upd} />}
      {cash && <Cash info={props.info} upd={props.upd} />}
      {mult && <Multiplier info={props.info} upd={props.upd} />}
      {final && <Final />}
    </div>
  );
};

/* Main Container */
const Main = (props) => {
  const { intro, hide, upd, ctr, info } = props;
  return (
    <main className="flx flx-jc-ce flx-ai-ce h-100 w-100">
      <Greet intro={intro} hide={hide} />
      <Container intro={intro} hide={hide} upd={upd} ctr={ctr} info={info} />
    </main>
  );
};

const GreetTxt = (prop) => {
  const click = () => {
    prop.upd({
      greet: false,
      how: true,
      play: false,
    });
  };
  return (
    <div className="w-80 flx flx-col flx-ai-ce flx-jc-ce mobTxt">
      <h2 className="mont txt-wht">{window.txt.greet.main}</h2>
      <p className="lato lato-reg w-80 m-t-5 txt-wht">
        {window.txt.greet.desc}
      </p>
      <button
        className="btn z-main txt-wht shdw-btn2 txt-al-ce p-20 w-50 play m-t-5"
        onClick={click}
      >
        How to Play
      </button>
    </div>
  );
};

const HowTo = (prop) => {
  const click = () => {
    prop.upd({
      greet: false,
      how: false,
      play: true,
    });
  };
  return (
    <div className="w-80 flx flx-col flx-ai-ce flx-jc-ce mobTxt">
      <h2 className="txt-wht mont txt-wht">{window.txt.how.main}</h2>
      <p className="txt-wht lato lato-reg w-80 m-t-5 txt-wht">
        {window.txt.how.desc}
      </p>
      <button
        className="btn z-main txt-wht txt-al-ce p-20 w-50 play m-t-5 shdw-btn2"
        onClick={click}
      >
        Let's Play
      </button>
    </div>
  );
};

const MobGreet = (props) => {
  const { stat, upd } = props;
  const { greet, how } = stat;

  return (
    <section className="flx flx-col flx-jc-sp flx-ai-strt p-l h-100 w-50 trans pos-rel ovr-hide">
      <div className="h-50 flx flx-col flx-jc-sp flx-ai-ce cont">
        <Header />
        {greet && <GreetTxt upd={upd} />}
        {how && <HowTo upd={upd} />}
      </div>

      <div className="h-50 pos-rel flx flx-jc-ce flx-ai-e cont">
        <img src="./img/win.png" alt="win" className="w-80 z-main pos-rel" />
        <img
          src="./img/blob.svg"
          alt="blob"
          className="w-100 pos-abs z-bg blob-b"
        />
      </div>
    </section>
  );
};

const Mob = (props) => {
  const { intro, hide, upd, ctr, info } = props;
  const [stat, updStat] = useState({
    greet: true,
    how: false,
    play: false,
  });
  return (
    <main className="flx flx-jc-ce flx-ai-ce h-100 w-100 bg-img2">
      {stat.play ? (
        <section className="flx flx-col flx-jc-sp flx-ai-strt p-l h-100 w-50 trans pos-rel ovr-hide machCont">
          <div className="w-20 door ovr-hide trans">
            <div className="boxes"></div>
          </div>
          <Machine upd={upd} ctr={ctr} info={info} />
          <img
            src="./img/blob.svg"
            alt="blob"
            className="w-100 pos-abs z-bg blob-m"
          />
          <Terms />
        </section>
      ) : (
        <MobGreet
          intro={intro}
          hide={hide}
          mobile={props.mobile}
          stat={stat}
          upd={updStat}
        />
      )}
    </main>
  );
};

export { Main, Pop, Mob };
