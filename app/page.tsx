export default function Home() {

	return (
    	<main
			style = {{
				backgroundImage: `url('/home_bg.jpg')`
			}}
			className = 'w-screen h-screen bg-cover bg-center relative'
		>
			<div className = 'absolute left-0 right-0 top-0 bottom-0 m-auto border w-96 h-96 rounded-md'>
				<form>
					<input type = "text" placeholder = "请输入用户名" 
						className = 'absolute w-80 h-11 left-0 right-0 mx-auto rounded-md outline-0 opacity-85 mt-20 pl-3 
									hover:border-white-300 hover:border'
					/>
					<input type = "password" placeholder = "请输入密码"
						className = 'absolute w-80 h-11 left-0 right-0 mx-auto rounded-md outline-0 opacity-85 mt-40 pl-3
									hover:border-white-300 hover:border'
					/>
					<button 
						className = 'absolute mt-60 left-0 right-0 mx-auto  w-20 h-8
									bg-pink-400 hover:bg-pink-500 rounded-md'
					>
						登 录
					</button>
				</form>
			</div>

		</main>
  	)
}
