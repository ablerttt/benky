function sortDateOld(items) {
  items.sort((a, b) => {
    if (a.updatedAt > b.updatedAt) return 1;
    if (a.updatedAt < b.updatedAt) return -1;
    return 0;
  });
}

function sortDateNew(items) {
  items.sort((a, b) => {
    if (a.updatedAt > b.updatedAt) return -1;
    if (a.updatedAt < b.updatedAt) return 1;
    return 0;
  });
}

function sortTitleAZ(items) {
  items.sort((a, b) => {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    return 0;
  });
}

function sortTitleZA(items) {
  items.sort((a, b) => {
    if (a.title > b.title) return -1;
    if (a.title < b.title) return 1;
    return 0;
  });
}

export { sortDateOld, sortDateNew, sortTitleZA, sortTitleAZ };
