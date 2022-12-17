import React from 'react'
import BlogButtom from './BlogButtom/BlogButtom'
import './style.css'

export default function BlogCard({ header = "Header", normalDir = 1, body = "Body", src = 'https://s3-alpha-sig.figma.com/img/6396/72a0/f7b842166feeef52e3ebaece99462c58?Expires=1672012800&Signature=kb-FvNtODjuTo0pKSYujql8uypVJSQN~bidhbQUN2I82ho6jbc4-7ebmzYdTbOvpDq-qmUwH9mwK1qEVVz1csZIHQhMJ5Ni0bOpi1V9BQoG5OzY4uKh3B~58K7ZMEJ0jR1FEp0Fg-jxO3lPxFc8BtfFHoZoUtHA5~pzJEaC74BSPCjJs3eE0-fF~uzCmyW~Wg3LgSglDvfu6RG482h2H~YppKi6W-Iek2UEv4udJ3M-YLgQ8SnrmIT64C-MLAc6h33SNzVGtlY9K6bQtuiOWqctlck-Mf5ahO6l~1aVW4w5GO1vgoYneIRW~ek1gD1N4CMiCZPPfqmo5Kh3nCJNXGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }) {
    const topPlace = { top: '0px', left: '0px' };
    const bottomPlace = { bottom: '0px', left: '0px' };

    return (
        <div className='BlogCardMain'>
            <div className='BlogCardHeader' style={(normalDir) ? topPlace : bottomPlace}>
                <span>{header}</span>
                <p>{body}</p>
                <BlogButtom />
            </div>
            <img className='BlogCardImg' style={(!normalDir) ? topPlace : bottomPlace} src={src} alt="" />

        </div>
    )
}
