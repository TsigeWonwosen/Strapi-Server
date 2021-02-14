module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri:
          "mongodb://strapiadmin:wonde1988@wscluster-shard-00-00.hikgh.mongodb.net:27017,wscluster-shard-00-01.hikgh.mongodb.net:27017,wscluster-shard-00-02.hikgh.mongodb.net:27017/strapiadmin?ssl=true&replicaSet=WScluster-shard-0&authSource=admin&retryWrites=true&w=majority",
      },
      options: {
        ssl: true,
      },
    },
  },
});
