/*
 * @Description: three.js
 * @Author: shenxh
 * @Date: 2020-09-04 17:56:08
 * @LastEditors: shenxh
 * @LastEditTime: 2022-08-03 14:04:54
 */
export default [
  {
    path: '/three',
    name: 'three',
    meta: {
      label: 'Three',
    },
    redirect: '/three/lesson1',
    component: loadView('layout/Layout'),
    children: [
      {
        path: 'water-model',
        name: 'water-model',
        meta: {
          label: '水务模型',
        },
        component: loadView('three/WaterModel'),
      },
      {
        path: 'water-model-new',
        name: 'water-model-new',
        meta: {
          label: '水务模型-新',
        },
        component: loadView('three/WaterModelNew'),
      },
      {
        path: 'lesson1',
        name: 'lesson1',
        meta: {
          label: '创建一个场景',
        },
        component: loadView('three/learn/lesson1.vue'),
      },
      {
        path: 'lesson2',
        name: 'lesson2',
        meta: {
          label: '画线',
        },
        component: loadView('three/learn/lesson2.vue'),
      },
    ],
  },
]

function loadView(path) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${path || ''}`)
}
