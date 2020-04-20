module.exports.formatMongoData = (data) => {
  if (Array.isArray(data)) {
    let newData = [];
    for (value of data) {
      newData.push(value.toObject());
    }

    return newData;
  }

  return [];
};
