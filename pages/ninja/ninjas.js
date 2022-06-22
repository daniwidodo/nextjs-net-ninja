import { useEffect } from "react";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
//   useEffect( () => {
//     console.log(ninjas);
//   }, [])
  return (
    <div>
      <h1>Hi Ninjas!</h1>
      {ninjas.map((ninja) => (
        <div key={ninja.id}>
          <a>
            <h4>{ninja.name}</h4>
          </a>
        </div>
      ))}
    </div>
  );
};


export default Ninjas;
