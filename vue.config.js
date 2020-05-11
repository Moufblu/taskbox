module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "ch.moufblu.taskbox",
        productName: "TaskBox",
        linux: {
          target: "deb",
          category: "Graphics"
        },
        win: {
          target: "nsis"
        },
        mac: {
          target: "default",
          category: "public.app-category.graphics-design"
        }
      }
    }
  }
};
