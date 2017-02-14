import Main from './template/Main.vue';
import Zjjg from './template/Zjjg.vue';
import Qqzxxqy from './template/Qqzxxqy.vue'
import Message from './template/Message.vue'
import News from './template/News.vue'
import Connre from './template/connet.vue'
export default [
	{
		path:"/main",
		component:Main
	},
	{
		path:"/zjjg",
		component:Zjjg
	},
	{
		path:"/news",
		component:News
	},
    {
        path:"/qqzxxqy",
        component:Qqzxxqy
    },
	{
		path:"/message",
		component:Message
	},{
		path: "/connet/:id",
        component : Connre
	},{
        path:"/",
        redirect:'/main'
    }
];