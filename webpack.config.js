var path=require("path");

module.exports={
  entry:"./www/app/main.js",
  output:{
    path:path.resolve(__dirname,"./www/dist"),
    filename:"all.js"
   },
  module : {
    rules : [
      {
        test : /\.js$/ ,
        use :[
          {
            loader : "babel-loader",
            options : {
              presets:["env","react"],
              plugins:["transform-object-rest-spread","transform-runtime"]
            }

          }
        ],
         include : [
           path.resolve(__dirname,"www/app")
         ],
        exclude : [
           path.resolve(__dirname,"node_modules")
        ]
      }
    ]
  },
  watch:true
}
