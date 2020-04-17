(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{OdwA:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return i})),t.d(e,"default",(function(){return p}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP"),t("q1tI");var o=t("7ljp"),a=t("eXqk");var i={},r={_frontmatter:i},s=a.a;function p(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,o,a={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,["components"]);return Object(o.mdx)(s,Object.assign({},r,t,{components:e,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"animation-and-transitions"},"Animation and Transitions"),Object(o.mdx)("p",null,"Animation of components is handled by ",Object(o.mdx)("inlineCode",{parentName:"p"},"transition")," props. If\na component accepts a ",Object(o.mdx)("inlineCode",{parentName:"p"},"transition")," prop you can provide\na ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/reactjs/react-transition-group"}),"react-transition-group@2.0.0"),"\ncompatible",Object(o.mdx)("inlineCode",{parentName:"p"},"Transition")," component and it will work.Feel free to use ",Object(o.mdx)("inlineCode",{parentName:"p"},"CSSTransition")," specifically, or roll your\nown like the below example."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js",metastring:"live",live:!0}),'import { Modal, Overlay } from \'react-overlays\';\nimport Transition from \'react-transition-group/Transition\';\n\nconst FADE_DURATION = 200;\n\ninjectCss(`\n  .fade {\n    opacity: 0;\n    transition: opacity ${FADE_DURATION}ms linear;\n  }\n\n  .show {\n    opacity: 1;\n  }\n\n\n  .backdrop.fade.show {\n    opacity: 0.5;\n  }\n\n  .dialog {\n    position: absolute;\n    width: 400;\n    top: 50%; left: 50%;\n    transform: translate(-50%, -50%);\n    border: 1px solid #e5e5e5;\n    background-color: white;\n    box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n    padding: 20px;\n  }\n`);\n\nconst fadeStyles = {\n  entering: \'show\',\n  entered: \'show\',\n};\n\nconst Fade = ({ children, ...props }) => (\n  <Transition {...props} timeout={FADE_DURATION}>\n    {(status, innerProps) =>\n      React.cloneElement(children, {\n        ...innerProps,\n        className: `fade ${fadeStyles[status]} ${children.props.className}`,\n      })\n    }\n  </Transition>\n);\n\nfunction TransitionExample() {\n  const [showModal, setShowModal] = useState(false);\n  const [showTooltip, setShowTooltip] = useState(false);\n  const [tooltipRef, attachRef] = useState(null);\n\n  return (\n    <div className="flex flex-col items-center">\n      <button\n        type="button"\n        className="btn btn-primary mr-3"\n        onClick={() => setShowModal((prev) => !prev)}\n      >\n        Show Animated Modal\n      </button>\n\n      <button\n        type="button"\n        className="btn btn-primary"\n        onClick={() => setShowTooltip((prev) => !prev)}\n        ref={attachRef}\n      >\n        Show Tooltip\n      </button>\n\n      <Overlay\n        placement="top"\n        transition={Fade}\n        show={showTooltip}\n        target={tooltipRef}\n        popperConfig={{\n          modifiers: [\n            { name: \'offset\', enabled: true, options: { offset: [0, 10] } },\n          ],\n        }}\n      >\n        {({ props: { ref, style } }) => (\n          <div\n            ref={ref}\n            className="bg-brand-200 shadow rounded z-10 px-4"\n            style={style}\n          >\n            Hello there\n          </div>\n        )}\n      </Overlay>\n\n      <Modal\n        show={showModal}\n        onHide={() => setShowModal(false)}\n        transition={Fade}\n        backdropTransition={Fade}\n        renderBackdrop={(props) => (\n          <div {...props} className="backdrop absolute inset-0 bg-black z-40" />\n        )}\n        renderDialog={(props) => (\n          <div\n            {...props}\n            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"\n          >\n            <div className="dialog bg-white shadow rounded-lg pointer-events-auto">\n              <h4 id="modal-label">I&apos;m fading in!</h4>\n              <p>\n                Anim pariatur cliche reprehenderit, enim eiusmod high life\n                accusamus terry richardson ad squid. Nihil anim keffiyeh\n                helvetica, craft beer labore wes anderson cred nesciunt sapiente\n                ea proident.\n              </p>\n              <button\n                type="button"\n                className="btn"\n                onClick={() => setShowModal(false)}\n              >\n                Close\n              </button>\n            </div>\n          </div>\n        )}\n      />\n    </div>\n  );\n}\n\n<TransitionExample />;\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-transitions-mdx-b41823f8ace7e31cd46d.js.map