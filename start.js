/**
 * Created by bileskou on 16/8/20.
 */
require("babel-core/register")(
    {
        presets: ['stage-3','es2015']
    }
);
require("babel-polyfill");
require("./app.js");