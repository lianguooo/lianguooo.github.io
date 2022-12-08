import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as i,a as e,b as o,d as r,e as n,r as l}from"./app.709ed15b.js";const c={},d=e("blockquote",null,[e("p",null,"当所有的录屏应用都无法满足我时，我的目光投向了那个最终极的命令行工具，FFmpeg。")],-1),f={href:"https://newzone.top/_posts/2022-05-22-surveillance_video_for_myself.html",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.videolan.org/vlc/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://obsproject.com/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/MathewSachin/Captura/releases/tag/v8.0.0",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,"免费的不行，那收费的会不会好点呢？",-1),g={href:"https://www.bandicam.cn/",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,"再后，我测试了其他几款录屏应用：",-1),b=e("li",null,"相机：Windows 自带应用，录制方便，但输出选项少，限制多。",-1),F={href:"https://www.flashbackrecorder.com/zh/express/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://mirillis.com/zh/products/action.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://ohsoft.net/eng/ocam/intro.php?cate=1002",target:"_blank",rel:"noopener noreferrer"},w={href:"https://getsharex.com/",target:"_blank",rel:"noopener noreferrer"},v=n('<p>我一共试了 9 款录屏软件，体验都不算好，软件普遍存在无法自定义画面、不兼容、稳定性低的问题。再加上自我监控方案的单次录制时间在 12 小时以上，理想的帧率（0.02 帧）远超出应用最低 15-30 帧的下限。因此，我需要另找一款稳定能兼容自由度高，又能自由定制录屏方案的工具，最终找到的是 FFmpeg。</p><h2 id="为什么-ffmpeg" tabindex="-1"><a class="header-anchor" href="#为什么-ffmpeg" aria-hidden="true">#</a> 为什么 FFmpeg</h2><p>FFmpeg 是处理多媒体内容 (如音频、视频、字幕和相关元数据) 的库和工具的集合，支持在 Linux、MacOS 和 Windows 全平台运行。它提供了录制、转换以及流化音视频的完整解决方案。</p><p>之前那些录屏、视频处理工具几乎都是基于 FFmpeg 而开发的。FFmpeg 能实现它们所有的功能，同时具备超高的稳定性和兼容性。现成的录屏应用与 FFmpeg 相比，优势只在于其美观的界面和简单易上手的录制方案。</p><p>如果你想跳出软件的限制，自由的定制录屏效果，避免莫名其妙的 bug，更加底层的 FFmpeg 反而是更稳定有效的方案。命令行录制看起来复杂，但实际上只需要熟悉十几个参数，你就能定制专属录屏方案，个人感觉比熟悉 Bandicam 的软件界面更简单。</p><p>下面以我的 Windows 桌面录制方案为例，从多屏幕中指定一个 2k 区域进行录制，并在画面右下角添加 360p 的摄像头录制角度，然后以帧率 0.02 输出监控视频。按 <code>q</code> 则停止录制。</p><p><figure><img src="http://tc.seoipo.com/2022-11-03-13-16-44.png" alt="" title="输出画面如图例" loading="lazy"><figcaption>输出画面如图例</figcaption></figure></p><h2 id="录屏准备" tabindex="-1"><a class="header-anchor" href="#录屏准备" aria-hidden="true">#</a> 录屏准备</h2><h3 id="配置-ffmpeg" tabindex="-1"><a class="header-anchor" href="#配置-ffmpeg" aria-hidden="true">#</a> 配置 FFmpeg</h3>',9),q={href:"https://github.com/BtbN/FFmpeg-Builds/releases/tag/latest",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"ffmpeg-master-latest-win64-gpl.zip",-1),D=n('<li><p>将 FFmpeg 解压到任意文件夹，比如 <code>D:\\Backup\\Libraries\\Documents\\ffmpeg</code>。</p></li><li><p>开始栏搜索「编辑系统环境变量」，点击进入「环境变量」。</p></li><li><p>新建用户变量 <code>FFMPEG_HOME</code>，变量值设为刚才的解压路径 <code>D:\\Backup\\Libraries\\Documents\\ffmpeg</code>。</p><p><figure><img src="http://tc.seoipo.com/2022-11-01-18-13-49.png" alt="" title="FFmpeg 全局变量设置" loading="lazy"><figcaption>FFmpeg 全局变量设置</figcaption></figure></p></li>',3),B=e("p",null,"配置完成后，在终端输入 ffmpeg 即可启动。",-1),C=e("p",null,[e("figure",null,[e("img",{src:"http://tc.seoipo.com/2022-11-01-18-17-13.png",alt:"",title:"FFmpeg 配置成功",loading:"lazy"}),e("figcaption",null,"FFmpeg 配置成功")])],-1),z=e("h3",{id:"配置视频-音频设备",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置视频-音频设备","aria-hidden":"true"},"#"),o(" 配置视频/音频设备")],-1),S={href:"https://github.com/rdp/screen-capture-recorder-to-video-windows-free/releases",target:"_blank",rel:"noopener noreferrer"},V=n('<p>通过命令 <code>ffmpeg -list_devices true -f dshow -i dummy</code> 查看支持的 Windows DirectShow 输入设备，采集视频和音频设备，包含设备名称，设备类型等信息。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup> 这里得到了视频设备「V380 FHD Camera」和音频设备「Analogue 1/2 (Audient iD4)」，之后会用到。</p><p><figure><img src="http://tc.seoipo.com/2022-11-03-10-33-52.png" alt="" title="查看视频/音频设备列表" loading="lazy"><figcaption>查看视频/音频设备列表</figcaption></figure></p><h2 id="录制屏幕" tabindex="-1"><a class="header-anchor" href="#录制屏幕" aria-hidden="true">#</a> 录制屏幕</h2><p>从坐标 0:0 开始圈定出一个 2560x1440 的屏幕范围，然后以 每 50 秒截图 1 帧，输出为 mp4 格式的视频，录制命令为 <code>ffmpeg -f gdigrab -r 20/1001 -draw_mouse 1 -offset_x 0 -offset_y 0 -video_size 2560x1440 -i desktop -s 1280x720 output.mp4</code>。<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><p>以下是录制命令的说明：</p>',5),H=e("code",null,"-f gdigrab",-1),L={href:"https://ffmpeg.org/ffmpeg-all.html#gdigrab",target:"_blank",rel:"noopener noreferrer"},W={href:"https://ffmpeg.org/ffmpeg-devices.html#avfoundation",target:"_blank",rel:"noopener noreferrer"},A={href:"https://ffmpeg.org/ffmpeg-all.html#x11grab",target:"_blank",rel:"noopener noreferrer"},M=n('<li><code>-r 20/1001</code> 帧率为 0.02，每 50 秒录制 1 帧。主流大家喜欢用 <code>-r 30</code> 录制，我这因为是每日监测视频，用了超低帧率。</li><li><code>-c:v libx264</code> 是用于设置视频编解码器，一般可不填使用默认配置，<code>-c:a</code> 为音频编码。<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup></li><li><code>-draw_mouse 1</code> 在 gdigrab 录制的视频中显示鼠标。</li><li><code>-offset_x 0 -offset_y 0 -video_size 2560x1440</code> 为起始坐标和选定录制范围。坐标可使用截图软件获取，比如我用 Snipaste，点击 F1 后进入截图界面，鼠标经过当前区域就会显示坐标。</li><li><code>-s 1280x720</code> 用 scale 方法，设置视频分辨率为 720p。</li><li><code>-i desktop</code> 为输入设备，指代显示屏。</li><li><code>out.mp4</code> 为输出视频的名字与格式。默认保存在命令运行文件夹，可以在此处设置输出位置，如 <code>D:\\Backup\\Libraries\\Desktop\\out.mp4</code>。或使用时间对视频命名，将 <code>out.mp4</code> 替换为 <code>-f segment -segment_time 2 -strftime 1 %Y-%m-%d_%H-%M-%S.mp4</code>，视频样例名为 <code>2022-11-06_10-53-17.mp4</code>。</li>',7),E=n('<p>除上方命令外，FFmpeg 还有许多参数可以设置，比如 <code>-pix_fmt yuv420p -preset ultrafast</code> 提升编码速度，<code>-filter:v &quot;setpts=0.1*PTS&quot;</code> 减少视频抽样，但 setpts 不是视频加速，对于低帧率的视频影响很小。<sup class="footnote-ref"><a href="#footnote4">[4]</a><a class="footnote-anchor" id="footnote-ref4"></a></sup> <sup class="footnote-ref"><a href="#footnote5">[5]</a><a class="footnote-anchor" id="footnote-ref5"></a></sup></p><h2 id="录制摄像头" tabindex="-1"><a class="header-anchor" href="#录制摄像头" aria-hidden="true">#</a> 录制摄像头</h2><p>然后，我们使用上方获取的视频设备，即可用摄像头进行录制，如 <code>ffmpeg -f dshow -i video=&quot;V380 FHD Camera&quot; output.mp4</code>。</p><p>如果录屏的同时需要录制音频，则在命令中加入之前获取的音频设备，命令变为 <code>ffmpeg -f dshow -i audio=&quot;Analogue 1/2 (Audient iD4)&quot; -f dshow -i video=&quot;V380 FHD Camera&quot; output.mp4</code>。</p><h2 id="输出视频-画中画" tabindex="-1"><a class="header-anchor" href="#输出视频-画中画" aria-hidden="true">#</a> 输出视频：画中画</h2><p>清楚如何用 FFmpeg 录制屏幕、摄像头和音频后，我需要将他们放置于同一画面中，将摄像头画面放在录制画面的右下侧，并用 overlay 方法将其置于屏幕画面的上方，遮挡对应区域。<sup class="footnote-ref"><a href="#footnote6">[6]</a><a class="footnote-anchor" id="footnote-ref6"></a></sup> <sup class="footnote-ref"><a href="#footnote7">[7]</a><a class="footnote-anchor" id="footnote-ref7"></a></sup></p><p>综合了以上三步，最终的录制命令为：<code>ffmpeg -f gdigrab -r 1 -draw_mouse 1 -offset_x 0 -offset_y 0 -video_size 2560x1440 -i desktop -s 1280x720 -b:v 0 -crf 32 output.mp4 -f dshow -i audio=&quot;Analogue 1/2 (Audient iD4)&quot; -f dshow -s 640x360 -i video=&quot;V380 FHD Camera&quot; -filter_complex &quot;overlay=W-w-1:H-h-1&quot; -y</code>。</p><ul><li><code>-b:v 0 -crf 32</code> 是将视频比特率设置为最小，同时使用恒定质量，CRF 的范围可以从 0（最佳质量）到 63（最小文件大小）。</li><li><code>overlay=W-w-1:H-h-1</code> 这是一个坐标，指浮层放在右下角，距离边缘 1px。</li><li><code>-y</code> 遇到选项时，默认执行 yes 命令，比如覆盖同名的视频文件。</li></ul><p>命令中的录制帧率较低，但不会影响同时录制的音频。之后的录屏只需在终端中运行这段命令，就会自动录制屏幕，按 <code>q</code> 即可停止录制。使用 FFmpeg 后，我的录屏再也没有莫名其妙的崩溃了。</p><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="could-not-set-video-options" tabindex="-1"><a class="header-anchor" href="#could-not-set-video-options" aria-hidden="true">#</a> Could not set video options</h3><p>报错 <code>Could not set video options</code>，多是由于录制设置的帧率、分辨率超出设备范围造成的。使用命令 <code>ffmpeg -f dshow -list_options true -i video=&quot;V380 FHD Camera&quot; -loglevel debug</code> 检查设备的输出属性，调整录制属性。</p><h3 id="real-time-buffer" tabindex="-1"><a class="header-anchor" href="#real-time-buffer" aria-hidden="true">#</a> real-time buffer</h3>',13),O=e("code",null,"real-time buffer [xxxxxx] [video input] too full or near too full (181% of size: 3041280 [rtbufsize parameter])! frame dropped!",-1),N={href:"https://github.com/rdp/screen-capture-recorder-to-video-windows-free/issues/136",target:"_blank",rel:"noopener noreferrer"},P=n('<h3 id="摄像头分辨率错误" tabindex="-1"><a class="header-anchor" href="#摄像头分辨率错误" aria-hidden="true">#</a> 摄像头分辨率错误</h3><p>如果摄像头画面出现裁切，分辨率与预想不同，则检查摄像头录制属性和摄像头应用输出分辨率。例如部分版本的 SplitCam Video Driver 对外场景尺寸被固定为 4:3，导致输出画面被裁剪，只能更换其他视频输入源。</p><h3 id="录制画面偏移" tabindex="-1"><a class="header-anchor" href="#录制画面偏移" aria-hidden="true">#</a> 录制画面偏移</h3><p>录制画面比例异常或画幅偏移，这是 Windows 的屏幕缩放造成的，勾选 ffmpeg.exe 的属性「高 DPI 缩放替代」即可解决。</p><h2 id="后续" tabindex="-1"><a class="header-anchor" href="#后续" aria-hidden="true">#</a> 后续</h2><p>如果读了 FFmpeg 的文档，就会发现这个工具异常强大，很多采用 FFmpeg 的工具都没有将它的功能性发挥到极致，用比较普适的功能尽可能地换取了软件操作的易用性。而相应地，如果和我一样，有一个比较小众，甚至特殊的需求，已经打包好的图形界面应用就很有可能力有不逮。这时，FFmpeg 这种底层的命令行工具可能就是唯一选择，而且用了就会发现，它在功能强大的同时还更加稳定，自定义能力也更强。而且如果跨过了起初对于命令行的恐惧，理解和上手其实也不算多难。</p><p>而且，FFmpeg 的功能不止录屏，它还有诸如连续截图、视频转帧率改大小等多种玩法，非常强大。</p>',7),I={href:"https://ffmpeg.guide/",target:"_blank",rel:"noopener noreferrer"},j=e("p",null,"当然，这篇文章的目的是分享我监控自己的延伸，分享使用 FFmpeg 录屏的入门方法，而非完全掌握，因此只介绍了录屏相关的核心命令。如果有需要，还是推荐研究一下官方文档，或者跟着我做的试一试，说不定就有新收获。",-1),G={href:"https://sspai.com/post/76637",target:"_blank",rel:"noopener noreferrer"},T=e("hr",{class:"footnotes-sep"},null,-1),J={class:"footnotes"},R={class:"footnotes-list"},X={id:"footnote1",class:"footnote-item"},Y={href:"https://blog.csdn.net/m0_60352504/article/details/126762161",target:"_blank",rel:"noopener noreferrer"},K=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),Q={id:"footnote2",class:"footnote-item"},U={href:"https://blog.csdn.net/JineD/article/details/123057086",target:"_blank",rel:"noopener noreferrer"},Z=e("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1),$={id:"footnote3",class:"footnote-item"},ee={href:"https://ffmpeg.org/ffmpeg-codecs.html#libx265",target:"_blank",rel:"noopener noreferrer"},oe=e("a",{href:"#footnote-ref3",class:"footnote-backref"},"↩︎",-1),te={id:"footnote4",class:"footnote-item"},re={href:"https://magiclen.org/x265-preset/",target:"_blank",rel:"noopener noreferrer"},ne=e("a",{href:"#footnote-ref4",class:"footnote-backref"},"↩︎",-1),ae={id:"footnote5",class:"footnote-item"},se={href:"https://blog.csdn.net/zhying719/article/details/123059209",target:"_blank",rel:"noopener noreferrer"},ie=e("a",{href:"#footnote-ref5",class:"footnote-backref"},"↩︎",-1),le={id:"footnote6",class:"footnote-item"},ce={href:"https://www.cnblogs.com/leisure_chn/p/10434209.html",target:"_blank",rel:"noopener noreferrer"},de=e("a",{href:"#footnote-ref6",class:"footnote-backref"},"↩︎",-1),fe={id:"footnote7",class:"footnote-item"},pe={href:"https://blog.csdn.net/guanyijun123/article/details/121270650",target:"_blank",rel:"noopener noreferrer"},he=e("a",{href:"#footnote-ref7",class:"footnote-backref"},"↩︎",-1);function _e(ue,ge){const t=l("ExternalLinkIcon");return s(),i("div",null,[d,e("p",null,[o("开始 "),e("a",f,[o("自我监控"),r(t)]),o(" 后，录屏工具的重要性急速提升，我遇到的问题也越来越多。")]),e("p",null,[o("因为我录屏主要是为了自我监控，所以我需要的帧率并不用很高，甚至越低越好，分辨率同样不必和屏幕一致，能看清我在做什么即可。最初，我用了免费开源的 "),e("a",p,[o("VLC"),r(t)]),o("，这也是我文章里采用的方案。它能调节输出视频的编码、帧率、格式，但操作麻烦不说，还不能同时录屏和摄像头，暂停录制容易程序崩溃。")]),e("p",null,[o("然后，我试了 "),e("a",h,[o("OBS"),r(t)]),o("，它的录制功能极其强大，可以任意添加摄像头、文字、图像等，但输出限制多，生成的视频过大。同时，OBS 不支持录制画面与直播画面分开，而我平常习惯边开直播边工作，这令我只能放弃 OBS 录屏。")]),e("p",null,[o("接着，我遇到 7.8k Star 的 "),e("a",_,[o("Captura"),r(t)]),o("，它的自由度较高，能自定义叠加元素，然而项目已于 2018 年停止更新，使用时经常碰到莫名其妙的报错，很不稳定。")]),u,e("p",null,[o("我用 "),e("a",g,[o("Bandicam"),r(t)]),o(" 录了一周的视频。与 Captura 相比，Bandicam 的稳定性好了很多，不会突然崩溃，还能降噪，内录扬声器音频，但它时不时丢失摄像头，导致无法自动进行录屏。")]),m,e("ul",null,[b,e("li",null,[e("a",F,[o("FlashBack Express"),r(t)]),o("：能调节帧率，镜像，虚化背景，但免费版只支持 2 小时内的录制。")]),e("li",null,[e("a",x,[o("Mirillis Action!"),r(t)]),o("：高帧率录制游戏，自动分割视频，自定义叠加元素，但输入帧率不能自由调整，最低只能 15 帧，试用期 30 天。")]),e("li",null,[e("a",k,[o("oCam"),r(t)]),o("：打着免费招牌但有弹窗广告，且输出视频偏大。")]),e("li",null,[e("a",w,[o("ShareX"),r(t)]),o("：免费开源强大的截图软件，具备录屏功能，能调节编码和帧率，但只能单一录屏或录像。")])]),v,e("ol",null,[e("li",null,[e("p",null,[o("下载最新版 "),e("a",q,[o("FFmpeg"),r(t)]),o("，Windows 环境选择 "),y,o("，GPL 版本包含了所有依赖项。")])]),D]),B,C,z,e("p",null,[o("FFmpeg 的录制命令 gdigrab 不支持音频录制，也不支持直接调用摄像头，此时需使用开源的 "),e("a",S,[o("screen-capture-recorder-to-video-windows-free"),r(t)]),o(" 增强 FFmpeg 的录制功能，其最新版本为 0.12.12。")]),V,e("ul",null,[e("li",null,[H,o(" 使用 FFmpeg 内置的 Windows 屏幕录制命令 "),e("a",L,[o("gdigrab"),r(t)]),o("，录制对象可为全屏、指定范围和指定程序。MacOS 录屏方法为 "),e("a",W,[o("AVFoundation"),r(t)]),o("，Linux 录屏方法为 "),e("a",A,[o("x11grab"),r(t)]),o("。")]),M]),E,e("p",null,[o("报错 "),O,o("，解决方案参考 "),e("a",N,[o("issue 136"),r(t)]),o("。这个报错我依然有出现，不过并未影响到录屏效果。")]),P,e("p",null,[o("前几天，群里有人分享了快速生成 FFmpeg 命令的工具 "),e("a",I,[o("FFmpeg.guide"),r(t)]),o("。本以为能帮新手快速入门，使用后却感觉不实用。FFmpeg 最快入门的方法还是得看官方文档，也有一些爱好者整理翻译了相关的中文/视频教程。前期会耗费些时间，但只要定制好自己要的命令，之后能一直用。")]),j,e("p",null,[o("本文于「"),e("a",G,[o("少数派首发"),r(t)]),o("」。")]),T,e("section",J,[e("ol",R,[e("li",X,[e("p",null,[e("a",Y,[o("ffmpeg 录屏命令"),r(t)]),o(),K])]),e("li",Q,[e("p",null,[e("a",U,[o("ffmpeg 基础使用"),r(t)]),o(),Z])]),e("li",$,[e("p",null,[e("a",ee,[o("libx265 编码说明"),r(t)]),o(),oe])]),e("li",te,[e("p",null,[e("a",re,[o("x265 的 preset 与编码速度、视频画质以及比特率的关联"),r(t)]),o(),ne])]),e("li",ae,[e("p",null,[e("a",se,[o("FFmpeg 音视频倍速控制"),r(t)]),o(),ie])]),e("li",le,[e("p",null,[e("a",ce,[o("FFmpeg 中 overlay 滤镜用法 - 水印及画中画"),r(t)]),o(),de])]),e("li",fe,[e("p",null,[e("a",pe,[o("ffmpeg 调整缩放裁剪视频的基础知识 (转)"),r(t)]),o(),he])])])])])}const Fe=a(c,[["render",_e],["__file","2022-11-03-ffmpeg_screen_recording.html.vue"]]);export{Fe as default};
