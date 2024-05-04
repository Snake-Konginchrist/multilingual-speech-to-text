# 语音识别示例（基于微软语音服务）

这个项目展示了如何使用 Microsoft Azure Speech SDK 实现一个简单的语音识别功能，直接在前端进行语音到文本的转换。本示例支持中文语音输入。

## 特性

- 使用 Microsoft Azure Speech SDK
- 前端实现语音到文本功能
- 简洁美观的用户界面

## 前提条件

要运行此项目，您需要有一个有效的 Microsoft Azure 订阅，并且需要创建一个语音服务资源以获取必要的订阅密钥和区域信息。

## 设置

### 获取 Azure 语音服务密钥

1. 登录到 [Microsoft Azure Portal](https://portal.azure.com/)
2. 创建一个语音服务资源
3. 在资源的“键和终结点”页面，复制您的密钥和区域信息

### 本地项目设置

1. 克隆此仓库到本地机器，或者下载所有文件到一个文件夹。
2. 替换 `script.js` 文件中的 `YOUR_SUBSCRIPTION_KEY` 和 `YOUR_SERVICE_REGION` 占位符为实际的密钥和区域。

## 使用

打开 `index.html` 文件在您的浏览器中运行项目，点击“开始识别”按钮并对麦克风说话，识别结果将显示在下方。

## 技术栈

- HTML
- CSS
- JavaScript
- Microsoft Azure Speech SDK

## 文件结构

```plaintext
/templates
|-- index.html          # 主页面
|-- script.js           # 脚本文件，包含语音识别逻辑
|-- styles.css          # 样式文件
```

## 版权和许可

本项目使用 MIT 许可证发行。更多详情请查看 `LICENSE` 文件。

## 如何贡献

如果您有任何改进意见或功能添加的想法，请通过 pull requests 或 issues 提交。

## 联系方式
- GitHub: [Snake-Konginchrist](https://github.com/Snake-Konginchrist)
- Gitee: [Snake-Konginchrist](https://gitee.com/Snake-Konginchrist)
- Email: developer@skstudio.cn（优先）