import React from 'react'

class Home extends React.Component {
    state = { search: "" }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleSearchChange = (e) => {
        this.setState({search: e.target.value});
    }

    handleApiSearch = async () => {
        try {
            
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        console.log(this.state);
        let { search } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                    placeholder="Enter a Search"
                    name="search"
                    value={search}
                    onChange={this.handleSearchChange}/>
                    <button type="submit">Search</button>
    
                </form>
            </div>
    
        )

    }
}

export default Home