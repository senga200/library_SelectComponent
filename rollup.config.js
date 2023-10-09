import styles from "rollup-plugin-styles";
import autoprefixer from "autoprefixer";
import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";

// Le point d'entrée de la bibliothèque
const input = "src/index.js";

const config = [
  {
    input: input,
    output: {
      name: "react-select-senga",
      file: `dist/index.js`,
      format: "esm",
    },
    // Cela externalise React pour éviter que Rollup ne le compile
    external: ["react", /@babel\/runtime/],
    plugins: [
      // Configurations Babel
      babel({
        exclude: "node_modules/**",
        plugins: ["@babel/transform-runtime"],
        babelHelpers: "runtime",
      }),
      // Cela ajoute la prise en charge des styles
      styles({
        postcss: {
          plugins: [autoprefixer()],
        },
      }),
      terser(),
    ],
  },
];

export default config;
