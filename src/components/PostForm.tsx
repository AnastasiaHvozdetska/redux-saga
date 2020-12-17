import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../redux/actions'

interface IPostFormState {
    title: string,
    value: string
}

type IPostFormProps = {
    createPost: Function
}

class PostForm extends Component<IPostFormProps, IPostFormState> {
    constructor(props: IPostFormProps) {
        super(props)

        this.state = {
            title: '',
            value: ''
        }
    }

    private submitHandler = async (
        e: React.FormEvent<HTMLFormElement>
      ): Promise<void> => {
        e.preventDefault();
        const { title } = this.state

        if(!title.trim()) {
            return
        }

        const newPost = {
            title,
            id: Date.now().toString()
        }

        this.props.createPost(newPost)
        this.setState({
            title: ''
        })
    };

    changeInputHandler = (event: SyntheticEvent) => {
        this.setState((prev => ({
            ...prev,
            [event.target.name]: event.target.value
        })))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler} action="">
                <div className="form-group">
                    <label htmlFor="title">Post title</label>
                    <input 
                        id="title"
                        name="title"
                        className="form-control"
                        value={this.state.value}
                        type="text"
                        onChange={this.changeInputHandler}
                    />
                </div>

                <button className="btn btn-success" type="submit">
                    Create
                </button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createPost,
}

export default connect(null, mapDispatchToProps)(PostForm)
