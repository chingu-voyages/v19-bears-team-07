import React, { useState } from "react"
import { navigate } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"
import "./app-carousel.css"

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap"

export const AppCarousel = props => {
  const { apps: items, className } = props
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = newIndex => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map((item, index) => {
    const { image, imageUrl, name, description, url } = item
    return (
      <CarouselItem
        className={"AppCarousel-Item"}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index.toString() + "-" + url}
        onClick={() => navigate(url)}
      >
        <img
          src={image ? image : imageUrl}
          alt={name}
          className={"AppCarousel-ItemImage"}
        />
        <CarouselCaption
          captionText={description}
          captionHeader={name}
          onClick={() => navigate(url)}
          className={"AppCarousel-Caption"}
        />
      </CarouselItem>
    )
  })

  return (
    <div className={"AppCarousel-container"}>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  )
}
