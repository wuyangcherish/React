var React = require("react");
var ReactDOM = require('react-dom');
var $ = require('jquery');
var promise = require('promise')

var RepoList = React.createClass({
	getInitialState: function(){
		return{
			loading: true,
			error: null,
			data: null
		}
	},

	componentDidMount: function(){
		this.props.promise.then(
			value => this.setState({loading: false, data: value}),
			error => this.setState({loading: false, error: error})
		)
	},

	render: function(){
		if(this.state.loading){
			return <p>Loading ...</p>
		}else if(this.state.error !== null){
			return <p>this.state.error.message</p>;
		}else{
		{/*那么正文来啦哈哈*/}
			var repos = this.state.data.items;
			var reposList = repos.map(function(repo, index){
				return (
				<li key={index}><a href={repo.html_url}>{repo.name}</a>({repo.stargazers_count} stars)<br/>{repo.description}</li>
				);
			});
			return (
				<main>
					<h1>Most Popular Javascript Project in GitHub</h1>
					<ol>{reposList}</ol>
				</main>
			)
		}
	}
});

ReactDOM.render(<RepoList promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')} />
	,document.getElementById('example')
)


































