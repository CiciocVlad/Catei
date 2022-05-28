import { useState } from "react";
import { Catel, Food, getCatei as getCateiServer1 } from "../requests/server1";
import { getCatei, addCatel, getFood } from "../requests/server2";
import classes from "./App.module.css";
import { Catei } from "./Catei";

export const CateiFromServer2 = () => {
  const [catei, setCatei] = useState(Array<Catel>());
  const [food, setFood] = useState(Array<Food>())

  return (
    <div className={classes.wrapper}>
      <button
        onClick={async () => {
			setCatei(await getCateiServer1())
			setFood(await getFood())
			catei?.map((catel: Catel) => addCatel(catel))
		}}
      >
        Click me
      </button>
      <Catei catei={catei} setCatei={setCatei} getCatei={getCatei} getFood={getFood} />
    </div>
  );
};
