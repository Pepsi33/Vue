import Login from '../pages/common/Login.vue'
import NotFound from '../pages/common/404.vue'
import Home from '../pages/common/Home.vue'
import Main from '../pages/common/Main.vue'
import Table from '../pages/nav1/Table.vue'
import Form from '../pages/nav1/Form.vue'
import user from '../pages/nav1/user.vue'
import Page4 from '../pages/nav2/Page4.vue'
import Page5 from '../pages/nav2/Page5.vue'
import Page6 from '../pages/nav3/Page6.vue'
import echarts from '../pages/charts/echarts.vue'
import Markdown from '../pages/charts/Markdown.vue'
import MixCharts from '../pages/charts/MixCharts.vue'
import Upload from '../pages/charts/Upload.vue'
import VueEditor from '../pages/charts/VueEditor.vue'

import ogUserReq from '../pages/ogReq/ogUserReq.vue'
let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/index', component: Main, name: '首页' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航一',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页'},
            { path: '/table', component: Table, name: 'Table' },
            { path: '/form', component: Form, name: 'Form' },
            { path: '/user', component: user, name: '列表' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航二',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: Page4, name: '页面4' },
            { path: '/page5', component: Page5, name: '页面5' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Page6',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/page6', component: Page6, name: '导航三' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: 'echarts' },
            { path: '/Markdown', component: Markdown, name: 'Markdown' },
            { path: '/MixCharts', component: MixCharts, name: 'MixCharts' },
            { path: '/Upload', component: Upload, name: 'Upload' },
            { path: '/VueEditor', component: VueEditor, name: 'VueEditor' }
        ]
    },
    {
        path: '/ogReq',
        component: Home,
        name: '原始需求',
        iconCls: 'fa fa-file-archive-o',
        children: [
            { path: '/ogUserReq', component: ogUserReq, name: '用户需求' },
            { path: '/ogMktReq', component: echarts, name: '市场需求' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;