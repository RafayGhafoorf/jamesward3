webpackJsonp([25],{1195:function(e,t,_){var o=_(1)(_(1432),_(1761),null,null,null);o.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/guide/config.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] config.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},1432:function(e,t,_){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},methods:{},components:{}}},1761:function(e,t,_){e.exports={render:function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{staticClass:"doc"},[_("h2",[e._v("全局配置")]),e._v(" "),e._m(0),e._v(" "),_("p",[e._v("在系统开发过程中，设定完整的字典库，以及集中autocomplete配置，tree配置，具体页面中，我们只使用调用。")]),e._v(" "),_("h3",[e._v("全局字典")]),e._v(" "),_("p",[e._v("我们的整体设计是从数据驱动交互，而在数据的交互过程中，去除简单的input输入，最多的是字典的选择。")]),e._v(" "),_("h4",[e._v("字典定义")]),e._v(" "),_("p",[e._v("系统中使用的字典，我们有两种方式可以定义字典。")]),e._v(" "),e._m(1),e._v(" "),_("h4",[e._v("字典应用-组件")]),e._v(" "),_("p",[e._v("我们将字典标准化，控件可以通过字典的key驱动，而交互无非是在通过不同的数据量选择不同的交互类型。")]),e._v(" "),e._m(2),e._v(" "),_("h4",[e._v("字典应用-展示")]),e._v(" "),e._m(3),e._v(" "),_("ul",{staticClass:"text-ul"},[_("li",[_("code",{domProps:{innerHTML:e._s("{{value | dictMapping(key)}}")}}),e._v(": 展示对应的文本")])]),e._v(" "),_("h4",[e._v("示例")]),e._v(" "),_("example",{attrs:{demo:"basic/demo2"}}),e._v(" "),_("h3",[e._v("全局配置")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),_("h4",[e._v("dict")]),e._v(" "),e._m(6),e._v(" "),_("codes",{attrs:{type:"javascript"}},[e._v("HeyUI.config('dict.keyName', \"key\");\nHeyUI.config('dict.titleName', \"title\");")]),e._v(" "),_("h4",[e._v("tree")]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),_("example",{attrs:{demo:"plugins/tree7"}}),e._v(" "),_("h4",[e._v("autocomplete")]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),_("example",{attrs:{demo:"dataplugins/autocomplete13"}}),e._v(" "),_("h4",[e._v("uploader, menu, modal, page, datepicker")]),e._v(" "),e._m(11)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("p",[e._v("全局配置是属于"),_("code",[e._v("HeyUI")]),e._v("最大的一个特性。")])},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ul",{staticClass:"text-ul"},[_("li",[_("code",[e._v("HeyUI.initDict({key: value})")]),e._v(": 初始化字典对象")]),e._v(" "),_("li",[_("code",[e._v("HeyUI.addDict(key, value)")]),e._v(" 添加字典")]),e._v(" "),_("li",[_("code",[e._v("HeyUI.getDict(key)")]),e._v(": 获取字典值")])])},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ul",{staticClass:"text-ul"},[_("li",[e._v("1~5个选择项单选：Radio, 或者Select")]),e._v(" "),_("li",[e._v("1~5个选择项多选：Checkbox, 或者Select(multiple)")]),e._v(" "),_("li",[e._v("5~15个选择项单选/多选：Select")]),e._v(" "),_("li",[e._v("15~40个选择项单选/多选：Select(filterable), 或者AutoComplete")]),e._v(" "),_("li",[e._v("40个以上或者需要远程模糊查询：AutoComplete")])])},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("p",[e._v("在一些展示的数据中，我们需要通过"),_("code",[e._v("key/keys")]),e._v("获取对应的文本。")])},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("p",[e._v("通过"),_("code",[e._v("HeyUI")]),e._v("可以对一些参数进行全局配置，具体配置项参考："),_("a",{attrs:{href:"https://github.com/heyui/heyui/blob/master/src/utils/config.js",target:"_blank"}},[e._v("config.js")])])},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ul",{staticClass:"text-ul"},[_("li",[_("code",[e._v("HeyUI.config(key, value)")]),e._v(": 设置配置，"),_("code",[e._v("key")]),e._v("可以是路径方式，例："),_("code",[e._v("tree.default")])]),e._v(" "),_("li",[_("code",[e._v("HeyUI.getOption(key)")]),e._v(": 获取配置。")])])},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("p",[e._v("设定全局字典的"),_("code",[e._v("key")]),e._v(","),_("code",[e._v("value")]),e._v("的命名。")])},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("p",[e._v("设定"),_("code",[e._v("tree")]),e._v("的默认参数，以及定义系统中存在的不同tree的调用。")])},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("p",[e._v("系统化的配置请参考demo的"),_("a",{attrs:{target:"_blank",href:"https://github.com/heyui/heyui-demo/blob/master/src/js/config/tree-config.js"}},[e._v("tree-config.js")]),e._v("。")])},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("p",[e._v("设定"),_("code",[e._v("autocomplete")]),e._v("的默认参数，以及定义系统中存在的不同autocomplete的调用。")])},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("p",[e._v("系统化的配置请参考demo的"),_("a",{attrs:{target:"_blank",href:"https://github.com/heyui/heyui-demo/blob/master/src/js/config/autocomplete-config.js"}},[e._v("autocomplete-config.js")]),e._v("。")])},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("p",[e._v("这些组件，我们都提供了一些参数可以进行配置，具体请查看"),_("code",[_("a",{attrs:{href:"https://github.com/heyui/heyui/blob/master/src/utils/config.js",target:"_blank"}},[e._v("config.js")])]),e._v("文件")])}]},e.exports.render._withStripped=!0}});