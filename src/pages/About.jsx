import React, { useEffect } from "react";

function About() {
  const p = new Promise((resolve, reject) => {
    console.log("hi");
    setTimeout(() => {
      console.log("ended");
      resolve({
        status: "OK",
      });
    }, 3000);
  });

  p
  .then(data => data.status = "NOT OK")
  .then(data => console.log (data))
  .catch((e) => console.log(e));

  return <div>{}</div>;
}

export default About;
