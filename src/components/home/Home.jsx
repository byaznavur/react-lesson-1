import { NEGATIVE, POSITIVE } from "../../constants";
import { add } from "../../utils/add";

import styles from "./Home.module.css";

export function Home() {
  const a = 10;
  const b = -20;
  console.log(styles);
  return (
    <section id="home">
      <div className="container">
        <h1 id={styles["home-title"]}>Home section</h1>
        <h2 className={styles["js-content"]}>
          a + b = {add(a, b)} and {a + b > 0 ? POSITIVE : NEGATIVE}
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
          reprehenderit labore ratione voluptatum ipsum architecto nobis
          suscipit magnam ad veritatis eos velit, sapiente cupiditate nam
          inventore ut ducimus illum dolores fugit voluptates reiciendis quam
          exercitationem consequatur! Enim, dolores. Quis quos recusandae,
          voluptate magni fugiat quasi? Sint delectus maiores repellendus
          tempora similique nulla fuga, error laborum voluptates magnam amet,
          quibusdam vitae vel explicabo eos? Iste recusandae officiis vitae
          dolorum natus, illum culpa neque inventore vel porro eligendi
          quibusdam aspernatur quod mollitia adipisci perspiciatis laudantium
          nesciunt accusamus ab error, vero sint impedit. Voluptatem illum ipsam
          sequi ducimus minima sit reprehenderit. Minus, obcaecati.
        </p>
      </div>
    </section>
  );
}

export default Home;
