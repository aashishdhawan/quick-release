"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/reset-password/[token]/page",{

/***/ "(app-pages-browser)/./src/app/reset-password/[token]/page.tsx":
/*!*************************************************!*\
  !*** ./src/app/reset-password/[token]/page.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_AuthForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AuthForm */ \"(app-pages-browser)/./src/components/AuthForm.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/form */ \"(app-pages-browser)/./src/components/ui/form.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/use-toast */ \"(app-pages-browser)/./src/components/ui/use-toast.ts\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _barrel_optimize_names_Loader_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=Loader!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/loader.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! zod */ \"(app-pages-browser)/./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst ResetPassword = (param)=>{\n    let { params } = param;\n    _s();\n    const [verified, setVerified] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);\n    const [loader, setLoader] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    const { toast } = (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_5__.useToast)();\n    const formSchema = zod__WEBPACK_IMPORTED_MODULE_9__.z.object({\n        // email: z\n        //   .string()\n        //   .min(1, { message: \"Required\" })\n        //   .email({ message: \"Invalid email address\" }),\n        password: zod__WEBPACK_IMPORTED_MODULE_9__.z.string().min(1, {\n            message: \"Required\"\n        }).min(6, {\n            message: \"Password should be minimum 6 characters\"\n        })\n    });\n    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_10__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_6__.zodResolver)(formSchema),\n        defaultValues: {\n            password: \"\"\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        const verifyToken = async ()=>{\n            try {\n                const res = await axios__WEBPACK_IMPORTED_MODULE_11__[\"default\"].post(\"/api/verify-token\", {\n                    token: params.token\n                });\n                setVerified(true);\n                const userData = await res.data;\n                setUser(userData);\n            } catch (error) {\n                console.log(error);\n                setVerified(true);\n            }\n        };\n        verifyToken();\n    }, [\n        params.token\n    ]);\n    const resetPassword = async (values, e)=>{\n        e.preventDefault();\n        setLoader(true);\n        const data = {\n            email: user === null || user === void 0 ? void 0 : user.email\n        };\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_11__[\"default\"].post(\"/api/reset-password\", values, data);\n            toast({\n                title: \"Reset Successfully\"\n            });\n            setLoader(false);\n            router.push(\"/\");\n        } catch (error) {\n            setLoader(false);\n            console.log(error);\n            toast({\n                title: \"Please try again\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        title: \"Enter Your New Password\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.Form, {\n            ...form,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: form.handleSubmit(resetPassword),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid gap-2 pb-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormField, {\n                            control: form.control,\n                            name: \"password\",\n                            render: (param)=>{\n                                let { field } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormItem, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                            children: \"Enter New Password\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                                            lineNumber: 108,\n                                            columnNumber: 19\n                                        }, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                                placeholder: \"Password\",\n                                                ...field,\n                                                type: \"password\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                                                lineNumber: 110,\n                                                columnNumber: 21\n                                            }, void 0)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                                            lineNumber: 109,\n                                            columnNumber: 19\n                                        }, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormMessage, {\n                                            className: \"text-red-600\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                                            lineNumber: 112,\n                                            columnNumber: 19\n                                        }, void 0)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 17\n                                }, void 0);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        type: \"submit\",\n                        children: loader ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"px-2\",\n                                    children: \" Reset Password \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Loader_lucide_react__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true) : \" Reset Password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                lineNumber: 101,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n            lineNumber: 100,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ResetPassword, \"pNc95VXDCz87rma5YvaXVv8hLug=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_8__.useRouter,\n        _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_5__.useToast,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_10__.useForm\n    ];\n});\n_c = ResetPassword;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResetPassword);\nvar _c;\n$RefreshReg$(_c, \"ResetPassword\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVzZXQtcGFzc3dvcmQvW3Rva2VuXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNkM7QUFDRztBQVFsQjtBQUNnQjtBQUNPO0FBQ0M7QUFDNUI7QUFDWTtBQUNNO0FBQ0Y7QUFDbEI7QUFDb0I7QUFjNUMsTUFBTWtCLGdCQUFnQjtRQUFDLEVBQUVDLE1BQU0sRUFBTzs7SUFDcEMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1EsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBYztJQUM5QyxNQUFNLENBQUNVLFFBQVFDLFVBQVUsR0FBR1gsK0NBQVFBLENBQUM7SUFDckMsTUFBTVksU0FBU1QsMERBQVNBO0lBQ3hCLE1BQU0sRUFBRVUsS0FBSyxFQUFFLEdBQUdsQixrRUFBUUE7SUFDMUIsTUFBTW1CLGFBQWFaLGtDQUFDQSxDQUFDYSxNQUFNLENBQUM7UUFDMUIsV0FBVztRQUNYLGNBQWM7UUFDZCxxQ0FBcUM7UUFDckMsa0RBQWtEO1FBQ2xEQyxVQUFVZCxrQ0FBQ0EsQ0FDUmUsTUFBTSxHQUNOQyxHQUFHLENBQUMsR0FBRztZQUFFQyxTQUFTO1FBQVcsR0FDN0JELEdBQUcsQ0FBQyxHQUFHO1lBQUVDLFNBQVM7UUFBMEM7SUFDakU7SUFFQSxNQUFNQyxPQUFPbkIseURBQU9BLENBQTZCO1FBQy9Db0IsVUFBVXpCLG9FQUFXQSxDQUFDa0I7UUFDdEJRLGVBQWU7WUFDYk4sVUFBVTtRQUNaO0lBQ0Y7SUFFQWpCLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTXdCLGNBQWM7WUFDbEIsSUFBSTtnQkFDRixNQUFNQyxNQUFNLE1BQU0zQiw4Q0FBS0EsQ0FBQzRCLElBQUksQ0FBQyxxQkFBcUI7b0JBQ2hEQyxPQUFPckIsT0FBT3FCLEtBQUs7Z0JBQ3JCO2dCQUNBbkIsWUFBWTtnQkFDWixNQUFNb0IsV0FBVyxNQUFNSCxJQUFJSSxJQUFJO2dCQUUvQm5CLFFBQVFrQjtZQUNWLEVBQUUsT0FBT0UsT0FBTztnQkFDZEMsUUFBUUMsR0FBRyxDQUFDRjtnQkFDWnRCLFlBQVk7WUFDZDtRQUNGO1FBQ0FnQjtJQUNGLEdBQUc7UUFBQ2xCLE9BQU9xQixLQUFLO0tBQUM7SUFFakIsTUFBTU0sZ0JBQWdCLE9BQU9DLFFBQW9DQztRQUMvREEsRUFBRUMsY0FBYztRQUNoQnhCLFVBQVU7UUFDVixNQUFNaUIsT0FBTztZQUNYUSxLQUFLLEVBQUU1QixpQkFBQUEsMkJBQUFBLEtBQU00QixLQUFLO1FBQ3BCO1FBRUEsSUFBSTtZQUNGLE1BQU12Qyw4Q0FBS0EsQ0FBQzRCLElBQUksQ0FBQyx1QkFBdUJRLFFBQVFMO1lBQ2hEZixNQUFNO2dCQUNKd0IsT0FBTztZQUNUO1lBQ0ExQixVQUFVO1lBQ1ZDLE9BQU8wQixJQUFJLENBQUM7UUFDZCxFQUFFLE9BQU9ULE9BQVk7WUFDbkJsQixVQUFVO1lBQ1ZtQixRQUFRQyxHQUFHLENBQUNGO1lBQ1poQixNQUFNO2dCQUNKd0IsT0FBTztZQUNUO1FBQ0Y7SUFDRjtJQUNBLHFCQUNFLDhEQUFDbkQsNERBQVFBO1FBQUNtRCxPQUFNO2tCQUNkLDRFQUFDNUMscURBQUlBO1lBQUUsR0FBRzJCLElBQUk7c0JBQ1osNEVBQUNBO2dCQUFLbUIsVUFBVW5CLEtBQUtvQixZQUFZLENBQUNSOztrQ0FDaEMsOERBQUNTO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDdEQsMERBQVNBOzRCQUNSdUQsU0FBU3ZCLEtBQUt1QixPQUFPOzRCQUNyQkMsTUFBSzs0QkFDTEMsUUFBUTtvQ0FBQyxFQUFFQyxLQUFLLEVBQUU7cURBQ2hCLDhEQUFDekQseURBQVFBOztzREFDUCw4REFBQ0MsMERBQVNBO3NEQUFDOzs7Ozs7c0RBQ1gsOERBQUNDLDREQUFXQTtzREFDViw0RUFBQ0csdURBQUtBO2dEQUFDcUQsYUFBWTtnREFBWSxHQUFHRCxLQUFLO2dEQUFFRSxNQUFLOzs7Ozs7Ozs7OztzREFFaEQsOERBQUN4RCw0REFBV0E7NENBQUNrRCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLL0IsOERBQUN2RCx5REFBTUE7d0JBQUM2RCxNQUFLO2tDQUNWdEMsdUJBQ0M7OzhDQUNFLDhEQUFDdUM7b0NBQUtQLFdBQVU7OENBQU87Ozs7Ozs4Q0FDdkIsOERBQUM1QyxtRkFBTUE7Ozs7OzsyQ0FHVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9kO0dBakdNTTs7UUFJV0Qsc0RBQVNBO1FBQ05SLDhEQUFRQTtRQVliTSxxREFBT0E7OztLQWpCaEJHO0FBbUdOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcmVzZXQtcGFzc3dvcmQvW3Rva2VuXS9wYWdlLnRzeD85ZDhlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEF1dGhGb3JtIGZyb20gXCJAL2NvbXBvbmVudHMvQXV0aEZvcm1cIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQge1xuICBGb3JtRmllbGQsXG4gIEZvcm1JdGVtLFxuICBGb3JtTGFiZWwsXG4gIEZvcm1Db250cm9sLFxuICBGb3JtTWVzc2FnZSxcbiAgRm9ybSxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9mb3JtXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcbmltcG9ydCB7IHVzZVRvYXN0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS91c2UtdG9hc3RcIjtcbmltcG9ydCB7IHpvZFJlc29sdmVyIH0gZnJvbSBcIkBob29rZm9ybS9yZXNvbHZlcnMvem9kXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuaW50ZXJmYWNlIFVzZXIge1xuICBjcmVhdGVkQXQ6IFN0cmluZztcbiAgZW1haWw6IFN0cmluZztcbiAgZmlyc3ROYW1lOiBTdHJpbmc7XG4gIGlkOiBTdHJpbmc7XG4gIGxhc3ROYW1lOiBTdHJpbmc7XG4gIG9yZ05hbWU6IFN0cmluZztcbiAgcGFzc3dvcmQ6IFN0cmluZztcbiAgcmVzZXRUb2tlbjogU3RyaW5nO1xuICByZXNldFRva2VuRXhwaXJ5OiBTdHJpbmc7XG59XG5cbmNvbnN0IFJlc2V0UGFzc3dvcmQgPSAoeyBwYXJhbXMgfTogYW55KSA9PiB7XG4gIGNvbnN0IFt2ZXJpZmllZCwgc2V0VmVyaWZpZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtsb2FkZXIsIHNldExvYWRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHRvYXN0IH0gPSB1c2VUb2FzdCgpO1xuICBjb25zdCBmb3JtU2NoZW1hID0gei5vYmplY3Qoe1xuICAgIC8vIGVtYWlsOiB6XG4gICAgLy8gICAuc3RyaW5nKClcbiAgICAvLyAgIC5taW4oMSwgeyBtZXNzYWdlOiBcIlJlcXVpcmVkXCIgfSlcbiAgICAvLyAgIC5lbWFpbCh7IG1lc3NhZ2U6IFwiSW52YWxpZCBlbWFpbCBhZGRyZXNzXCIgfSksXG4gICAgcGFzc3dvcmQ6IHpcbiAgICAgIC5zdHJpbmcoKVxuICAgICAgLm1pbigxLCB7IG1lc3NhZ2U6IFwiUmVxdWlyZWRcIiB9KVxuICAgICAgLm1pbig2LCB7IG1lc3NhZ2U6IFwiUGFzc3dvcmQgc2hvdWxkIGJlIG1pbmltdW0gNiBjaGFyYWN0ZXJzXCIgfSksXG4gIH0pO1xuXG4gIGNvbnN0IGZvcm0gPSB1c2VGb3JtPHouaW5mZXI8dHlwZW9mIGZvcm1TY2hlbWE+Pih7XG4gICAgcmVzb2x2ZXI6IHpvZFJlc29sdmVyKGZvcm1TY2hlbWEpLFxuICAgIGRlZmF1bHRWYWx1ZXM6IHtcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgIH0sXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdmVyaWZ5VG9rZW4gPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS92ZXJpZnktdG9rZW5cIiwge1xuICAgICAgICAgIHRva2VuOiBwYXJhbXMudG9rZW4sXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRWZXJpZmllZCh0cnVlKTtcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCByZXMuZGF0YTtcblxuICAgICAgICBzZXRVc2VyKHVzZXJEYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgc2V0VmVyaWZpZWQodHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB2ZXJpZnlUb2tlbigpO1xuICB9LCBbcGFyYW1zLnRva2VuXSk7XG5cbiAgY29uc3QgcmVzZXRQYXNzd29yZCA9IGFzeW5jICh2YWx1ZXM6IHouaW5mZXI8dHlwZW9mIGZvcm1TY2hlbWE+LCBlOiBhbnkpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0TG9hZGVyKHRydWUpO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBlbWFpbDogdXNlcj8uZW1haWwsXG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9yZXNldC1wYXNzd29yZFwiLCB2YWx1ZXMsIGRhdGEpO1xuICAgICAgdG9hc3Qoe1xuICAgICAgICB0aXRsZTogXCJSZXNldCBTdWNjZXNzZnVsbHlcIixcbiAgICAgIH0pO1xuICAgICAgc2V0TG9hZGVyKGZhbHNlKTtcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBzZXRMb2FkZXIoZmFsc2UpO1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgdG9hc3Qoe1xuICAgICAgICB0aXRsZTogXCJQbGVhc2UgdHJ5IGFnYWluXCIsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPEF1dGhGb3JtIHRpdGxlPVwiRW50ZXIgWW91ciBOZXcgUGFzc3dvcmRcIj5cbiAgICAgIDxGb3JtIHsuLi5mb3JtfT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm0uaGFuZGxlU3VibWl0KHJlc2V0UGFzc3dvcmQpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTIgcGItNFwiPlxuICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICBjb250cm9sPXtmb3JtLmNvbnRyb2x9XG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxGb3JtSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+RW50ZXIgTmV3IFBhc3N3b3JkPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgey4uLmZpZWxkfSB0eXBlPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtTWVzc2FnZSBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDBcIiAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAge2xvYWRlciA/IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0yXCI+IFJlc2V0IFBhc3N3b3JkIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgXCIgUmVzZXQgUGFzc3dvcmRcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvQXV0aEZvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXNldFBhc3N3b3JkO1xuIl0sIm5hbWVzIjpbIkF1dGhGb3JtIiwiQnV0dG9uIiwiRm9ybUZpZWxkIiwiRm9ybUl0ZW0iLCJGb3JtTGFiZWwiLCJGb3JtQ29udHJvbCIsIkZvcm1NZXNzYWdlIiwiRm9ybSIsIklucHV0IiwidXNlVG9hc3QiLCJ6b2RSZXNvbHZlciIsImF4aW9zIiwiTG9hZGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VGb3JtIiwieiIsInVzZVJvdXRlciIsIlJlc2V0UGFzc3dvcmQiLCJwYXJhbXMiLCJ2ZXJpZmllZCIsInNldFZlcmlmaWVkIiwidXNlciIsInNldFVzZXIiLCJsb2FkZXIiLCJzZXRMb2FkZXIiLCJyb3V0ZXIiLCJ0b2FzdCIsImZvcm1TY2hlbWEiLCJvYmplY3QiLCJwYXNzd29yZCIsInN0cmluZyIsIm1pbiIsIm1lc3NhZ2UiLCJmb3JtIiwicmVzb2x2ZXIiLCJkZWZhdWx0VmFsdWVzIiwidmVyaWZ5VG9rZW4iLCJyZXMiLCJwb3N0IiwidG9rZW4iLCJ1c2VyRGF0YSIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZXNldFBhc3N3b3JkIiwidmFsdWVzIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZW1haWwiLCJ0aXRsZSIsInB1c2giLCJvblN1Ym1pdCIsImhhbmRsZVN1Ym1pdCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRyb2wiLCJuYW1lIiwicmVuZGVyIiwiZmllbGQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/reset-password/[token]/page.tsx\n"));

/***/ })

});