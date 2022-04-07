try {
  Promise.reject(1111).catch(e => {
    console.log(e);
  });
} catch (e) {
  console.log(e);
}