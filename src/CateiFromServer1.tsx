import { useEffect, useState } from "react";
import { addCatel, Catel, Food, getCatei, getFood } from "../requests/server1";
import classes from "./App.module.css";
import { Catei } from "./Catei";

export const CateiFromServer1 = () => {
  const [id, setId] = useState(Number);
  const [name, setName] = useState("");
  const [age, setAge] = useState(Number);
  const [catei, setCatei] = useState(Array<Catel>())
  const [food, setFood] = useState(Array<Food>())
  const [selected, setSelected] = useState(1)

  useEffect(() => {
	  (async () => {
		  const data = await getFood()
		  setFood(data)
	  })()
  }, [])

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <label>Id: </label>
        <input onChange={(e) => setId(parseInt(e.target.value))} />
      </div>
      <div className={classes.container}>
        <label>Name: </label>
        <input onChange={(e) => setName(e.target.value)} />
      </div>
      <div className={classes.container}>
        <label>Age: </label>
        <input onChange={(e) => setAge(parseInt(e.target.value))} />
      </div>
	  <select onChange={e => setSelected(food[e.target.selectedIndex].id)}>
		  {food?.map((f: Food) => (
			  <option key={f.id}>{f.name}</option>
		  ))}
	  </select>
      <button
        onClick={async () => {
          const catel = await addCatel({ id, name, age, foodId: selected });
          setCatei(catei.concat([catel]));
        }}
      >
        Click me
      </button>
      <Catei catei={catei} setCatei={setCatei} getCatei={getCatei} getFood={getFood} />
    </div>
  );
};
