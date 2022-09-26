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
        <img src="./img/win2.png" alt="win" className="giftImg w-80trans image" />
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
      <h4 className="mont">{window.txt.head}</h4>
    </header>
  );
};

const Terms = () => {
  return (
    <header className="flx-col flx flx-jc-ce flx-ai-strt terms">
      <p className="mont">Terms &#38; Condition 2022 All Rights Reserved</p>
      <span className="lato lato-l w-65">
      This website is not affiliated with or endorsed by any of the mentioned brands and does not claim to represent, or own any of the trademarks, tradenames or rights associated with any of the products which are the property of their respective owners who do not own, endorse, or promote this site. All images on this site are readily available in various places on the Internet and believed to be in public domain according to the U.S. Copyright Fair Use Act (title 17, U.S. Code). *Trial offers offered on the last page require shipping and handling fees. See manufacturer’s site for details as terms vary with offers.
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
        {window.txt.loseTxt1.head}
      </h4>
      <p className="lato lato-l txt-al-ce"> 
        {window.txt.loseTxt1.mes}</p>
      <button className="btn mont p-15 w-80" onClick={clicked}>
        Spin Again
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

  return (
    <div className="w-30 h-50 flx flx-col flx-jc-sp flx-ai-ce p-20 bg-wht brd pop">
      <h4 className="p-20 txt-wht mont bg-org w-80 txt-al-ce">
        {window.txt.loseTxt1.head2}
      </h4>
      <p className="lato lato-l txt-al-ce"> 
        {window.txt.loseTxt1.mes2}</p>
      {ctr === 2 && (
        <button className="btn mont p-15 w-80" onClick={clicked}>
          Spin Again
        </button>
      )}
    </div>
  );
};

const Spins = (props) => {
  const { info, upd } = props;

  const clicked = () => {
    const { pop, ctr } = info;
    upd({
      spins: false,
    })
    upd({
      ...info,
      pop: true,
      ctr: ctr + 1,
      mult: false,
      spins: false,
      final: true,
    });
  };

  return (
    <div className="w-30 flx flx-col flx-jc-sp flx-ai-ce p-20 bg-wht brd pop">
      <h4 className="p-20 txt-wht mont bg-org w-80 txt-al-ce">
        You Won a brand new {window.txt.src.alt}
      </h4>
      <img src={window.txt.src.src} alt={window.txt.src.alt} id="selProd" className="m-t-2 m-b-2 w-30"/>
      <p className="lato lato-l txt-al-ce"> {window.txt.spins.main}</p>
      <button className="btn mont p-15 w-80" onClick={clicked}>
        Proceed
      </button>
    </div>
  );
};

const Final = () => {

  const [finBtn,updFin] = useState(0);

  const clicked = (e)=>{
    let target = e.target;
    let sibs = target.parentNode.childNodes;
    let newId = target.dataset.id;

    sibs.forEach((elem)=>{
      elem.classList.add('btn-trans');
    })

    target.classList.remove('btn-trans');
    document.querySelector('.product-button').dataset.productId = newId;
    document.querySelector('#productName').innerHTML = target.textContent ;
  }

  useEffect(()=>{
    document.querySelector('.product-button').dataset.productId = window.txt.src.id
    document.querySelector(`[data-id='${window.txt.src.id}']`).classList.remove('btn-trans');
  })

  return (
    <div className="w-30 flx flx-col flx-jc-sp flx-ai-ce p-50 bg-wht brd pop flx flx-col flx-jc-sp flx-ai-ce final">
      <h4 className="p-20 txt-wht mont bg-org w-80 txt-al-ce">
        {window.txt.finTxt.head}
      </h4>
      <p className="lato txt-al-ce m-t-5">
        {window.txt.finTxt.first} <span className="mont" id="productName">{window.txt.src.alt}</span>{" "} for {firstname ? `:${firstname} ${surname} ${city}` : ""}
      </p>
      <div id="prodsCnt" className="flx flx-col flx-jc-ce flx-ai-ce w-100 m-t-2">
      <button className="btn btn-trans mont p-15 w-90 m-t-2" data-id='1' onClick={clicked}>{window.txt.prods[0]}</button>
      <button className="btn btn-trans mont p-15 w-90 m-t-2" data-id='2' onClick={clicked}>{window.txt.prods[1]}</button>
      <button className="btn btn-trans mont p-15 w-90 m-t-2" data-id='3' onClick={clicked}>{window.txt.prods[2]}</button>
      <button className="btn btn-trans mont p-15 w-90 m-t-2" data-id='4' onClick={clicked}>{window.txt.prods[3]}</button>
      <button className="btn btn-trans mont p-15 w-90 m-t-2" data-id='5' onClick={clicked}>{window.txt.prods[4]}</button>
      </div>
      <p className="lato lato-l txt-al-ce m-t-5"> {window.txt.final}</p>
      <button
        className="btn mont p-15 w-80 product-button m-t-2"
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
        <img src="./img/win2.png" alt="win" className="z-main pos-rel" />
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
