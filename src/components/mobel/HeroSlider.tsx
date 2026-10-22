import Link from "@/components/mobel/MobelLink";

interface HeroSlide {
  title: string;
  description: string;
  backgroundImage: string;
  buttonText: string;
  buttonLink: string;
}

interface HeroSliderProps {
  slides: HeroSlide[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  return (
    <section className="header-content">
      <div className="owl-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="item"
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          >
            <div className="box">
              <div className="container">
                <h2 className="title animated h1" data-animation="fadeInDown">
                  {slide.title}
                </h2>
                <div className="animated" data-animation="fadeInUp">
                  {slide.description}
                </div>
                <div className="animated" data-animation="fadeInUp">
                  <Link href={slide.buttonLink} className="btn btn-main">
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
