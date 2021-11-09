# 2021-11-05 使用React+Threejs开发一个三维地球
### 安装React
```
npx create-react-app project-name --tmeplate typescript
```
### 安装依赖：
```
yarn i three
yarn i -D @types/thress
```
### 为全局添加css
```
// APP.css

body {
  margin: 0;
  overflow: hidden;
  /* 隐藏body窗口区域滚动条 */
}
```
### 按需加载Threejs所需组件和图片
图片文件可在[github](https://github.com/one-moeny/earth/tree/main/src/assets)下载
```
// APP.tsx

import './App.css';
import earthImg from './assets/earth.jpg'
import cloudImg from './assets/cloud.png'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  SphereGeometry,
  MeshPhongMaterial,
  Mesh,
  TextureLoader,
  AmbientLight,
  Color
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
```
### 创建虚拟场景和球体，并为球体添加图片材质
```
function APP() {
  // 创建场景对象Scene
  const scene = new Scene()
  scene.background = new Color(0, 0, 0)

  /**
   * 创建网络模型
   */
  // 创建球体几何对象
  const geometry = new SphereGeometry(200, 100, 100)
  // 创建一个纹理加载器对象
  const textureLoader = new TextureLoader()
  // 素材对象
  const material = new MeshPhongMaterial({
    map: textureLoader.load(earthImg)
  })
  // 网络模型对象
  const mesh = new Mesh(geometry, material)
  // 将网络模型添加至场景中
  scene.add(mesh)
}
```
### 添加环境光
```
...

  /**
   * 环境光
   */
  const ambient = new AmbientLight(0xFFFFFF)
  ambient.position.set(100, 100, 200);
  scene.add(ambient)
```
### 添加虚拟相机
```
...

  /**
   * 相机设置
   */
  const width = window.innerWidth // 窗口宽度
  const height = window.innerHeight // 窗口高度
  // 创建相机对象
  const camera = new PerspectiveCamera(45, width / height, 1, 1000)
  camera.position.set(0, 500, -500) // 设置相机位置
  camera.lookAt(scene.position) // 设置相机方向(指场景对象)
```
### 创建渲染器将其渲染成像
```
...

  /**
   * 创建渲染器对象
   */
  const renderer = new WebGLRenderer()
  renderer.setSize(width, height) // 设置渲染区域尺寸
  document.body.appendChild(renderer.domElement) // body元素中插入canvas对象
  // 执行渲染操作 指定场景、相机为参数
  renderer.render(scene, camera)
```
### 添加云层
```
...

  /**
   * 云层
   */
  // 创建球体cloudImg
  const coludGeometry = new SphereGeometry(201, 100, 100)
  // 云层材质
  const cloudsMater = new MeshPhongMaterial({
    alphaMap: new TextureLoader().load(cloudImg),
    transparent: true,
    opacity: 0.2
  })
  const cloudsMesh = new Mesh(coludGeometry, cloudsMater)
  scene.add(cloudsMesh)
```
### 添加自转动画和控制球体视角操作
```
  // 创建控件对象
  const controls = new OrbitControls(camera,renderer.domElement)
  controls.addEventListener('change', render) // 监听鼠标、键盘事件

  // 自转动画
  function animate() {
    controls.update();
    // 地球自转
    mesh.rotation.y -= 0.002;
    // 漂浮的云层
    cloudsMesh.rotation.y -= 0.001;
    cloudsMesh.rotation.z += 0.001;
    renderer.render(scene, camera);
    requestAnimationFrame(animate) // 请求再次执行渲染函数animate
  }
  animate()

  // 渲染函数
  function render() {
    renderer.render(scene,camera) // 执行渲染操作
    requestAnimationFrame(render) // 请求再次执行渲染函数render
  }
  render()
```
### 最总成像：
<img src="./images/2021-11-05.gif">
<br />
<br />

# 源码：https://github.com/one-moeny/earth