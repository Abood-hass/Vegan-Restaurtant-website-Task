import React, { Component } from 'react'
import MenuCard from '../../Components/MenuCard/MenuCard'
import './style.css'

export default class KitchenView extends Component {
    meals = [
        {
            mealName: "Phasellus convallis maximus",
            descText: "Lorem ipsum dolor sit amet",
            src: "https://s3-alpha-sig.figma.com/img/1ab4/444f/a825486651c271b38bceb3f47c8454e6?Expires=1672012800&Signature=V~AESkdN3lsHql0mDDuevpPF-OIFmg9hvPUJMl-AnL5zY-dqmjSPqYcndwUzzdAJfeF~LpUkLUCXG3JpNpIGPWu47K9zSsTxmycKP1NUDRcufbSpgg-2gUGB5Xb21oM3zErhJakQsly3X~26yA-Ug~C2N8etH9Ge8zDFFkgP0rS1hIS8p7T1Efyq7wLLv1dqPxt4a~m3-EJ5Iv~VtAivhFXXfBQAoZ03Qv1Kv1iiEaGTa3hzdopzSxgxVlG1eOFhgMQyWYBzjT-wTyvd7pTiugJ2Wnfn0N-WjL9dnAGn9kyJe2GhaQ2TwevZgbVbMoLwpfi3bExttWqgRCJRDvEbyw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            mealPrice: 15
        }, {
            mealName: "Phasellus convallis maximus",
            descText: "Lorem ipsum dolor sit amet",
            src: "https://s3-alpha-sig.figma.com/img/1ab4/444f/a825486651c271b38bceb3f47c8454e6?Expires=1672012800&Signature=V~AESkdN3lsHql0mDDuevpPF-OIFmg9hvPUJMl-AnL5zY-dqmjSPqYcndwUzzdAJfeF~LpUkLUCXG3JpNpIGPWu47K9zSsTxmycKP1NUDRcufbSpgg-2gUGB5Xb21oM3zErhJakQsly3X~26yA-Ug~C2N8etH9Ge8zDFFkgP0rS1hIS8p7T1Efyq7wLLv1dqPxt4a~m3-EJ5Iv~VtAivhFXXfBQAoZ03Qv1Kv1iiEaGTa3hzdopzSxgxVlG1eOFhgMQyWYBzjT-wTyvd7pTiugJ2Wnfn0N-WjL9dnAGn9kyJe2GhaQ2TwevZgbVbMoLwpfi3bExttWqgRCJRDvEbyw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            mealPrice: 15
        }, {
            mealName: "Phasellus convallis maximus",
            descText: "Lorem ipsum dolor sit amet",
            src: "https://s3-alpha-sig.figma.com/img/1ab4/444f/a825486651c271b38bceb3f47c8454e6?Expires=1672012800&Signature=V~AESkdN3lsHql0mDDuevpPF-OIFmg9hvPUJMl-AnL5zY-dqmjSPqYcndwUzzdAJfeF~LpUkLUCXG3JpNpIGPWu47K9zSsTxmycKP1NUDRcufbSpgg-2gUGB5Xb21oM3zErhJakQsly3X~26yA-Ug~C2N8etH9Ge8zDFFkgP0rS1hIS8p7T1Efyq7wLLv1dqPxt4a~m3-EJ5Iv~VtAivhFXXfBQAoZ03Qv1Kv1iiEaGTa3hzdopzSxgxVlG1eOFhgMQyWYBzjT-wTyvd7pTiugJ2Wnfn0N-WjL9dnAGn9kyJe2GhaQ2TwevZgbVbMoLwpfi3bExttWqgRCJRDvEbyw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            mealPrice: 15
        }, {
            mealName: "Phasellus convallis maximus",
            descText: "Lorem ipsum dolor sit amet",
            src: "https://s3-alpha-sig.figma.com/img/1ab4/444f/a825486651c271b38bceb3f47c8454e6?Expires=1672012800&Signature=V~AESkdN3lsHql0mDDuevpPF-OIFmg9hvPUJMl-AnL5zY-dqmjSPqYcndwUzzdAJfeF~LpUkLUCXG3JpNpIGPWu47K9zSsTxmycKP1NUDRcufbSpgg-2gUGB5Xb21oM3zErhJakQsly3X~26yA-Ug~C2N8etH9Ge8zDFFkgP0rS1hIS8p7T1Efyq7wLLv1dqPxt4a~m3-EJ5Iv~VtAivhFXXfBQAoZ03Qv1Kv1iiEaGTa3hzdopzSxgxVlG1eOFhgMQyWYBzjT-wTyvd7pTiugJ2Wnfn0N-WjL9dnAGn9kyJe2GhaQ2TwevZgbVbMoLwpfi3bExttWqgRCJRDvEbyw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            mealPrice: 15
        }, {
            mealName: "Phasellus convallis maximus",
            descText: "Lorem ipsum dolor sit amet",
            src: "https://s3-alpha-sig.figma.com/img/1ab4/444f/a825486651c271b38bceb3f47c8454e6?Expires=1672012800&Signature=V~AESkdN3lsHql0mDDuevpPF-OIFmg9hvPUJMl-AnL5zY-dqmjSPqYcndwUzzdAJfeF~LpUkLUCXG3JpNpIGPWu47K9zSsTxmycKP1NUDRcufbSpgg-2gUGB5Xb21oM3zErhJakQsly3X~26yA-Ug~C2N8etH9Ge8zDFFkgP0rS1hIS8p7T1Efyq7wLLv1dqPxt4a~m3-EJ5Iv~VtAivhFXXfBQAoZ03Qv1Kv1iiEaGTa3hzdopzSxgxVlG1eOFhgMQyWYBzjT-wTyvd7pTiugJ2Wnfn0N-WjL9dnAGn9kyJe2GhaQ2TwevZgbVbMoLwpfi3bExttWqgRCJRDvEbyw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            mealPrice: 15
        }, {
            mealName: "Phasellus convallis maximus",
            descText: "Lorem ipsum dolor sit amet",
            src: "https://s3-alpha-sig.figma.com/img/1ab4/444f/a825486651c271b38bceb3f47c8454e6?Expires=1672012800&Signature=V~AESkdN3lsHql0mDDuevpPF-OIFmg9hvPUJMl-AnL5zY-dqmjSPqYcndwUzzdAJfeF~LpUkLUCXG3JpNpIGPWu47K9zSsTxmycKP1NUDRcufbSpgg-2gUGB5Xb21oM3zErhJakQsly3X~26yA-Ug~C2N8etH9Ge8zDFFkgP0rS1hIS8p7T1Efyq7wLLv1dqPxt4a~m3-EJ5Iv~VtAivhFXXfBQAoZ03Qv1Kv1iiEaGTa3hzdopzSxgxVlG1eOFhgMQyWYBzjT-wTyvd7pTiugJ2Wnfn0N-WjL9dnAGn9kyJe2GhaQ2TwevZgbVbMoLwpfi3bExttWqgRCJRDvEbyw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            mealPrice: 15
        },
    ]

    render() {
        return (
            <div className='KitchenView' id='Menu'>
                <div className='KitchenViewHeader'>
                    <p>Straight From Kitchen</p>
                    <p>Our Menu</p>
                </div>
                <div className='KitchenViewBody'>
                    <div>
                        {this.meals.map(item => <MenuCard {...item} />)}
                    </div>
                    <div>
                        {this.meals.map(item => <MenuCard {...item} />)}
                    </div>
                </div>
            </div>
        )
    }
}
