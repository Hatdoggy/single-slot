import { Main, Pop, Mob } from "./Components";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

function App() {
  const mobile = useMediaQuery({
    query: "(max-width: 640px)",
  });
  const land = useMediaQuery({
    query:
      "(min-width: 481px) and (max-width: 1000px) and (orientation: landscape) ",
  });

  const [intro, hideIntro] = useState(true);
  const [info, updInfo] = useState({
    ctr: 1,
    cash: true,
    pop: false,
    spins: false,
    mult: false,
    final: false,
  });

  return (
    <div className="App h-100 w-100 pos-rel">
      <img src="./img/logoAlb.svg" alt="logo" className="logo"/>
      {info.pop && <Pop info={info} upd={updInfo} />}
      {mobile || land ? (
        <Mob
          intro={intro}
          hide={hideIntro}
          ctr={info.ctr}
          info={info}
          upd={updInfo}
          mobile={mobile}
          land={land}
        />
      ) : (
        <Main
          intro={intro}
          hide={hideIntro}
          ctr={info.ctr}
          info={info}
          upd={updInfo}
        />
      )}
    </div>
  );
}

export default App;
