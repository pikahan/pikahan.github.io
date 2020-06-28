// // 注意：live2d_path 参数应使用绝对路径
// const live2d_path = "/live2d-widget/";
// //const live2d_path = "/live2d-widget/";

// window.live2d_settings = Array();

// // 工具栏设置
// // live2d_settings['showToolMenu']         = true;         // 显示 工具栏          ，可选 true(真), false(假)
// // live2d_settings['canCloseLive2d']       = true;         // 显示 关闭看板娘  按钮，可选 true(真), false(假)
// // live2d_settings['canSwitchModel']       = true;         // 显示 模型切换    按钮，可选 true(真), false(假)
// // live2d_settings['canSwitchTextures']    = true;         // 显示 材质切换    按钮，可选 true(真), false(假)
// // live2d_settings['canSwitchHitokoto']    = true;         // 显示 一言切换    按钮，可选 true(真), false(假)
// // live2d_settings['canTakeScreenshot']    = true;         // 显示 看板娘截图  按钮，可选 true(真), false(假)
// // live2d_settings['canTurnToHomePage']    = true;         // 显示 返回首页    按钮，可选 true(真), false(假)
// // live2d_settings['canTurnToAboutPage']   = true;         // 显示 跳转关于页  按钮，可选 true(真), false(假)

// // // 模型切换模式
// // live2d_settings['modelStorage']         = true;         // 记录 ID (刷新后恢复)，可选 true(真), false(假)
// // live2d_settings['modelRandMode']        = 'switch';     // 模型切换，可选 'rand'(随机), 'switch'(顺序)
// // live2d_settings['modelTexturesRandMode']= 'rand';       // 材质切换，可选 'rand'(随机), 'switch'(顺序)

// // // 提示消息选项
// // live2d_settings['showHitokoto']         = true;         // 显示一言
// // live2d_settings['showF12Status']        = true;         // 显示加载状态
// // live2d_settings['showF12Message']       = false;        // 显示看板娘消息
// // live2d_settings['showF12OpenMsg']       = true;         // 显示控制台打开提示
// // live2d_settings['showCopyMessage']      = true;         // 显示 复制内容 提示
// // live2d_settings['showWelcomeMessage']   = true;         // 显示进入面页欢迎词

// // //看板娘样式设置
// // live2d_settings['waifuSize']            = '250x250';    // 看板娘大小，例如 '280x250', '600x535'
// // live2d_settings['waifuTipsSize']        = '250x70';     // 提示框大小，例如 '250x70', '570x150'
// // live2d_settings['waifuFontSize']        = '12px';       // 提示框字体，例如 '12px', '30px'
// // live2d_settings['waifuToolFont']        = '14px';       // 工具栏字体，例如 '14px', '36px'
// // live2d_settings['waifuToolLine']        = '20px';       // 工具栏行高，例如 '20px', '36px'
// // live2d_settings['waifuToolTop']         = '0px'         // 工具栏顶部边距，例如 '0px', '-60px'
// // live2d_settings['waifuMinWidth']        = '768px';      // 面页小于 指定宽度 隐藏看板娘，例如 'disable'(禁用), '768px'
// // live2d_settings['waifuDraggable']       = 'disable';    // 拖拽样式，例如 'disable'(禁用), 'axis-x'(只能水平拖拽), 'unlimited'(自由拖拽)
// // live2d_settings['waifuDraggableRevert'] = true;         // 松开鼠标还原拖拽位置，可选 true(真), false(假)


// // 封装异步加载资源的方法
// function loadExternalResource(url, type) {
// 	return new Promise((resolve, reject) => {
// 		let tag;

// 		if (type === "css") {
// 			tag = document.createElement("link");
// 			tag.rel = "stylesheet";
// 			tag.href = url;
// 		}
// 		else if (type === "js") {
// 			tag = document.createElement("script");
// 			tag.src = url;
// 		}
// 		if (tag) {
// 			tag.onload = () => resolve(url);
// 			tag.onerror = () => reject(url);
// 			document.head.appendChild(tag);
// 		}
// 	});
// }

// // 加载 waifu.css live2d.min.js waifu-tips.js
// if (screen.width >= 768) {
// 	Promise.all([
// 		loadExternalResource(live2d_path + "waifu.css", "css"),
// 		loadExternalResource(live2d_path + "live2d.min.js", "js"),
// 		loadExternalResource(live2d_path + "waifu-tips.js", "js")
// 	]).then(() => {
// 		initWidget({
// 			waifuPath: live2d_path + "waifu-tips.json",
// 			apiPath: "https://live2d.fghrsh.net/api/",
// 			//cdnPath: "https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/"
// 		});
		
// 	});
// }
// // initWidget 第一个参数为 waifu-tips.json 的路径，第二个参数为 API 地址
// // API 后端可自行搭建，参考 https://github.com/fghrsh/live2d_api
// // 初始化看板娘会自动加载指定目录下的 waifu-tips.json

// console.log(`
//   く__,.ヘヽ.        /  ,ー､ 〉
//            ＼ ', !-─‐-i  /  /´
//            ／｀ｰ'       L/／｀ヽ､
//          /   ／,   /|   ,   ,       ',
//        ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
//         ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
//           !,/7 '0'     ´0iソ|    |
//           |.从"    _     ,,,, / |./    |
//           ﾚ'| i＞.､,,__  _,.イ /   .i   |
//             ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
//               | |/i 〈|/   i  ,.ﾍ |  i  |
//              .|/ /  ｉ：    ﾍ!    ＼  |
//               kヽ>､ﾊ    _,.ﾍ､    /､!
//               !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
//               ﾚ'ヽL__|___i,___,ンﾚ|ノ
//                   ﾄ-,/  |___./
//                   'ｰ'    !_,.:
// `);
