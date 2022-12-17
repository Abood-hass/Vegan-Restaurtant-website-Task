import React, { Component } from 'react'
import BlogCard from '../../Components/BlogsCard/BlogCard'
import './style.css'

export default class BlogsView extends Component {
    data = [
        {
            "normalDir": 0,
            "src": 'https://s3-alpha-sig.figma.com/img/2f6c/81e4/6e98354be82f32f531a4b3dff0a83cb4?Expires=1672012800&Signature=M~X16W8QLgQHX6ZnDy1NrWrNc3dbYPj5wKCgDPo40HRmDoqtTDZWMzebesKRjd4GLbLsHgzAP9tdsjjtYMWxTTc6ewUMyMnw7s8Ba8RDdqV-E-V04jNIjVGs3jELsTeyYCRiYoTFgHV1MdIlzN0BiEb2kg4B6OkfF5FS5ewunt23DFFvrRtdiAwdfIz~ncuPKF0r99Ccy-ohcHza9ngRO5CNBrrkb4lpD6fffk6mcnOLEBRfZHrnzQi-eQ253jmId2eqkkDgX3gySlJejko-RpL1N9vlFAzufibRRn0SHYMHWPhNc4c~xl6voxetdTCc3jNotJwdoGC71QuHz0z3Fw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            "header": "Cooking Dining Experience",
            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
        },
        {
            "header": "Cooking Dining Experience",
            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
        },
        {
            "normalDir": 0,
            "src": 'https://s3-alpha-sig.figma.com/img/752d/3466/9134cf6b2a7d3dd1ed60809c78b98c51?Expires=1672012800&Signature=WBWuMXGVgCB7hG9tp5Ma2~me1u5Zp~dpT5PzN6PcViE82Y5lnKaJYi1I0KY76x12rNOEFkg3PQNbdMH375dgCtumxIh9gUtf3NFcB3ypveW9WY7aa-GWO8kXd531KFkaXsEk~k2w4clCLmD5pFBmu4JxmL0ilp0tBrB9~OGVtCb6~ZiY1peeL9D4hcHAVkCbC3~N9A9efSoe0Yh4pRi0pPo6jS68svvtMQrVhLPRWQRHezSoOkHRtpc3bJ2GCYWGD3GeomV8ZNa1pe6tzgsE6gd0g6yfDwdfn3yr-a-teGQnbdNLRRcZBd7314Cn1rdGjQNb8GEz-ZoezP7bsUWqgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            "header": "Cooking Dining Experience",
            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
        },


    ]
    render() {
        return (
            <div className='BlogsView'>
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
