

const key = "COMMENTS";

if(!localStorage.getItem(key)) {
	let data = {
		comments:[
			{imgSrc:'http://7xlqb6.com1.z0.glb.clouddn.com/user.jpg',username:'Kay', text:'这是测试的评论'},
			{imgSrc:'http://7xlqb6.com1.z0.glb.clouddn.com/user.jpg',username:'Ray', text:'我喜欢评论'}
		]
	}

	localStorage.setItem(key, JSON.stringify(data));

}


export const storage={
	get(){
		return JSON.parse(localStorage.getItem(key))
	},
	save(store){
		localStorage.setItem(key, JSON.stringify({"comments":store}))
	}
}