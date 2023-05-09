import './styles/ModelDescription.css'

function modelDescription({ id }) {
    switch (id) {
        case 0:
            return (
                <div className="blankDiv"></div>
            );
        case 1:
            return (
                <div className="presentWindow">
                    PAINT1<br />
                    這張3D建模作品是一個生態系，利用波浪置換器和雕塑功能設計出字體，並加上玻璃字效果，搭配上草叢與天空HDRI，讓整個作品更加獨特。
                    This 3D modeling artwork is an ecosystem, utilizing wave displacement and sculpting functions to design the font, and adding a glass letter effect. It is paired with grass and a sky HDRI to make the entire artwork more unique.
                </div>
            );
        case 2:
            return (
                <div className="presentWindow">
                    PAINT2<br />
                    此張作品是一個夢幻的生態草地，用豐富多彩的色彩呈現，帶人進入我的想像烏托邦。
                    This artwork is a dreamy ecological grassland presented with rich and colorful hues, taking people into my imagined utopia.
                </div>
            );

        case 3:
            return (

                <div className="presentWindow">
                    PAINT4<br />
                    這張作品是一個充滿花叢的空間，花朵綻放，充滿生命力，但同時也讓人感到一絲不安，營造出獨特的氛圍。
                    This artwork depicts a space filled with clusters of flowers in full bloom, exuding vitality and life, yet also giving a slight sense of unease, creating a unique atmosphere.
                </div>
            );

        case 4:
            return (
                <div className="presentWindow">
                    PAINT3<br />
                    這件3D作品讓觀眾沉浸在廣袤而奇妙的太空場景中。巧妙運用粒子系統創造出錯綜複雜且迷人的行星和行星環，給人一種真正漂浮在外太空中的感覺。
                    This 3D artwork immerses the audience in a vast and wondrous space scene. The clever use of particle systems creates intricate and fascinating planets and planetary rings, giving the viewer a true sense of floating in outer space.F
                </div>
            );

        default:
            return (
                <div className="blankDiv"></div>
            );
    }
}
export default modelDescription;
