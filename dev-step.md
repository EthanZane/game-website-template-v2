# 基于该模板的开发步骤

## 各模块的代码对应

### header
1. 组件在lib\components\navbar.tsx
2. name、logo、domain、icon配置在lib\config\default.json
3. navitems的配置在resources\navbar\en.json，每个国际化文件都要配置
4. 国际化切换语言选项在lib\i18n\locales.ts里的localeNames中配置

### footer
1. 组件在lib\components\footer.tsx
2. 在resources\navbar\en.json国际化配置中获取，title、slogan（在site.json中配置的从哪个key中取，这个不用修改）
3. 帮助链接与header中的navitems一样共用配置，都是在resources\navbar\en.json
4. 语言选择，也与header一样共用配置
5. 友情链接，在config\site.json的friendLinks中配置

### IframeSection
页面嵌入游戏框，入口页面在：app\[locale]\(public)\page.tsx
1. 组件在app\[locale]\(public)\views\IframeSection.tsx
2. 内容配置在messages\en.json的HomeIframe配置下
3. 嵌入链接等本身不需要国际化的内容在lib\config\site.json中配置
4. 嵌入iframe类型游戏，代码里还有download、video、image等类型，暂未研究

### faqs
页面嵌入游戏框，入口页面在：app\[locale]\(public)\page.tsx
1. faq的标题内容配置在messages\en.json的HomeFAQs下
2. faq的qa在resources\faqs\en.json下配置

### showVideo
页面嵌入游戏框，入口页面在：app\[locale]\(public)\page.tsx
1. lib\config\site.json的isShowVideo属性控制是否需要显示视频模块，默认不显示
2. video列表也在site.json中的videos配置，因为不需要国际化 //后续自己完善代码，现在没有支持国际化

### Comments
页面嵌入游戏框，入口页面在：app\[locale]\(public)\page.tsx
1. lib\config\site.json的isShowComment属性控制是否需要显示评论模块，默认显示
2. 评论章节的标题在messages\en.json的HomeComments下
3. 评论列表在site.json的comments配置，现在还没有支持国际化 //后续自己完善代码

### Features
入口页面在：app\[locale]\(public)\page.tsx

1. 组件在app\[locale]\(public)\views\Features.tsx
2. 内容配置在messages\en.json的HomeFeatures配置下
3. Features模块的whatis模块的配图在：public\game_screenshot.webp //可以做下优化，文件名和img元素都要包含游戏关键词
4. howToPlayStep1和feature2Title的个数是固定，新增后要修改对应代码//后面优化下代码
5. p标签的文字如果要高亮显示，json中用[highlight]Sprunki Pyramixed[/highlight]表示，参考how to play

### Recommendation
入口页面在：app\[locale]\(public)\page.tsx
1. 组件在app\[locale]\(public)\views\Recommendation.tsx
2. 章节标题配置在messages\en.json的HomeRecommendation下


### Privacy Policy和Terms of Services
1. Privacy Policy在app\[locale]\(public)\privacy-policy
2. Terms of Services在app\[locale]\(public)\terms-of-services
3. 两个页面都采用mdx文档填写内容，默认至少配置en.mdx

### 其他
1. 主题切换：lib\config\site.json里修改theme.name(主题名称可以是themes目录下的任意一个主题名称)
2. 修改主题配置要重启开发服务器，不然不会生效
2. ga
3. ads
