<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>MediaPipe 手势识别</title>
  <style>
    #container { position: relative; width: 640px; margin: auto; }
    #output_canvas, #videoElement {
      position: absolute; left: 0; top: 0; width: 640px; height: 480px;
    }
    #videoElement { z-index: 0; }
    #output_canvas { z-index: 1; pointer-events: none; }
    #status { text-align: center; margin-top: 8px; font-size: 1.2em; }
  </style>
  <script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.min.js"></script>
</head>
<body>
  <div id="container">
    <video id="videoElement" width="640" height="480" autoplay playsinline></video>
    <canvas id="output_canvas" width="640" height="480"></canvas>
  </div>
  <div id="status"></div>
  <script>
    const video = document.getElementById('videoElement');
    const canvas = document.getElementById('output_canvas');
    const ctx = canvas.getContext('2d');
    const recentPositions = [];
    let lastGesture = '';
    const maxFrames = 10;

    // 欧氏距离
    function distance(a, b) {
      return Math.hypot(a.x - b.x, a.y - b.y);
    }

    // 判定手是否握拳
    function isFist(landmarks) {
      // 五指指尖(8,12,16,20)均接近掌心(0)
      const palm = landmarks[0];
      const tips = [8, 12, 16, 20].map(i => landmarks[i]);
      // 指尖都很靠近掌心可初判为握拳
      return tips.every(tip => distance(tip, palm) < 0.12);
    }

    // 判定手张开且五指并拢为“劈砍”
    function isChopHand(landmarks) {
      // 指尖在一条线上（大致y值接近），指尖间x/y距离较小，食指(8)、中指(12)、无名(16)、小指(20)
      const tips = [8, 12, 16, 20].map(i => landmarks[i]);
      const yMean = tips.reduce((a,b) => a+b.y, 0) / tips.length;
      const yClose = tips.every(pt => Math.abs(pt.y - yMean) < 0.05);

      // 每相邻指尖距离小于阈值（并拢）
      let close = true;
      for(let i=1;i<tips.length;i++) {
        if(distance(tips[i], tips[i-1]) > 0.12) close = false;
      }
      // 整体张开（指尖到掌心距离大于阈值）
      const palm = landmarks[0];
      const openEnough = tips.every(tip => distance(tip, palm) > 0.2);
      return yClose && close && openEnough;
    }

    // 检测前/下方向的高速移动
    function detectDirection(landmarks, axis="z") {
      if (recentPositions.length < 3) return 0;
      // 以掌心(0)关键点为参考
      const palm = landmarks[0];
      // 以 axis('z'前后,'y'上下)计算速度
      let v = 0;
      let cnt = 0;
      for(let i=recentPositions.length-2;i<recentPositions.length-1;i++) {
        v += palm[axis] - recentPositions[i][axis];
        cnt++;
      }
      return cnt>0 ? v/cnt : 0;
    }

    // 手势合成识别
    function gestureRecognition(landmarks) {
      // 保存最近帧的掌心关键点
      const palm = landmarks[0];
      recentPositions.push({x:palm.x, y:palm.y, z:palm.z});
      if(recentPositions.length > maxFrames) recentPositions.shift();

      // 捶打：握拳，z方向回推，z减小(向前)
      if (isFist(landmarks)) {
        const vz = detectDirection(landmarks, 'z');
        if (vz < -0.01) return "punch";
      }
      // 劈砍：张开并拢五指, y方向变大(手向下)
      if (isChopHand(landmarks)) {
        const vy = detectDirection(landmarks, 'y');
        if (vy > 0.015) return "chop";
      }
      // 可扩展更多自定义判据
      return "none";
    }

    function postGesture(gesture) {
      // 避免重复连续输出同一手势
      if(gesture===lastGesture) return;
      lastGesture = gesture;
      document.getElementById('status').innerText = '手势：' + gesture;
      if(window.ReactNativeWebView && window.ReactNativeWebView.postMessage)
        window.ReactNativeWebView.postMessage(JSON.stringify({ gesture }));
      console.log("Recognized:", gesture);
    }

    // MediaPipe 部分
    async function setupCamera() {
      const constraints = {
        audio: false, video: { facingMode: 'user', width: 640, height: 480 }
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      video.srcObject = stream;
      return new Promise((resolve) => {
        video.onloadedmetadata = () => resolve(video);
      });
    }

    const hands = new Hands({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
    });
    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.7
    });
    hands.onResults(onResults);

    function onResults(results) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);
      if (results.multiHandLandmarks && results.multiHandLandmarks.length>0) {
        for (const landmarks of results.multiHandLandmarks) {
          drawConnectors(ctx, landmarks, HAND_CONNECTIONS, {color:'#00FF00',lineWidth:3});
          drawLandmarks(ctx, landmarks, {color:'#FF0000',lineWidth:1,radius:4});

          const gesture = gestureRecognition(landmarks);
          postGesture(gesture);
        }
      } else {
        lastGesture = "";
        postGesture("none");
      }
      ctx.restore();
    }

    async function main() {
      await setupCamera();
      video.play();
      async function detectFrame() {
        await hands.send({image: video});
        requestAnimationFrame(detectFrame);
      }
      detectFrame();
    }
    main();
  </script>
</body>
</html>
