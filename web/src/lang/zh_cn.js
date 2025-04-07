export default {
  baseStyle: {
    title: '基础样式',
    background: '背景',
    color: '颜色',
    image: '图片',
    imageRepeat: '图片重复',
    imagePosition: '图片位置',
    imageSize: '图片大小',
    line: '连线',
    width: '粗细',
    style: '风格',
    lineRadius: '圆角大小',
    lineOfOutline: '概要的连线',
    showArrow: '是否显示箭头',
    nodePadding: '节点内边距',
    nodeMargin: '节点外边距',
    horizontal: '水平',
    vertical: '垂直',
    maximumWidth: '显示的最大宽度',
    maximumHeight: '显示的最大高度',
    icon: '图标',
    size: '大小',
    level2Node: '二级节点',
    belowLevel2Node: '三级及以下节点',
    nodeBorderType: '节点边框风格',
    nodeUseLineStyle: '是否使用只有底边框的风格',
    associativeLine: '关联线',
    associativeLineWidth: '粗细',
    associativeLineColor: '颜色',
    associativeLineActiveWidth: '激活粗细',
    associativeLineActiveColor: '激活颜色',
    rootStyle: '根节点',
    associativeLineText: '关联线文字',
    fontFamily: '字体',
    fontSize: '字号',
    rootLineStartPos: '根节点连线起始位置',
    center: '中心',
    edge: '边缘',
    rainbowLines: '彩虹线条',
    notUseRainbowLines: '不使用彩虹线条',
    outerFramePadding: '外框内边距',
    associativeLineStyle: '关联线样式',
    builtInBackgroundImage: '内置背景图片'
  },
  setting: {
    title: '设置',
    openPerformance: '开启性能模式(Beta)',
    enableFreeDrag: '是否开启节点自由拖拽',
    isEnableNodeRichText: '是否开启节点富文本编辑',
    mousewheelAction: '鼠标滚轮行为',
    zoomView: '缩放视图',
    moveViewUpDown: '上下移动视图',
    mousewheelZoomActionReverse: '鼠标滚轮缩放',
    mousewheelZoomActionReverse1: '向前缩小向后放大',
    mousewheelZoomActionReverse2: '向前放大向后缩小',
    createNewNodeBehavior: '创建新节点的行为',
    default: '激活新节点及进入编辑',
    notActive: '不激活新节点',
    activeOnly: '只激活新节点，不进入编辑',
    openRealtimeRenderOnNodeTextEdit: '开启文本编辑实时渲染效果',
    isShowScrollbar: '是否显示滚动条',
    isUseHandDrawnLikeStyle: '是否开启手绘风格',
    isUseMomentum: '是否开启拖动画布的动量效果',
    watermark: '水印',
    showWatermark: '是否显示水印',
    watermarkDefaultText: '水印文字',
    onlyExport: '是否仅在导出时显示',
    watermarkText: '水印文字',
    watermarkTextColor: '文字颜色',
    watermarkLineSpacing: '水印行间距',
    watermarkTextSpacing: '水印文字间距',
    watermarkAngle: '旋转角度',
    watermarkTextOpacity: '文字透明度',
    watermarkTextFontSize: '文字字号',
    belowNode: '显示在节点下方',
    alwaysShowExpandBtn: '是否一直显示展开收起按钮',
    enableAutoEnterTextEditWhenKeydown: '键盘输入时自动进入文本编辑',
    enableInheritAncestorLineStyle: '节点连线样式继承祖先节点的样式',
    confirm: '确定',
    cancel: '取消',
    changeRichTextTip:
      '该操作会清空所有历史修改记录，并且修改思维导图数据，是否继续？',
    changeRichTextTip2: '是否切换为富文本模式？',
    changeRichTextTip3: '是否切换为非富文本模式？',
    enableDragImport: '是否允许直接拖拽文件到页面进行导入',
    imgTextMargin: '节点图片和文本间隔',
    textContentMargin: '节点各种内容间隔',
    enableAi: '是否开启AI功能'
  },
  color: {
    moreColor: '更多颜色'
  },
  contextmenu: {
    insertSiblingNode: '插入同级节点',
    insertChildNode: '插入子级节点',
    insertParentNode: '插入父节点',
    insertSummary: '插入概要',
    moveUpNode: '上移节点',
    moveDownNode: '下移节点',
    deleteNode: '删除节点',
    deleteCurrentNode: '仅删除当前节点',
    copyNode: '复制节点',
    cutNode: '剪切节点',
    pasteNode: '粘贴节点',
    backCenter: '回到根节点',
    expandAll: '展开所有',
    unExpandAll: '收起所有',
    expandTo: '展开到',
    arrangeLayout: '一键整理布局',
    level1: '一级主题',
    level2: '二级主题',
    level3: '三级主题',
    level4: '四级主题',
    level5: '五级主题',
    level6: '六级主题',
    zenMode: '禅模式',
    fitCanvas: '适应画布',
    removeImage: '移除图片',
    removeHyperlink: '移除超链接',
    removeNote: '移除备注',
    removeCustomStyles: '一键去除自定义样式',
    removeAllNodeCustomStyles: '一键去除所有节点自定义样式',
    exportNodeToPng: '导出该节点为图片',
    copyToClipboard: '复制到剪贴板',
    copyToSmm: 'SMM',
    copyToJson: 'JSON',
    copyToMarkdown: 'Markdown',
    copyToTxt: 'Txt',
    copyToPng: '图片',
    copySuccess: '复制成功',
    copyFail: '复制失败',
    number: '编号其子节点',
    expandNodeChild: '展开所有下级节点',
    unExpandNodeChild: '收起所有下级节点',
    addToDo: '添加待办',
    removeToDo: '删除待办',
    aiCreate: 'AI续写',
    modifyNodeLink: '修改节点链接',
    linkToNode: '链接到指定节点',
    removeNodeLink: '删除节点链接'
  },
  count: {
    words: '字数',
    nodes: '节点'
  },
  dialog: {
    cancel: '取 消',
    confirm: '确 定'
  },
  export: {
    title: '导出',
    filename: '导出文件名称',
    include: '是否包含主题、结构等配置数据',
    dedicatedFile: '专有文件',
    jsonFile: 'json文件',
    imageFile: '图片文件',
    svgFile: 'svg文件',
    pdfFile: 'pdf文件',
    markdownFile: 'markdown文件',
    isTransparent: '背景是否透明',
    transformingDomToImages: '正在转换节点：',
    notifyTitle: '消息',
    notifyMessage: '如果没有触发下载，请检查是否被浏览器拦截了',
    paddingX: '水平内边距',
    paddingY: '垂直内边距',
    useMultiPageExport: '是否多页导出',
    defaultFileName: '思维导图',
    addFooterText: '底部添加文字',
    addFooterTextPlaceholder: '比如：来自simple-mind-map',
    desc: '说明',
    options: '选项',
    isFitBg: '是否显示完整背景图片（使用了背景图片时生效）',
    format: '格式'
  },
  fullscreen: {
    fullscreenShow: '全屏查看',
    fullscreenEdit: '全屏编辑'
  },
  demonstrate: {
    demonstrate: '进入演示模式'
  },
  import: {
    title: '导入',
    selectFile: '选取文件',
    support: '支持',
    file: '文件',
    pleaseSelect: '请选择',
    maxFileNum: '最多只能选择一个文件',
    notSelectTip: '请选择要导入的文件',
    fileContentError: '文件内容有误',
    importSuccess: '导入成功',
    fileParsingFailed: '文件解析失败',
    xmindCanvasSelectDialogTitle: '选择要导入的画布'
  },
  navigatorToolbar: {
    openMiniMap: '开启小地图',
    closeMiniMap: '关闭小地图',
    readonly: '切换为只读模式',
    edit: '切换为编辑模式',
    backToRoot: '回到根节点',
    changeSourceCodeEdit: '切换为源码编辑模式'
  },
  nodeHyperlink: {
    title: '超链接',
    link: '链接',
    name: '名称'
  },
  nodeIcon: {
    title: '图标'
  },
  nodeImage: {
    title: '图片',
    imgTitle: '图片标题'
  },
  nodeNote: {
    title: '备注'
  },
  nodeTag: {
    title: '标签',
    addTip: '请按回车键添加'
  },
  outline: {
    title: '大纲',
    nodeDefaultText: '分支节点',
    print: '打印',
    fullscreen: '全屏'
  },
  scale: {
    zoomIn: '放大',
    zoomOut: '缩小'
  },
  shortcutKey: {
    title: '快捷键'
  },
  strusture: {
    title: '结构'
  },
  style: {
    title: '节点样式',
    normal: '常态',
    active: '选中状态',
    text: '文字',
    fontFamily: '字体',
    fontSize: '字号',
    color: '颜色',
    addFontWeight: '加粗',
    italic: '斜体',
    textDecoration: '划线',
    none: '无',
    underline: '下划线',
    lineThrough: '中划线',
    overline: '上划线',
    border: '边框',
    style: '样式',
    width: '宽度',
    borderRadius: '圆角',
    background: '背景',
    shape: '形状',
    line: '线条',
    nodePadding: '节点内边距',
    horizontal: '水平',
    vertical: '垂直',
    gradientStyle: '渐变',
    startColor: '起始',
    endColor: '结束',
    arrowDir: '箭头位置',
    arrowDirStart: '头部',
    arrowDirEnd: '尾部',
    direction: '方向',
    selectNodeTip: '请选择一个节点',
    openLineFlow: '开启流动效果',
    lineFlowDuration: '一个流动周期的时间',
    forward: '正向',
    reverse: '反向',
    img: '图片',
    placement: '布局',
    top: '上',
    bottom: '下',
    left: '左',
    right: '右',
    tag: '标签'
  },
  theme: {
    title: '主题',
    classics: '经典',
    dark: '深色',
    simple: '朴素',
    coverTip: '你当前自定义过基础样式，是否覆盖？',
    tip: '提示',
    cover: '覆盖',
    reserve: '保留'
  },
  toolbar: {
    undo: '回退',
    redo: '前进',
    insertSiblingNode: '同级节点',
    insertChildNode: '子节点',
    deleteNode: '删除节点',
    image: '图片',
    icon: '图标',
    link: '超链接',
    note: '备注',
    tag: '标签',
    summary: '概要',
    displayOutline: '显示大纲',
    baseStyle: '基础样式',
    theme: '主题',
    strusture: '结构',
    newFile: '新建',
    openFile: '打开',
    saveAs: '另存为',
    import: '导入',
    export: '导出',
    shortcutKey: '快捷键',
    associativeLine: '关联线',
    painter: '格式刷',
    formula: '公式',
    attachment: '附件',
    outerFrame: '外框',
    more: '更多',
    selectFileTip: '请选择文件',
    notSupportTip: '你的浏览器不支持该功能，或者当前页面非https协议',
    tip: '提示',
    editingLocalFileTipFront: '当前正在编辑你本机的【',
    editingLocalFileTipEnd: '】文件',
    fileContentError: '文件内容有误',
    fileOpenFailed: '文件打开失败',
    defaultFileName: '思维导图',
    creatingTip: '正在创建文件',
    directory: '目录',
    newFileTip: '新建文件前请先导出当前编辑的文件，谨防内容丢失',
    openFileTip: '打开文件前请先导出当前编辑的文件，谨防内容丢失',
    ai: 'AI'
  },
  edit: {
    newFeatureNoticeTitle: '新特性提醒',
    newFeatureNoticeMessage:
      '本次更新支持了节点富文本编辑，但是存在一定缺陷，最主要的影响是导出为图片的时间和节点数量成正比，所以对导出需求比较依赖的话可以通过【基础样式】-【其他配置】-【是否开启节点富文本编辑】设置关掉富文本编辑模式。',
    root: '根节点',
    splitByWrap: '是否按换行自动分割节点？',
    tip: '提示',
    yes: '是',
    no: '否',
    exportError: '导出失败',
    dragTip: '在此释放以导入该文件',
    deleteNodeImgTip: '是否确认删除该节点图片？',
    autoOpenNodeRichTextTip: '检测到导入了富文本内容，已自动开启富文本模式',
    localStorageExceededTip:
      '你创建的思维导图体积已经超过浏览器允许存储的上限，请立即导出，否则数据将丢失！建议下载客户端进行使用，客户端无大小限制。'
  },
  mouseAction: {
    tip1: '当前：左键拖动画布，右键框选节点',
    tip2: '当前：左键框选节点，右键拖动画布'
  },
  search: {
    searchPlaceholder: '输入查找内容后按回车键',
    replacePlaceholder: '请输入替换内容',
    replace: '替换',
    replaceAll: '全部替换',
    cancel: '取消',
    noResult: '暂无结果'
  },
  nodeIconSidebar: {
    title: '图标/贴纸',
    icon: '图标',
    sticker: '贴纸'
  },
  formulaSidebar: {
    title: '公式',
    placeholder: '请输入 LaTeX 语法',
    confirm: '完成',
    common: '常用公式',
    tip: '非富文本模式下不支持插入公式'
  },
  richTextToolbar: {
    bold: '加粗',
    italic: '斜体',
    underline: '下划线',
    strike: '删除线',
    fontFamily: '字体',
    fontSize: '字号',
    color: '字体颜色',
    backgroundColor: '背景颜色',
    removeFormat: '清除样式',
    textAlign: '对齐方式'
  },
  other: {
    loading: '正在加载，请稍后...'
  },
  sourceCodeEdit: {
    sourceCodeTip:
      '富文本模式下不建议修改样式，因为需要同步修改数据及html结构。',
    format: '格式化',
    copy: '复制',
    confirm: '完成',
    close: '关闭',
    formatErrorTip: 'JSON格式有误，请检查后再试',
    copyTip: '已复制到剪贴板',
    formatTip: '格式化完成'
  },
  attachment: {
    deleteAttachment: '删除附件',
    tip: '附件功能仅在客户端可用'
  },
  annotation: {
    mark: '标记',
    show: '显示标记',
    type: '类型',
    color: '颜色',
    lineWidth: '线宽',
    padding: '内边距',
    animate: '开启动画'
  },
  nodeOuterFrame: {
    nodeOuterFrameStyle: '外框样式',
    outerFrameSetting: '外框',
    deleteOuterFrame: '删除外框',
    boxStyle: '边框样式',
    boxColor: '边框颜色',
    fillColor: '填充颜色',
    outerFrameText: '外框文字',
    deleteOuterFrameText: '删除文字',
    fontFamily: '字体',
    color: '颜色',
    fontSize: '字号',
    radius: '圆角',
    fontBold: '加粗',
    italic: '斜体',
    lineHeight: '行高',
    textFillRadius: '背景圆角',
    textFill: '背景填充',
    textAlign: '显示位置',
    left: '左',
    center: '中',
    right: '右',
    paddingX: '水平内边距',
    paddingY: '垂直内边距'
  },
  nodeTagStyle: {
    placeholder: '请输入标签内容',
    delete: '删除此标签'
  },
  ai: {
    chatTitle: 'AI对话',
    clearRecords: '清空记录',
    connectFailedTitle: '客户端连接失败提示',
    connectFailedTip: '客户端连接失败，请检查：',
    connectFailedCheckTip1:
      '1.是否安装了思绪思维导图客户端，如果没有请点此安装：',
    connectFailedCheckTip2: '2.如果安装了客户端，请确认是否打开了客户端。',
    connectFailedCheckTip3:
      '3.如果已经安装并启动了，那么可以尝试关闭然后重新启动。',
    connectFailedCheckTip4: '完成以上步骤后可点击：',
    baiduNetdisk: '百度网盘',
    createMindMapTitle: '一键生成思维导图',
    createTip:
      '请输入一个主题，AI会根据你的主题生成思维导图，如：杭州周末出游计划。',
    importantTip: '重要提示：一键生成会覆盖现有数据，建议先导出当前数据。',
    wantModifyAiConfigTip: '想要修改AI配置？请点击：',
    modifyAIConfiguration: '修改AI配置',
    chatInputPlaceholder: 'Enter 发送，Shift + Enter 换行。',
    send: '发送',
    stopGenerating: '停止生成',
    generationFailed: '生成失败',
    aiGenerationSuccess: 'AI生成完成',
    stoppedGenerating: '已停止生成',
    AIConfiguration: 'AI配置',
    VolcanoArkLargeModelConfiguration: '火山方舟大模型配置：',
    configTip: '目前仅支持火山方舟大模型，需要自行去获取key，详细操作步骤见：',
    course: '教程',
    inferenceAccessPoint: '推理接入点',
    mindMappingClientConfiguration: '思绪思维导图客户端配置：',
    port: '端口',
    cancel: '取消',
    confirm: '确认',
    close: '关闭',
    configSaveSuccessTip: '配置保存成功',
    apiValidateTip: '请输入接口',
    keyValidateTip: '请输入API Key',
    modelValidateTip: '请输入推理接入点',
    portValidateTip: '请输入端口',
    methodValidateTip: '请选择请求方式',
    noInputTip: '请输入内容',
    connectSuccessful: '连接成功',
    connectFailed: '连接失败',
    connectionDetection: '连接检测',
    configurationMissing: '配置缺失',
    aiCreateMsgPrefix: '帮我写一个【',
    aiCreateMsgPostfix:
      '】，需要以Markdown格式返回，并且只能使用Markdown的标题和无序列表两种语法，可以支持多层嵌套。只需返回内容即可。',
    aiCreatePartMsgPrefix: '我有一个主题为【',
    aiCreatePartMsgCenter: '】的思维导图，帮我续写其中一个内容为【',
    aiCreatePartMsgPostfix:
      '】的节点的下级内容，需要以Markdown格式返回，并且只能使用Markdown的标题和无序列表两种语法，可以支持多层嵌套。只需返回内容即可。'
  },
  note: {
    title: '备注'
  },
  nodeLink: {
    linkToNode: '链接到指定节点',
    addReturn: '是否添加反向链接',
    tip1: '请选择要链接到的节点',
    tip2: '不能链接自己',
    tip3: '链接成功',
    tip4: '删除成功',
    tip5: '链接节点不存在，是否删除该链接？'
  }
}
