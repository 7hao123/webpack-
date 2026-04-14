import dayjs from "dayjs";
import "./style.css";
console.log("Hello index");
console.log(dayjs(), "123");

// import("lodash")
//   .then(({ default: _ }) => {
//     console.log(_.join(["Hello", "webpack"], " "));
//   })
//   .catch((error) => {
//     console.error("Failed to load lodash:", error);
//   });

// import(/* webpackChunkName: "foo" */ "./foo").then(() => {
//   console.log("foo loaded");
// });

const button = document.createElement("button");
button.innerHTML = "Load Component";
// /* webpackPrefetch: true */ 预下载，在浏览器空闲的时候下载
/* webpackPreload: true */
// 在父chunk加载的时候并行加载
button.onclick = () => {
  import(
    /* webpackChunkName: "component" */

    "./component"
  ).then(({ default: component }) => {
    document.body.appendChild(component);
  });
};
document.body.appendChild(button);
