try {
  Promise.reject(1111).catch(e => {
    console.log('1111111111');
  });
} catch (e) {
  console.log('2222222');
}