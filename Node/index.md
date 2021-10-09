## node event loop
1. timers: 计时器，执行setTimeout和setInterval的回调
2. pending callbacks: 执行延迟到下一个循环迭代的I/O回调
3. idle,prepare: 队列的移动，仅系统内部使用
4. poll轮询：检索新的I/O事件，执行与I/O相关的回调。事实上除了其他几个阶段处理的事情，其他机会所有的异步都在这个阶段处理
5. check: 执行setImmediate回调，setImmediate在这里执行
6. close callbacks: 执行close事件的callback，一些关闭的回调函数，如：socket.on('close', ...)

## 文件上传

## 文件下载
```
// 检查是否登录
function isLogin(req) {
  return new Promise(resolve => {
    resolve();
  })
}

// 检查文件是否存在
function isFileExisted(path) {
  return new Promise(function(resolve, reject) {
    fs.access(path, (err) => {
      if (err) {
        reject({
          returnCode: 'N00001',
          msg: 'file not exist!!!'
        });
      } else {
        resolve(true);
      }
    })
  })
}

async function download(req, res) {
  try {
    await isLogin(req);

    const { filePath } = req.body;
    const tpath = `${global.config.UPLOADED_FILES_DIR}${filePath}`;
    await isFileExisted(tpath);

    const filename = filePath.split('/')[filePath.split('/').length - 1];

    const size = fs.statSync(tpath).size;
    const readStream = fs.createReadStream(tpath);
    res.writeHead(200, {
      'Content-Disposition': `attachment; filename=${filename}`,
      'Content-Length': size
    });
    readStream.on('close', function() {
      res.end();
    });
    readStream.pipe(res);
  } catch (err) {
    res.status(err.status || 200).json(err);
  }
}
```

## 事件流


