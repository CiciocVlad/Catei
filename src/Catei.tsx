import { useEffect, useState } from "react";
import { Catel, Food } from "../requests/server1";
import classes from "./Catei.module.css";

export const Catei = ({
  catei,
  setCatei,
  getCatei,
  getFood
}: {
  catei: Array<Catel>;
  setCatei: (catei: Array<Catel>) => void;
  getCatei: () => Promise<any>;
  getFood: () => Promise<any>;
}) => {
  const [food, setFood] = useState(Array<Food>())

  useEffect(() => {
    (async () => {
      setCatei(await getCatei());
	  setFood(await getFood())
    })();
  }, []);  

  return (
    <ul className={classes.wrapper}>
      {catei?.map((catel: Catel) => {
        return (
          <li key={catel.id}>
            <div>
              <p>Name: {catel.name}</p>
              <p>Age: {catel.age}</p>
              <p>Food: {food?.at(catel.foodId - 1)?.name}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
