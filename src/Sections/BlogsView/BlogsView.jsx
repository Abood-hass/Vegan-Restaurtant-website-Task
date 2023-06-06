import React, { Component } from 'react'
import BlogCard from '../../Components/BlogsCard/BlogCard'
import './style.css'

export default class BlogsView extends Component {
    data = [
        {
            "normalDir": 0,
            "src": 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80',
            "header": "Cooking Dining Experience",
            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
        },
        {
            "header": "Cooking Dining Experience",
            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin ",
            "src": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
        },
        {
            "normalDir": 0,
            "src": 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            "header": "Cooking Dining Experience",
            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
        },


    ]
    render() {
        return (
            <div className='BlogsView' id='Blog'>
                <div className='BlogsViewHeader'>
                    <p>Blogs</p>
                    <p>words from our food lovers</p>
                </div>
                <div className='BlogsViewBody'>

                    {this.data.map(item => <BlogCard {...item} />)}
                </div>
            </div>
        )
    }
}
