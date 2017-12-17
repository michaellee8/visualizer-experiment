var mockDb = {
  getNodeById: function (nodeId) {
    return new Promise((resolve, reject) => {
      if (mockDb.nodes[nodeId] !== undefined) {
        resolve(mockDb.nodes[nodeId]);
      } else {
        reject("node-not-found");
      }
    });
  },
  getPrimaryChildsIdById: function (nodeId) {
    return new Promise((resolve, reject) => {
      try {
        var arr = [];
        Object.keys(mockDb.connections).forEach(id => {
          if (
            mockDb.connections[id].type === "primary" &&
            mockDb.connections[id].src === nodeId
          ) {
            arr.push(mockDb.connections[id].des);
          }
        });
        resolve(arr);
      } catch (err) {
        reject(err);
      }
    });
  },
  getPrimarySourceIdById: function (nodeId) {
    return new Promise((resolve, reject) => {
      try {
        var arr = [];
        Object.keys(mockDb.connections).forEach(id => {
          if (
            mockDb.connections[id].type === "primary" &&
            mockDb.connections[id].des === nodeId
          ) {
            arr.push(mockDb.connections[id].src);
          }
        });
        resolve(arr);
      } catch (err) {
        reject(err);
      }
    });
  },
  nodes: {
    aHENV: {
      text: "Most used websites"
    },
    I5zla: {
      text: "Google",
      linkUrl: "google.com"
    },
    sx4zC: {
      text: "Facebook",
      linkUrl: "facebook.com"
    },
    KhzwL: {
      text: "Instagram",
      linkUrl: "instagram.com"
    },
    c0WUm: {
      text: "Gmail"
    },
    q7eRP: {
      text: "Google Docs"
    },
    "4UiSw": {
      text: "Google Drive"
    },
    "6NXhx": {
      text: "Pages"
    },
    sNSqM: {
      text: "Groups"
    },
    "1cCoR": {
      text: "Likes"
    },
    OcejU: {
      text: "Filters"
    },
    "4H0it": {
      text: "Tags"
    },
    "8UKzM": {
      text: "IG Shops"
    }
  },
  connections: {
    "7AU6e": {
      type: "primary",
      src: "aHENV",
      des: "I5zla"
    },
    dZ5TM: {
      type: "primary",
      src: "aHENV",
      des: "sx4zC"
    },
    "620BG": {
      type: "primary",
      src: "aHENV",
      des: "KhzwL"
    },
    "3XZFs": {
      type: "primary",
      src: "I5zla",
      des: "c0WUm"
    },
    I27UK: {
      type: "primary",
      src: "I5zla",
      des: "q7eRP"
    },
    "0xzvO": {
      type: "primary",
      src: "I5zla",
      des: "4UiSw"
    },
    bPsn7: {
      type: "primary",
      src: "sx4zC",
      des: "6NXhx"
    },
    "59r1P": {
      type: "primary",
      src: "sx4zC",
      des: "sNSqM"
    },
    yTm8z: {
      type: "primary",
      src: "sx4zC",
      des: "1cCoR"
    },
    VlAlr: {
      type: "primary",
      src: "KhzwL",
      des: "OcejU"
    },
    D1m2w: {
      type: "primary",
      src: "KhzwL",
      des: "4H0it"
    },
    Se8aQ: {
      type: "primary",
      src: "KhzwL",
      des: "8UKzM"
    }
  }
};
export default mockDb;
