!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueSelect=e():t.VueSelect=e()}("undefined"!=typeof self?self:this,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=12)}([function(t,e){function n(e){return t.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,n(e)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var o=n(5),i=n(6),r=n(7),s=n(8);t.exports=function(t){return o(t)||i(t)||r(t)||s()},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var o=n(9);t.exports=function(t,e,n){return(e=o(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){},function(t,e,n){var o=n(3);t.exports=function(t){if(Array.isArray(t))return o(t)},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var o=n(3);t.exports=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var o=n(0).default,i=n(10);t.exports=function(t){var e=i(t,"string");return"symbol"==o(e)?e:e+""},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var o=n(0).default;t.exports=function(t,e){if("object"!=o(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){"use strict";n(4)},function(t,e,n){"use strict";n.r(e),n.d(e,"VueSelect",(function(){return O})),n.d(e,"mixins",(function(){return w}));var o=n(1),i=n.n(o),r=n(0),s=n.n(r),a=n(2),l=n.n(a),u={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer:function(){this.autoscroll&&this.maybeAdjustScroll()},open:function(t){var e=this;this.autoscroll&&t&&this.$nextTick((function(){return e.maybeAdjustScroll()}))}},methods:{maybeAdjustScroll:function(){var t,e=(null===(t=this.$refs.dropdownMenu)||void 0===t?void 0:t.children[this.typeAheadPointer])||!1;if(e){var n=this.getDropdownViewport(),o=e.getBoundingClientRect(),i=o.top,r=o.bottom,s=o.height;if(i<n.top)return this.$refs.dropdownMenu.scrollTop=e.offsetTop;if(r>n.bottom)return this.$refs.dropdownMenu.scrollTop=e.offsetTop-(n.height-s)}},getDropdownViewport:function(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},c={data:function(){return{typeAheadPointer:-1}},watch:{filteredOptions:function(){for(var t=0;t<this.filteredOptions.length;t++)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}}},methods:{typeAheadUp:function(){for(var t=this.typeAheadPointer-1;t>=0;t--)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}},typeAheadDown:function(){for(var t=this.typeAheadPointer+1;t<this.filteredOptions.length;t++)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}},typeAheadSelect:function(){var t=this.filteredOptions[this.typeAheadPointer];t&&this.selectable(t)&&this.select(t,!0)}}},p={props:{loading:{type:Boolean,default:!1}},data:function(){return{mutableLoading:!1}},watch:{search:function(){this.$emit("search",this.search,this.toggleLoading)},loading:function(t){this.mutableLoading=t}},methods:{toggleLoading:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.mutableLoading=null==t?!this.mutableLoading:t}}};function d(t,e,n,o,i,r,s,a){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),o&&(u.functional=!0),r&&(u._scopeId="data-v-"+r),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=l):i&&(l=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:u}}var h={Deselect:d({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"}},[t("path",{attrs:{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"}})])}),[],!1,null,null,null).exports,OpenIndicator:d({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"}},[t("path",{attrs:{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"}})])}),[],!1,null,null,null).exports},f={inserted:function(t,e,n){var o=n.context;if(o.appendToBody){var i=o.$refs.toggle.getBoundingClientRect(),r=i.height,s=i.top,a=i.left,l=i.width,u=window.scrollX||window.pageXOffset,c=window.scrollY||window.pageYOffset;t.unbindPosition=o.calculatePosition(t,o,{width:l+"px",left:u+a+"px",top:c+s+r+"px"}),document.body.appendChild(t)}},unbind:function(t,e,n){n.context.appendToBody&&(t.unbindPosition&&"function"==typeof t.unbindPosition&&t.unbindPosition(),t.parentNode&&t.parentNode.removeChild(t))}};var v=function(t){var e={};return Object.keys(t).sort().forEach((function(n){e[n]=t[n]})),JSON.stringify(e)},y=0;var b=function(){return++y};function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){l()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var _={name:"VueSelect",components:m({},h),mixins:[u,c,p],directives:{appendToBody:f},props:{value:[Array,String,Number,Object],components:{type:Object,default:function(){return{}}},options:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},deselectFromDropdown:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:function(t){return t}},selectable:{type:Function,default:function(t){return!0}},getOptionLabel:{type:Function,default:function(t){return"object"===s()(t)?t.hasOwnProperty(this.label)?t[this.label]:console.warn('[vue-select warn]: Label key "option.'.concat(this.label,'" does not')+" exist in options object ".concat(JSON.stringify(t),".\n")+"https://vue-select.org/api/props.html#getoptionlabel"):t}},getOptionKey:{type:Function,default:function(t){if("object"!==s()(t))return t;try{return t.hasOwnProperty("id")?t.id:v(t)}catch(e){return console.warn("[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.\nhttps://vue-select.org/api/props.html#getoptionkey",t,e)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},trimSearch:{type:Boolean,default:!0},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default:function(t,e,n){return(e||"").toLowerCase().indexOf(n.toLowerCase())>-1}},filter:{type:Function,default:function(t,e){var n=this;return t.filter((function(t){var o=n.getOptionLabel(t);return"number"==typeof o&&(o=o.toString()),n.filterBy(t,o,e)}))}},createOption:{type:Function,default:function(t){return"object"===s()(this.optionList[0])?l()({},this.label,t):t}},resetOnOptionsChange:{default:!1,validator:function(t){return["function","boolean"].includes(s()(t))}},clearSearchOnBlur:{type:Function,default:function(t){var e=t.clearSearchOnSelect,n=t.multiple;return e&&!n}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:function(){return["Enter"]}},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:function(t,e){return t}},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default:function(t,e,n){var o=n.width,i=n.top,r=n.left;t.style.top=i,t.style.left=r,t.style.width=o}},dropdownShouldOpen:{type:Function,default:function(t){var e=t.noDrop,n=t.open,o=t.mutableLoading;return!e&&(n&&!o)}},uid:{type:[String,Number],default:function(){return b()}},tagOnExit:{type:Boolean,default:!1}},data:function(){return{ulMouseDown:!1,search:"",open:!1,isComposing:!1,pushedTags:[],_value:[]}},computed:{isTrackingValues:function(){return void 0===this.value||this.$options.propsData.hasOwnProperty("reduce")},selectedValue:function(){var t=this.value;return this.isTrackingValues&&(t=this.$data._value),t?[].concat(t):[]},optionList:function(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl:function(){return this.$scopedSlots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope:function(){var t=this,e={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:m({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":"vs".concat(this.uid,"__combobox"),"aria-controls":"vs".concat(this.uid,"__listbox"),ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":"vs".concat(this.uid,"__option-").concat(this.typeAheadPointer)}:{}),events:{compositionstart:function(){return t.isComposing=!0},compositionend:function(){return t.isComposing=!1},keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:function(e){return t.search=e.target.value}}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.loading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:e,listFooter:e,header:m(m({},e),{},{deselect:this.deselect}),footer:m(m({},e),{},{deselect:this.deselect})}},childComponents:function(){return m(m({},h),this.components)},stateClasses:function(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching:function(){return!!this.search},dropdownOpen:function(){return this.dropdownShouldOpen(this)},searchPlaceholder:function(){if(this.isValueEmpty&&this.placeholder)return this.placeholder},filteredOptions:function(){var t=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return t;var e=this.trimSearch?this.search.trim():this.search,n=e.length?this.filter(t,e,this):t;if(this.taggable&&e.length){var o=this.createOption(e);this.optionExists(o)||n.unshift(o)}return n},isValueEmpty:function(){return 0===this.selectedValue.length},showClearButton:function(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}},watch:{options:function(t,e){var n=this;!this.taggable&&("function"==typeof n.resetOnOptionsChange?n.resetOnOptionsChange(t,e,n.selectedValue):n.resetOnOptionsChange)&&this.clearSelection(),this.value&&this.isTrackingValues&&this.setInternalValueFromOptions(this.value)},value:{immediate:!0,handler:function(t){this.isTrackingValues&&this.setInternalValueFromOptions(t)}},multiple:function(){this.clearSelection()},open:function(t){this.$emit(t?"open":"close")}},created:function(){this.mutableLoading=this.loading,this.$on("option:created",this.pushTag)},methods:{setInternalValueFromOptions:function(t){var e=this;Array.isArray(t)?this.$data._value=t.map((function(t){return e.findOptionFromReducedValue(t)})):this.$data._value=this.findOptionFromReducedValue(t)},select:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(this.ulMouseDown||e)&&(this.$emit("option:selecting",t),this.isOptionSelected(t)?this.deselectFromDropdown&&(this.clearable||this.multiple&&this.selectedValue.length>1)&&this.deselect(t):(this.taggable&&!this.optionExists(t)&&this.$emit("option:created",t),this.multiple&&(t=this.selectedValue.concat(t)),this.updateValue(t),this.$emit("option:selected",t)),this.onAfterSelect(t))},deselect:function(t){var e=this;this.$emit("option:deselecting",t),this.updateValue(this.selectedValue.filter((function(n){return!e.optionComparator(n,t)}))),this.$emit("option:deselected",t)},handleDeselect:function(){this.disabled||this.clearSelection()},clearSelection:function(){this.updateValue(this.multiple?[]:null)},onAfterSelect:function(t){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue:function(t){var e=this;void 0===this.value&&(this.$data._value=t),null!==t&&(t=Array.isArray(t)?t.map((function(t){return e.reduce(t)})):this.reduce(t)),this.$emit("input",t)},toggleDropdown:function(t){this.ulMouseDown=!1;var e=t.target!==this.searchEl;e&&t.preventDefault();var n=[].concat(i()(this.$refs.deselectButtons||[]),i()([this.$refs.clearButton]||!1));void 0===this.searchEl||n.filter(Boolean).some((function(e){return e.contains(t.target)||e===t.target}))?t.preventDefault():this.open&&e?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected:function(t){var e=this;return this.selectedValue.some((function(n){return e.optionComparator(n,t)}))},isOptionDeselectable:function(t){return this.isOptionSelected(t)&&this.deselectFromDropdown},optionComparator:function(t,e){return this.getOptionKey(t)===this.getOptionKey(e)},findOptionFromReducedValue:function(t){var e=this,n=[].concat(i()(this.options),i()(this.pushedTags)).filter((function(n){return JSON.stringify(e.reduce(n))===JSON.stringify(t)}));return 1===n.length?n[0]:n.find((function(t){return e.optionComparator(t,e.$data._value)}))||t},closeSearchOptions:function(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue:function(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){var t=null;this.multiple&&(t=i()(this.selectedValue.slice(0,this.selectedValue.length-1))),this.updateValue(t)}},optionExists:function(t){var e=this;return this.optionList.some((function(n){return e.optionComparator(n,t)}))},normalizeOptionForSlot:function(t){return"object"===s()(t)?t:l()({},this.label,t)},pushTag:function(t){this.pushedTags.push(t)},onEscape:function(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur:function(){if(!this.mousedown||this.searching){var t=this.trimSearch?this.search.trim():this.search;if(this.tagOnExit&&this.taggable&&t.length){var e=this.createOption(t);this.selectable(e)&&(this.optionExists(e)||this.pushedTags.unshift(e),this.select(e,!0))}var n=this.clearSearchOnSelect,o=this.multiple;return this.clearSearchOnBlur({clearSearchOnSelect:n,multiple:o})&&(this.search=""),void this.closeSearchOptions()}this.mousedown=!1,0!==this.search.length||0!==this.options.length||this.closeSearchOptions()},onSearchFocus:function(){this.open=!0,this.$emit("search:focus")},onMousedown:function(){this.ulMouseDown=!0,this.mousedown=!0},onMouseUp:function(){this.mousedown=!1},onMouseenter:function(t){t.buttons&&(this.mousedown=!0)},onMouseleave:function(t){t.buttons&&(this.mousedown=!1)},onSearchKeyDown:function(t){var e=this,n=function(t){return t.preventDefault(),!e.isComposing&&e.typeAheadSelect()},o={Backspace:function(t){return e.maybeDeleteValue()},Tab:function(t){return e.onTab()},Escape:function(t){return e.onEscape()},ArrowUp:function(t){return t.preventDefault(),e.typeAheadUp()},ArrowDown:function(t){return t.preventDefault(),e.typeAheadDown()}};this.selectOnKeyCodes.forEach((function(t){return o[t]=n}));var i=this.mapKeydown(o,this);if("function"==typeof i[t.key])return i[t.key](t)}}},O=(n(11),d(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"v-select",class:t.stateClasses,attrs:{dir:t.dir}},[t._t("header",null,null,t.scope.header),t._v(" "),e("div",{ref:"toggle",staticClass:"vs__dropdown-toggle",attrs:{id:`vs${t.uid}__combobox`,role:"combobox","aria-expanded":t.dropdownOpen.toString(),"aria-owns":`vs${t.uid}__listbox`,"aria-label":"Search for option"},on:{mousedown:function(e){return t.toggleDropdown(e)}}},[e("div",{ref:"selectedOptions",staticClass:"vs__selected-options"},[t._l(t.selectedValue,(function(n){return t._t("selected-option-container",(function(){return[e("span",{key:t.getOptionKey(n),staticClass:"vs__selected"},[t._t("selected-option",(function(){return[t._v("\n\t\t\t\t\t\t\t"+t._s(t.getOptionLabel(n))+"\n\t\t\t\t\t\t")]}),null,t.normalizeOptionForSlot(n)),t._v(" "),t.multiple?e("span",{ref:"deselectButtons",refInFor:!0,staticClass:"vs__deselect",attrs:{"aria-label":"Deselect "+t.getOptionLabel(n)},on:{click:function(e){e.preventDefault(),!t.disabled&&t.deselect(n)}}},[t._t("deselect",(function(){return[e(t.childComponents.Deselect,{tag:"component"})]}))],2):t._e()],2),t._v(" "),t._t("selected-option-ending",null,{option:t.normalizeOptionForSlot(n),deselect:t.deselect,multiple:t.multiple,disabled:t.disabled})]}),{option:t.normalizeOptionForSlot(n),deselect:t.deselect,multiple:t.multiple,disabled:t.disabled})})),t._v(" "),t._t("search",(function(){return[e("input",t._g(t._b({staticClass:"vs__search"},"input",t.scope.search.attributes,!1),t.scope.search.events))]}),null,t.scope.search)],2),t._v(" "),e("div",{ref:"actions",staticClass:"vs__actions"},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.showClearButton,expression:"showClearButton"}],ref:"clearButton",staticClass:"vs__clear",attrs:{"aria-label":"Clear Selected"},on:{click:function(e){return e.preventDefault(),t.handleDeselect.apply(null,arguments)}}},[t._t("deselect",(function(){return[e(t.childComponents.Deselect,{tag:"component"})]}))],2),t._v(" "),t._t("open-indicator",(function(){return[t.noDrop?t._e():e(t.childComponents.OpenIndicator,t._b({tag:"component"},"component",t.scope.openIndicator.attributes,!1))]}),null,t.scope.openIndicator),t._v(" "),t._t("spinner",(function(){return[e("div",{directives:[{name:"show",rawName:"v-show",value:t.mutableLoading,expression:"mutableLoading"}],staticClass:"vs__spinner"},[t._v("\n\t\t\t\t\t\tLoading...\n\t\t\t\t\t")])]}),null,t.scope.spinner)],2)]),t._v(" "),e("transition",{attrs:{name:t.transition}},[t.dropdownOpen?e("ul",{directives:[{name:"append-to-body",rawName:"v-append-to-body"}],key:`vs${t.uid}__listbox`,ref:"dropdownMenu",staticClass:"vs__dropdown-menu",attrs:{id:`vs${t.uid}__listbox`,role:"listbox","aria-details":"Select dropdown",tabindex:"-1"},on:{mouseleave:t.onMouseleave,mouseenter:t.onMouseenter,mousedown:function(e){return e.preventDefault(),t.onMousedown.apply(null,arguments)},mouseup:function(e){return e.stopPropagation(),t.onMouseUp.apply(null,arguments)}}},[t._t("list-header",null,null,t.scope.listHeader),t._v(" "),t._l(t.filteredOptions,(function(n,o){return e("li",{key:t.getOptionKey(n),staticClass:"vs__dropdown-option",class:{"vs__dropdown-option--deselect":t.isOptionDeselectable(n)&&o===t.typeAheadPointer,"vs__dropdown-option--selected":t.isOptionSelected(n),"vs__dropdown-option--highlight":o===t.typeAheadPointer,"vs__dropdown-option--disabled":!t.selectable(n)},attrs:{id:`vs${t.uid}__option-${o}`,role:"option","aria-selected":o===t.typeAheadPointer||null},on:{mouseover:function(e){t.selectable(n)&&(t.typeAheadPointer=o)},mouseup:function(e){e.preventDefault(),t.selectable(n)&&t.select(n)}}},[t._t("option",(function(){return[t._v("\n\t\t\t\t\t\t"+t._s(t.getOptionLabel(n))+"\n\t\t\t\t\t")]}),null,t.normalizeOptionForSlot(n))],2)})),t._v(" "),0===t.filteredOptions.length?e("li",{staticClass:"vs__no-options"},[t._t("no-options",(function(){return[t._v("\n\t\t\t\t\t\tSorry, no matching options.\n\t\t\t\t\t")]}),null,t.scope.noOptions)],2):t._e(),t._v(" "),t._t("list-footer",null,null,t.scope.listFooter)],2):e("ul",{staticStyle:{display:"none",visibility:"hidden"},attrs:{id:`vs${t.uid}__listbox`,role:"listbox"}})]),t._v(" "),t._t("footer",null,null,t.scope.footer)],2)}),[],!1,null,null,null).exports),w={ajax:p,pointer:c,pointerScroll:u};e.default=O}])}));
//# sourceMappingURL=vue-select.js.map